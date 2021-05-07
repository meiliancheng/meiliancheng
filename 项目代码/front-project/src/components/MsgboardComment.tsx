import React, { useState } from 'react';
import Comment from '@/components/Comment';
import { WechatOutlined } from '@ant-design/icons';
import { Pagination, Spin, Image } from 'antd';
import { observer } from 'mobx-react-lite';
import 'viewerjs/dist/viewer.css';
import Viewer from 'viewerjs';
import styles from '@/pages/page/msgboard/Msgboard.less';
import { timeAgo } from '@/utils';
import { MasbordItem } from '@/utils/interface';
import Msgbord from '@/store/modules/Msgboard';
interface Iprops {
  msgPList: MasbordItem[];
  packUp: () => void;
  changePagination: (current: number) => void;
  btnFlag: boolean;
  setTabIndex: (index: number) => void;
  tabIndex: null | number;
  total: number;
}
const MsgboardComment: React.FC<Iprops> = (props) => {
  const {
    msgPList,
    packUp,
    changePagination,
    btnFlag,
    setTabIndex,
    tabIndex,
    total,
  } = props;
  return (
    <div
      className={styles.context_top}
      onClick={(e: React.MouseEvent) => {
        if (((e.target as unknown) as HTMLElement).tagName === 'IMG') {
          const viewer = new Viewer((e.target as unknown) as HTMLElement, {
            inline: false,
            button: true,
            viewed() {
              viewer.zoomTo(1);
            },
          });
        }
      }}
    >
      <Comment btnFlag={btnFlag} />
      <div>
        {msgPList.length > 0
          ? msgPList.map((item, index) => {
              let bgc = Math.random().toString(8).substr(-6);
              return (
                <div key={item.id} className={styles.msgPlistItem}>
                  <div className={styles.msgPlistHeader}>
                    <span
                      style={{
                        backgroundColor: `#${bgc}`,
                        color: '#fff',
                        lineHeight: '32px',
                        display: 'inline-block',
                        width: '32px',
                        height: '32px',
                        textAlign: 'center',
                        borderRadius: '50%',
                      }}
                    >
                      <span
                        style={{
                          transform: 'scale(1) translateX(-50%)',
                        }}
                      >
                        {item.name.substr(0, 1).toLocaleUpperCase()}
                      </span>
                    </span>

                    <span style={{ marginLeft: '10px' }}>{item.name}</span>
                  </div>
                  <main className={styles.msgPlistMain}>
                    <div
                      style={{ padding: '10px 0' }}
                      dangerouslySetInnerHTML={{
                        __html: item.html || item.content,
                      }}
                    />
                    <div style={{ color: 'rgba(0, 0, 0, 0.35)' }}>
                      <span> {item.userAgent}</span>
                      <span style={{ padding: '0 20px' }}>
                        {timeAgo(+new Date(item.updateAt))}前
                      </span>
                      <span
                        className={styles.msgPlistIcont}
                        onClick={() => {
                          setTabIndex(index);
                        }}
                      >
                        <WechatOutlined /> 回复
                      </span>
                    </div>
                    <div>
                      {item.children.map((it, ind) => {
                        return (
                          <div
                            key={it.id}
                            // className={styles.msgPlistHeader}
                            style={{ paddingTop: '16px' }}
                          >
                            <div className={styles.msgPlistHeader}>
                              <span
                                style={{
                                  backgroundColor: `#${bgc}`,
                                  color: '#fff',
                                  lineHeight: '32px',
                                  display: 'inline-block',
                                  width: '32px',
                                  height: '32px',
                                  textAlign: 'center',
                                  borderRadius: '50%',
                                }}
                              >
                                <span
                                  style={{
                                    transform: 'scale(1) translateX(-50%)',
                                  }}
                                >
                                  {it.name.substr(0, 1).toLocaleUpperCase()}
                                </span>
                              </span>

                              <span style={{ marginLeft: '10px' }}>
                                {`${it.name}   回复  `}
                                <span style={{ color: '#ff0064' }}>
                                  {item.name}
                                </span>
                              </span>
                            </div>
                            <main className={styles.msgPlistMain}>
                              <div
                                style={{ padding: '10px 0' }}
                                dangerouslySetInnerHTML={{
                                  __html: it.html || it.content,
                                }}
                              />
                              <div style={{ color: 'rgba(0, 0, 0, 0.35)' }}>
                                <span> {it.userAgent}</span>
                                <span style={{ padding: '0 20px' }}>
                                  {timeAgo(+new Date(it.updateAt))}前
                                </span>
                                <span
                                  className={styles.msgPlistIcont}
                                  onClick={() => {
                                    setTabIndex(index);
                                  }}
                                >
                                  <WechatOutlined /> 回复
                                </span>
                              </div>
                            </main>
                          </div>
                        );
                      })}
                    </div>
                  </main>

                  {tabIndex === index ? (
                    <Comment
                      btnFlag={btnFlag}
                      CommentFlag={true}
                      setCommentFlag={packUp}
                      textFlag="回复"
                      parentCommentId={item.id}
                      replyuserEmail={item.email}
                      replyuserName={item.name}
                    />
                  ) : (
                    ''
                  )}
                </div>
              );
            })
          : '暂无评论'}
      </div>
      <div className={styles.List}>
        <Pagination
          size="small"
          total={total}
          defaultPageSize={6}
          onChange={(current) => changePagination(current)}
        />
      </div>
    </div>
  );
};
export default observer(MsgboardComment);
