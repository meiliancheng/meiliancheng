import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from '@/pages/page/msgboard/Msgboard.less';

import { timeAgo } from '@/utils';
import { Spin } from 'antd';

import { history } from 'umi';
import { msgListItem } from '@/utils/interface';
interface Iprops {
  masList: msgListItem[];
}
const MsgMasList: React.FC<Iprops> = (props) => {
  const { masList } = props;
  return (
    <div>
      {masList.length > 0 ? (
        <div>
          {masList.map((item) => {
            return (
              <div
                key={item.id}
                className={styles.TuijianyueduItem}
                onClick={() => {
                  history.push(`/Detail/${item.id}`);
                }}
              >
                <div>
                  <img src={item.cover} alt="" />
                </div>
                <div>
                  <p>{item.title}</p>
                  <p dangerouslySetInnerHTML={{ __html: item.summary }}></p>
                  <div
                    style={{ color: 'rgba(0, 0, 0, 0.35)' }}
                    className={styles.TuijianyueduItemHuifu}
                  >
                    {item.category !== null
                      ? `${item.category.label} · ${
                          item.views
                        } 次阅读 · ${timeAgo(+new Date(item.createAt))}前`
                      : `${item.views} 次阅读 · `}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ margin: '0 auto', width: '100%' }}>
          {' '}
          <Spin />
        </div>
      )}
    </div>
  );
};

export default observer(MsgMasList);
