import React, { useEffect, useState, useRef } from 'react'
import { observer } from 'mobx-react-lite';
import useStore from '@/context/userStore';
import styles from "./index.less";
import { Child } from "../../utils/interface"
import Edit from "../../components/Comment"
import { useLocation, NavLink } from "umi";
interface Itoc {
    id: string,
    level: string,
    text: string
}
function index() {
    let location = useLocation();
    let { knowledge } = useStore();
    const [childlist, setChildlist] = useState<any[]>([])
    const [children, setChildren] = useState([])
    useEffect(() => {
        let id = location.pathname.split('/')[2];
        let children = (location as any).state.children;
        setChildren(children)
        knowledge.readingId(id);

        // setChildlist(childList)
    }, [childlist.length])
    const times = (time: string) => {
        return time.split("T")[0] + time.split("T")[1].split('.')[0]
    }
    //切换标题
    const changeRead = (id: string) => {
        knowledge.readingId(id);
    }
    //处理数组
    let list = JSON.parse(JSON.stringify(knowledge.TocList))
    console.log(childlist)
    console.log({ ...knowledge.readingObj });
    return (
        <div className={styles.deatilIndex}>
            <div className={styles.mian}>

                <h1 style={{ fontWeight: 800 }}>{knowledge.readingObj.title}</h1>
                <i className={styles.Iem}>发布于{knowledge.readingObj.publishAt && times(knowledge.readingObj.publishAt)}·阅读量{knowledge.readingObj.views}</i>
                <div className="markdown" dangerouslySetInnerHTML={{ __html: knowledge.readingObj.html }}>
                </div>
                <div>发布于{knowledge.readingObj.publishAt && times(knowledge.readingObj.publishAt)}版权信息：非商用-署名-自由转载</div>
                <Edit btnFlag />
            </div>
            <div className={styles.adside}>
                <ul className={styles.readTop}>
                    {
                        children && children.map((item: Child) => {
                            return <li key={item.id}><NavLink to={{ pathname: `/titledeatil/${item.id}`, state: { children: children } }} onClick={() => {
                                changeRead(item.id)
                            }}>{item.title}</NavLink></li>
                        })
                    }
                </ul>
                <div className={styles.botmu}>
                    <header>目录</header>
                    <ul className={`${styles.list}  right`}>
                        {

                            list && list.map((item: Itoc, index: number) => {
                                return <li key={item.id} onClick={() => {
                                    let childList = (document.getElementById(item.id) as unknown) as Element;
                                    childList.scrollIntoView({
                                        behavior: "smooth"
                                    })

                                }}><span>{item.level === "2" ? item.text : ''}</span>
                                    <span> {item.level === "3" ? item.text : ''}</span>
                                    <span> {item.level === "4" ? item.text : ''}</span>
                                </li>
                            })

                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default observer(index);