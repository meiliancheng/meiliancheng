import { makeAutoObservable } from 'mobx';
// import { IArticleItem, IRecommendedItem } from '@/utils/interface';
import {tag,recommend,article,category, article_id} from '../../service/article';

class Archives {
  constructor() {
    makeAutoObservable(this);
  }
    articles={};
    recommends={};
    categorys={};
    tags={}
    articles_id={}
  async getArticleRecommend(){
       let result = await article();
       console.log(result);
       
    //    debugger
         if (result.statusCode === 200) {
             this.articles= result.data;
         }
       let recommends=await recommend()
         if (recommends.statusCode === 200) {
            this.recommends= recommends.data;
         }
         let categorys=await category()
         if (categorys.statusCode === 200) {
            this.categorys= categorys.data;
         }
       let tags=await tag()
       if (tags.statusCode === 200) {
          this.tags= tags.data;
       }
   }
   async getarticles_id(id){
      let articles_id= await article_id(id)
      if(articles_id.statusCode===200){
          this.articles_id=articles_id.data
      }
   }
}

export default Archives;
