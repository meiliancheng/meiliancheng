import React, { useEffect, useState } from 'react';
import styles from './index.less';
//引入文章组件
import Category from '../../components/Category';
//引入文章标签
import Tag from '../../components/Tag';
import { observer } from 'mobx-react-lite';
import useStore from '@/context/userStore';
import { List } from 'antd';
import { timeAgo } from '../../utils/time';
import { getKonwdgeitem } from '@/utils/interface';
import 'lib-flexible';
import { useHistory } from 'umi';
function knowledge() {
  let { knowledge } = useStore();
  let history = useHistory();

  useEffect(() => {
    knowledge.getKonwdgeList();
    knowledge.classList();
    knowledge.tagList();
  }, []);
  //知识文章列表数据
  let list = JSON.parse(JSON.stringify(knowledge.knowdeglist))[0];

  return (
    <div className={styles.knowledgeIndex}>
      <List className={styles.list}>
        {list &&
          list.map((item: getKonwdgeitem) => {
            return (
              <List.Item
                key={item.id}
                className={styles.listItem}
                onClick={() => {
                  //跳转详情页
                  history.push('/knowledgeDeatil/' + item.id);
                }}
              >
                <img src={item.cover} alt="" />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.summary}</p>
                  <p>
                    {item.views}次阅读·大约{timeAgo(+new Date(item.createAt))}前
                  </p>
                </div>
              </List.Item>
            );
          })}
      </List>
      <div className={styles.Category}>
        <Category
          articeclasslist={JSON.parse(
            JSON.stringify(knowledge.articeclasslist),
          )}
        />
        <Tag taglist={JSON.parse(JSON.stringify(knowledge.Taglist))} />
      </div>
    </div>
  );
}
export default observer(knowledge);
