import { request } from 'umi';
export const getDetail = (id: string) => {
  return request(`/api/article/${id}`);
};
export const getTuijianDetail = (id: string) => {
  return request(`/api/article/recommend?${id}`);
};
