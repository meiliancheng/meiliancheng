import React from 'react'
import styles from "../pages/ang/article.less"
import useStore from '@/context/userStore';
import {NavLink} from "umi"
export default function ArchivesRet(props) {
    // console.log(props.tj);
    let { knowledge } = useStore();
    const taglist = (item:any,index: number) => {
      //修改下标
      localStorage.setItem("title", item.label)
      knowledge.Taglists(item, index)
  }
    return (
        <>
          <div className={styles.ret}>
            <div className={styles.rop}>
            <div className={styles._1hh60i8CByuosza1JbgE0Q}>
              <i aria-label="icon: file-text" className="anticon anticon-file-text">
                <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="file-text" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z">
                </path></svg></i><span>推荐文章</span></div>
                <ul>
                { JSON.stringify(props.tj)!== "{}"&&
                  props.tj.map((item,index:number)=>
                  <li onClick={()=>props.rout(item.id)}><div><p><span>{item.title}</span> · <span><time>{props.date(item.createAt)} 天前</time></span></p></div></li>
                    )
                }
                </ul>
            </div>
            <div className={styles.rbod}>
            <div className={styles._2b0LQ_j7dNJQtnGkqmrDz}><i aria-label="icon: appstore" className="anticon anticon-appstore">
                <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="appstore" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z">
                </path></svg></i><span>文章分类</span></div>
              <ul>
                 {
                   JSON.stringify(props.classification)!== "{}"&&
                    props.classification.map((item,index)=>
                      <li key={index}><span>{item.label}</span><span>共{item.articleCount} 篇文章</span></li>
                    )
                 }
              </ul>
            </div>
            <div className={styles.tag}>
            <div className={styles.ZkMDU4OFJElCj5UMcAe}><i aria-label="icon: tags" className="anticon anticon-tags">
              <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="tags" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8a8.03 8.03 0 0 0 0 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0zm62.6-651.7l224.6 19 19 224.6L477.5 694 233.9 450.5l311.9-311.9zm60.16 186.23a48 48 0 1 0 67.88-67.89 48 48 0 1 0-67.88 67.89zM889.7 539.8l-39.6-39.5a8.03 8.03 0 0 0-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 0 0-11.3 0l-39.6 39.5a8.03 8.03 0 0 0 0 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z">
              </path></svg></i><span>文章标签</span></div>
              <ul>
             {
                 JSON.stringify(props.tags)!== "{}"&&
                 props.tags.map((item,index)=>
                 <li key={item.id} onClick={() => {
                  taglist(item, index)
              }} ><NavLink to={{ pathname: item.value, state: { pageSize: item.articleCount } }}>{item.label}[{item.articleCount}]</NavLink></li>
                 )
                 
              }
              </ul>
            </div>
        </div>
        </>
    )
}
