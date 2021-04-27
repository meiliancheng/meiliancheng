import React from 'react'
import styles from "../pages/ang/article.less"
export default function ArchivesLft(props) {
   function ids(id){
      props.rout(id)
   }
    return (
    <>{JSON.stringify(props.List)!== "{}"&&
     <div className={styles.lft}>
        <div className={styles.top}>
         <div><i aria-label="icon: block" className="anticon anticon-block">
           <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="block" width="1em" height="1em" fill="currentColor" aria-hidden="true">
             <path d="M856 376H648V168c0-8.8-7.2-16-16-16H168c-8.8 0-16 7.2-16 16v464c0 8.8 7.2 16 16 16h208v208c0 8.8 7.2 16 16 16h464c8.8 0 16-7.2 16-16V392c0-8.8-7.2-16-16-16zm-480 16v188H220V220h360v156H392c-8.8 0-16 7.2-16 16zm204 52v136H444V444h136zm224 360H444V648h188c8.8 0 16-7.2 16-16V444h156v360z">
           </path></svg></i></div>
           <p> <span>归档</span> </p>
           <p>共计 <span>{props.num}</span>篇</p>
       </div>
       <div className={styles.bod}>
          <h2>{Object.keys(props.List)[1]}</h2>
          {
            Object.keys(props.keys2).map((item,index)=>
                <div key={index}>
                  <h3>{item}</h3>
                  {
                   Object.values(props.keys2[item]).map((items,indexs)=>
                     <li key={indexs} onClick={()=>ids(items.id)}><time>{items.publishAt.slice(5,10)}</time><span>{items.title}</span></li>
                    )
                  }
                </div>
              )
          }
       </div>
       <div className={styles.bod}>
          <h2>{Object.keys(props.List)[0]}</h2>
          {
             Object.keys(props.keys1).map((item,index)=>
             <div key={index}>
               <h3>{item}</h3>
               {
                 
                Object.values(props.keys1[item]).map((items,indexs)=>
                  <li key={indexs} onClick={()=>ids(items.id)}><time>{items.publishAt.slice(5,10)}</time><span>{items.title}</span></li>
                 )
               }
             </div>
              
           )
          }
       </div>
     </div>
    }
        </>
    )
}
