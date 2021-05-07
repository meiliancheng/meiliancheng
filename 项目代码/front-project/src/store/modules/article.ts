import { makeAutoObservable } from 'mobx';
import { IArticleItem, IRecommendedItem } from '@/utils/interface';
import {
  getArticleList,
  getArticleRecommend,
  Get_articleAllRecommend
} from '@/service/home';

class Article {
  constructor() {
    makeAutoObservable(this);
  }
  articleList: IArticleItem[] = [];
  articleRecommend: IRecommendedItem[] = [];
  page = 1;
  total = 0;
  getAutomimg = [];
  //  获取侧边栏推荐
  async getArticleRecommend() {
    let result = await getArticleRecommend();
    if (result.statusCode === 200) {
      this.articleRecommend = result.data;
    }
  }

  //获取首页轮播图数据
  async getArticleAllRecommend() {
    let res = await Get_articleAllRecommend()
    this.getAutomimg = res.data;
  }
  // 获取文章列表
  async getArticleList() {
    let result = await getArticleList();
    this.articleList = result.data[0]
  }
  
}

export default Article;
