import React, { useEffect, useRef, useState } from 'react';
import styles from './Msgboard.less';
import { observer } from 'mobx-react-lite';
import useStore from '@/context/userStore';
import MsgboardComment from '@/components/MsgboardComment';
import MsgMasList from '@/components/MsgMasList';
const Msgboard: React.FC = () => {
  let { Msgbord } = useStore();
  const [btnFlag, setBtnFlag] = useState<boolean>(false);
  const [tabIndex, setTabIndex] = useState<null | number>(null);
  useEffect(() => {
    Msgbord.getMsgbordList();
    Msgbord.getmsgList();
  }, []);

  function packUp() {
    setTabIndex(null);
  }
  function changePagination(num: number) {
    Msgbord.getMsgbordList(num);
  }
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h2>留言板</h2>
      </div>
      <div className={styles.context}>
        <p className={styles.Pp}>评论</p>
        <MsgboardComment
          msgPList={Msgbord.msgPList}
          packUp={packUp}
          changePagination={changePagination}
          btnFlag={btnFlag}
          setTabIndex={setTabIndex}
          tabIndex={tabIndex}
          total={Msgbord.total}
        />
        <div className={styles.msgBottom}>
          <p>推荐阅读</p>
          <MsgMasList masList={Msgbord.masList} />
        </div>
      </div>
    </div>
  );
};

export default observer(Msgboard);
