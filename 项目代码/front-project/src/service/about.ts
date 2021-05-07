import { request } from 'umi';

// 请求about页面数据
export const getAboutWord = () => {
  return request('/api/page');
};

// 请求评论数据
export const getArea = (id: string, index: number) => {
  return request(`/api/comment/host/${id}?page=${index}&pageSize=6`)
}

// 请求文章数据
export const getArticle = (num: number) => {
  return request(`/api/article?page=${num}&pageSize=3`)
}

// 发送评论请求
export const postArea = (obj: {
  content: string,
  email: string,
  hostId: string,
  name: string,
  url: string,
}) => {
  return request('/api/comment', {
    data: obj
  })
}