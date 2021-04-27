import { request } from 'umi';
export const getMsgbordList = (page: number = 1, pageSize: number = 6) => {
  return request(
    `/api/comment/host/8d8b6492-32e5-44e5-b38b-9a479d1a94bd?page=${page}&pageSize=${pageSize}`,
  );
};
export const getmsgList = () => {
  return request(`/api/article/recommend`);
};
export const addComment = (
  content: string,
  email: string,
  hostId: string,
  name: string,
  url: string,
) => {
  return request(`/api/comment`, {
    method: 'POST',
    data: {
      content,
      email,
      hostId,
      name,
      url,
    },
  });
};
export const replycomment = (
  content: string,
  email: string,
  hostId: string,
  name: string,
  url: string,
  parentCommentId: string,
  replyUserEmail: string,
  replyUserName: string,
) => {
  return request(`/api/comment`, {
    method: 'POST',
    data: {
      content,
      email,
      hostId,
      name,
      parentCommentId,
      replyUserEmail,
      replyUserName,
      url,
    },
  });
};
