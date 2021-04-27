import React, { useEffect, useState } from 'react'
import styles from "./index.less"
import { observer } from 'mobx-react-lite';
import useStore from '@/context/userStore';
import { Child, getKonwdgeitem } from "@/utils/interface"
import { useLocation, useHistory } from "umi";
import { Button } from "antd";
import { timeAgo } from "../../utils/time"

function detail(props: any) {
    const location = useLocation();
    const history = useHistory();
    let { knowledge } = useStore();

    const [id, setId] = useState('')
    const times = (time: string) => {
        return time.split("T")[0] + time.split("T")[1].split('.')[0]
    }
    useEffect(() => {
        //截取到id
        let id = location.pathname.split("/")[2];
        // 保存id
        knowledge.detailKnowdege(id);
        knowledge.getKonwdgeList();
    }, [])
    let detailobj = JSON.parse(JSON.stringify(knowledge.detailobj));
    console.log(detailobj.children)


    const changeview = (id: string) => {
        knowledge.detailKnowdege(id);
    }

    return (
        <div className={styles.deatilIndex}>
            <p>知识笔记/{detailobj.title}</p>
            <header>{detailobj.title}</header>
            <div className={styles.mian}>

                <div className={styles.body}>
                    <div>
                        <img src={detailobj.cover} alt="" />
                    </div>
                    <div>
                        <p>{detailobj.title}</p>
                        <p>{detailobj.summary}</p>
                        <p>{detailobj.views}·次阅读{detailobj.createAt && times(detailobj.createAt)}</p>
                        <div className={styles.reading}>
                            <Button style={{ background: "#F40A12" }} onClick={() => {
                                history.push({pathname:"/titledeatil/" + detailobj.children[0].id,state: { children: detailobj.children }})
                            }}> 开始阅读 </Button>
                        </div>
                    </div>
                    <ul className={styles.list}>
                        {
                            detailobj.children && detailobj.children.map((item: Child) => {
                                return <li key={item.id} onClick={() => {
                                    history.push({ pathname: "/titledeatil/" + item.id, state: { children: detailobj.children } })
                                }}><span>{item.title}</span> <span>{times(item.createAt) + '→'}</span></li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className={styles.aside}>
                <header>其他知识笔记</header>
                {
                    knowledge.newlist && knowledge.newlist.map((item: getKonwdgeitem) => {
                        return <div key={item.id} className={styles.sideItem} onClick={() => {
                            changeview(item.id)
                        }}>
                            <img src={item.cover} alt="" />
                            <div>
                                <p>{item.title}</p>
                                <p>{item.summary}</p>
                                <p>{item.views}次阅读·大约{timeAgo(+ new Date(item.createAt))}前</p>

                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
export default observer(detail);
