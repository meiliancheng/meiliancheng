import { classfiyItem } from '@/utils/interface';
import React, { useState } from 'react'
import { observer } from 'mobx-react-lite';
import useStore from '@/context/userStore';
import styles from "./mlc/Category.less"
import { useHistory } from "umi"
interface Iprops {
    articeclasslist: classfiyItem[];
}
interface Item {
    articleCount: number
    createAt: string
    id: string
    label: string
    updateAt: string
    value: string;
}
const Category: React.FC<Iprops> = (props) => {
    const history = useHistory();
    let { knowledge } = useStore();
    const [tabindex, setTabindex] = useState(0)

    const tablist = (item: Item, index: number) => {
        //修改下标
        setTabindex(index)
        localStorage.setItem("title", item.label)
        knowledge.changelist(item, index)
    }
    // console.log(props.articeclasslist)

    return (
        <div className={styles.Category_page}>
            <div className={styles.top}>
                <div>
                    <svg style={{ fontSize: "16px" }} viewBox="64 64 896 896" focusable="false"
                        data-icon="appstore" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"></path></svg>
                    <span>文章分类</span>
                </div>
            </div>
            <ul>
                {
                    props.articeclasslist && props.articeclasslist.map((item, index: number) => {
                        return <li key={item.id} className={tabindex === index ? styles.active : ''} onClick={() => {
                            tablist(item, index)
                        }}><a onClick={() => {
                            history.push({ pathname: `/${item.value}`, state: { pageSize: item.articleCount } })
                        }}><span>{item.label}</span><span>共{item.articleCount}篇文章</span></a></li>
                    })
                }
            </ul>
        </div>
    )
}
export default observer(Category);