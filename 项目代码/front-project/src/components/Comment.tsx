import React, { useState } from 'react';
import { Button, message } from 'antd';
import styles from './Comment.less';
import useStore from '@/context/userStore';
interface Iprops {
  btnFlag: boolean;
  CommentFlag?: Boolean;
  setCommentFlag?: () => void;
  //判断是不是回复按钮任意值就可以 不是undefined就行
  textFlag?: string;
  //回复得父标签得信息
  parentCommentId?: string;
  replyuserEmail?: string;
  replyuserName?: string;
}
const Comment: React.FC<Iprops> = (props) => {
  let {
    textFlag = undefined,
    CommentFlag = false,
    setCommentFlag,
    parentCommentId,
    replyuserEmail,
    replyuserName,
  } = props;
  const [strText, setstrText] = useState<string>('');
  const [btnFlags, setBtnFlags] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const { Msgbord } = useStore();
  function setFlag(strText: string, name: string, email: string) {
    if (strText === '' || name === '' || email === '') {
      setBtnFlags(false);

      return;
    }
    setBtnFlags(true);
  }
  function submitPing() {
    if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email)) {
      message.error('邮箱格式有误');

      return;
    }
    if (textFlag === undefined) {
      Msgbord.addCommit(
        strText,
        email,
        '8d8b6492-32e5-44e5-b38b-9a479d1a94bd',
        name,
        location.pathname,
      );
      setstrText('');
      setBtnFlags(false);
    } else {
      Msgbord.replyCommit(
        strText,
        email,
        '8d8b6492-32e5-44e5-b38b-9a479d1a94bd',
        name,
        parentCommentId!,
        replyuserEmail!,
        replyuserName!,

        location.pathname,
      );
      setstrText('');
      setBtnFlags(false);
    }
  }
  return (
    <div className={styles.contextTop_pinglin}>
      <div>
        <textarea
          className={styles.contextTopTextField}
          placeholder="请输入评论内容（可输入 Markerdown 语法内容）"
          value={strText}
          onChange={(e: React.ChangeEvent) => {
            setstrText(((e.target as unknown) as HTMLElement).value);
            setFlag(strText, name, email);
          }}
        ></textarea>
        <div className={styles.contextTopTextFieldInput}>
          <input
            type="text"
            placeholder="请输入您的称呼"
            value={name}
            onChange={(e: React.ChangeEvent) => {
              setName(((e.target as unknown) as HTMLElement).value);
              setFlag(strText, name, email);
            }}
          />
          <input
            type="text"
            placeholder="请输入您的邮箱（不会公开，您也可以选择不输入）"
            value={email}
            onChange={(e: React.ChangeEvent) => {
              setEmail(((e.target as unknown) as HTMLElement).value);
              setFlag(strText, name, email);
            }}
          />
        </div>

        <div className={styles.contextTopButton}>
          {CommentFlag && (
            <Button
              type="primary"
              onClick={setCommentFlag}
              style={{ marginRight: '10px' }}
            >
              收起
            </Button>
          )}
          {btnFlags ? (
            <button
              className={styles.GlobalBtn}
              onClick={() => {
                submitPing();
              }}
            >
              评 论
            </button>
          ) : (
            <button className={styles.GlobalBtnJin} disabled>
              评论
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Comment;
