import { request } from 'umi';
export const getSearchArr = (value: string) => {
    return request(`/api/search/article?keyword=${value}`);
};
