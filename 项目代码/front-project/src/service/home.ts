import { request } from 'umi';



// 首页列表数据
export function getArticleList() {
  return request('/api/article', {
    params: {
      page: 1,
      pageSize: 12,
      status: "publish"
    }
  });
}
//获取首页轮播图数据
export const Get_articleAllRecommend = () => {
  return request('/api/article/all/recommend', {
    method: 'GET'
  })
}


//推荐文章数据
export function getArticleRecommend() {
  return request('/api/article/recommend');
}

// 文章分类数据
export function getTagList() {
  return request('/api/tag');
}



