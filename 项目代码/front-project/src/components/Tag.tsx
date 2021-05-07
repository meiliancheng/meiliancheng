import React from 'react'
import styles from "./mlc/Tag.less"
import { tagitem } from "../utils/interface"
import { NavLink } from "umi"
import { observer } from 'mobx-react-lite';
import useStore from '@/context/userStore';
interface Ipros {
    taglist: tagitem[];
}
interface Item {
    articleCount: number
    createAt: string
    id: string
    label: string
    updateAt: string
    value: string;
}
const Tag: React.FC<Ipros> = (props) => {
    let { knowledge } = useStore();
    const taglist = (item: Item, index: number) => {
        //修改下标
        localStorage.setItem("title", item.label)
        knowledge.Taglists(item, index)
    }
    return (
        <div className={styles.tagpage}>
            <div className={styles.heads}>
                <div>
                    <svg viewBox="64 64 896 896" focusable="false" className={styles.svg} data-icon="tags" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8a8.03 8.03 0 0 0 0 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0zm62.6-651.7l224.6 19 19 224.6L477.5 694 233.9 450.5l311.9-311.9zm60.16 186.23a48 48 0 1 0 67.88-67.89 48 48 0 1 0-67.88 67.89zM889.7 539.8l-39.6-39.5a8.03 8.03 0 0 0-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 0 0-11.3 0l-39.6 39.5a8.03 8.03 0 0 0 0 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z"></path></svg>
                    <span>文章标签</span>
                </div>
            </div>
            <ul>
                {
                    props.taglist && props.taglist.map((item, index) => {
                        return <li key={item.id} onClick={() => {
                            taglist(item, index)
                        }} ><NavLink to={{ pathname: item.value, state: { pageSize: item.articleCount } }}>{item.label}[{item.articleCount}]</NavLink></li>
                    })
                }
            </ul>
        </div>
    )
}
export default Tag;