import React, { useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js';
import useStore from '@/context/userStore';
import styles from './Detail.less';
import { Spin, message } from 'antd';
import { observer } from 'mobx-react-lite';
import { DatabaseOutlined } from '@ant-design/icons';
import { computeTime } from '@/utils/time';
import { history } from 'umi';
import { DetailMuItem } from '@/utils/interface';
import 'viewerjs/dist/viewer.css';
import Viewer from 'viewerjs';
function copy(value: string) {
  let textare = document.createElement('textarea');
  document.body.appendChild(textare);
  textare.value = value;
  textare.select();
  document.execCommand('copy');
  message.success('内容已复制到剪切板');
  textare.parentNode?.removeChild(textare);
}
function Detail() {
  let { Msgbord } = useStore();
  let [tabIndex, setIndex] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let id = location.pathname.slice(8);
    Msgbord.getTuijianDetail(Msgbord.Detail.id);
    Msgbord.getDetail(id);
  }, []);

  useEffect(() => {
    console.log(ref.current);
    if (ref.current === null) {
      return () => {
        console.log('第一遍执行');
      };
    }
    ref.current!.querySelectorAll('pre code').forEach((block) => {
      var copyBtn = document.createElement('button');
      copyBtn.innerText = '复制';
      copyBtn.classList.add('copy');
      copyBtn.style.cssText = `  position: absolute;
      top: 9px;
      right: 10px;
      font-size: 12px;
      line-height: 1;
      cursor: pointer;
      color: hsla(0, 0%, 54.9%, 0.8);
      transition: color 0.1s;
      border: none;
      background: transparent;`;
      block.parentNode?.appendChild(copyBtn);
      copyBtn.onclick = () => copy((block as HTMLElement).innerText);
      hljs.highlightBlock(block as HTMLElement);
    });
  }, [Msgbord.Detail]);

  if (JSON.stringify(Msgbord.Detail) === '{}') {
    return <Spin />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.meraager}>
        <div className={styles.meraagerLeft}>
          <div>
            <div>
              <img
                id="imgId"
                src={Msgbord.Detail.cover}
                alt="文章封面"
                onClick={(e) => {
                  const viewer = new Viewer(
                    (e.target as unknown) as HTMLElement,
                    {
                      inline: false,
                      button: true,
                      viewed() {
                        viewer.zoomTo(1);
                      },
                    },
                  );
                }}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <h1 className={styles.meraagerLeftH}>{Msgbord.Detail.title}</h1>
              <p className={styles.meraagerLeftP}>{`发布于 ${new Date(
                Msgbord.Detail.updateAt,
              ).getFullYear()} - ${
                new Date(Msgbord.Detail.updateAt).getMonth() + 1
              } - ${new Date(Msgbord.Detail.updateAt).getDate()} ${new Date(
                Msgbord.Detail.updateAt,
              ).getHours()}:${new Date(
                Msgbord.Detail.updateAt,
              ).getMinutes()}:${new Date(
                Msgbord.Detail.updateAt,
              ).getSeconds()} · ${Msgbord.Detail.views}阅读量`}</p>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: Msgbord.Detail.html }}
              className={styles.markdown}
              ref={ref}
            />
          </div>
        </div>
        <div className={styles.meraagerRight}>
          <div className={styles.sticky}>
            <div>
              <div className={styles.stickyTopH}>
                <DatabaseOutlined />
                <span>推荐文章</span>
              </div>
              <div className={styles.stickyTuijianList}>
                <ul>
                  {Msgbord.TuijianDetail.map((item) => {
                    return (
                      <p
                        key={item.id}
                        onClick={() => {
                          history.push(`/Detail/${item.id}`);
                        }}
                      >{`${item.title} · ${computeTime(item.createAt)} `}</p>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className={styles.tabNav}>
              <header>目录</header>
              <div>
                {JSON.parse(Msgbord.Detail.toc).map(
                  (item: DetailMuItem, index: number) => {
                    return (
                      <div
                        key={item.id}
                        onClick={() => {
                          let div = (document.getElementById(
                            item.id,
                          ) as unknown) as HTMLElement;

                          div.scrollIntoView({
                            behavior: 'smooth',
                          });
                          setIndex(index);
                          console.log(document.querySelectorAll(`h2`));
                        }}
                      >
                        <li className={tabIndex === index ? styles.active : ''}>
                          {item.text}
                        </li>
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default observer(Detail);
