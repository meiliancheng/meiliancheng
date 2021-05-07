import React, { useEffect } from 'react'
import styles from "./index.less"
import { observer } from 'mobx-react-lite';
import useStore from '@/context/userStore';
import { timeAgo } from "../../utils/time"
//引入文章组件
import Category from "../../components/Category"
//引入文章标签
import Tag from "../../components/Tag"
import { getKonwdgeitem } from "@/utils/interface";
import { useHistory } from "umi"

function index(props: any) {
    const { knowledge } = useStore();
    const history = useHistory();
    useEffect(() => {
        let value = props.match.params.value;
        console.log(value)
        if (props.location.state != null) {

            let pageSize = props.location.state.pageSize;
            knowledge.articeValueList(value, pageSize)
        }
        knowledge.classList();
        knowledge.tagList();

    }, [])
    let title = localStorage.getItem("title")
    const artileList = JSON.parse(JSON.stringify(knowledge.aritcedetailList));
    console.log(artileList)
    return (
        <div className={styles.actPage}>
            <div>
                <div className={styles.actTitle}>
                    <div>
                        <svg viewBox="64 64 896 896" focusable="false" style={{ fontSize: "40px", color: "#A6A6A6" }} data-icon="book" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 72h96v209.9L621.5 312 572 347.4V136zm220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0 0 22.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752z"></path></svg>

                        <p><span style={{ fontSize: "28px", color: "#FF0064" }}>{
                            title
                        }</span>分类文章</p>
                        <p>共搜索 <span style={{ fontSize: "20px", color: "#FF0064" }}>{artileList[1]}</span> 篇文章</p>
                    </div>
                </div>
                <div className={styles.list}>
                    {
                        artileList[0] && artileList[0].map((item: getKonwdgeitem) => {
                            return <div className={styles.listItem} key={item.id} onClick={() => {
                                history.push("/Detail/" + item.id)
                            }}>
                                <img src={item.cover} alt="" />
                                <div>
                                    <p>{item.title}</p>
                                    <p>{item.summary}</p>
                                    <div>
                                        <span>{title}</span>·<span>{item.views}</span> 次阅读 ·<span>{timeAgo(+ new Date(item.createAt))}前</span>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

            <div className={styles.aside}>
                <Category articeclasslist={JSON.parse(JSON.stringify(knowledge.articeclasslist))} />
                <Tag taglist={JSON.parse(JSON.stringify(knowledge.Taglist))} />
            </div>
        </div>
    )
}

export default observer(index)