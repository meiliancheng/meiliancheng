import { useEffect,useState} from 'react';
import {history} from "umi"
import styles from '../ang/article.less';
import { observer } from 'mobx-react-lite';
import useStore from '../../context/userStore';
import ArchivesRet from "../../components/ArchivesRet"
import ArchivesLft from "../../components/ArchivesLft"
import { keys } from 'mobx';
function article() {
  let {archives} = useStore();
  useEffect(() =>{
    archives.getArticleRecommend();
  }, []);
 const List=JSON.parse(JSON.stringify(archives.articles)) 
 const tj=JSON.parse(JSON.stringify(archives.recommends)) 
 const  classification=JSON.parse(JSON.stringify(archives.categorys))
 const tags=JSON.parse(JSON.stringify( archives.tags))
 function date(time){
  return parseInt((+new Date - +new Date((time.slice(0,10))))/1000/60/60/24)
 }
 let num,keys1,keys2
if(JSON.stringify(List) !== "{}"){
    // console.log(Object.keys(List)[0],Object.keys(List)[1]);
    console.log(Object.values(List)[0],Object.values(List)[1]);
    keys1=Object.values(List)[0]
    keys2=Object.values(List)[1]
    function fun(keys){
      let num=0
      for(let key  in keys){
        num+=keys[key].length
     }
      return num
    }
    num=(fun(keys1)+fun(keys2));
}
function rout(id:string){
   history.push(`/Detail/${id}`);
}
  return <div className={styles.artic}>
      <div className={styles.abody}>
        <ArchivesLft List={List} keys1={keys1} keys2={keys2} num={num} rout={(id)=>rout(id)}/>
        <ArchivesRet tj={tj} classification={classification} tags={tags} date={(time)=>date(time)} rout={(id)=>rout(id)}/>
      </div>
      
  </div>
}
export default observer(article);
