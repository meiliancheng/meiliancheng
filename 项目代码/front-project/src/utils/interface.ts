export interface IArticleItem {
  id: string;
  title: string;
  cover: string;
  summary: string;
  toc: string;
  status: string;
  views: number;
  likes: number;
  isRecommended: boolean;
  needPassword: boolean;
  isCommentable: boolean;
  publishAt: string;
  createAt: string;
  updateAt: string;
  tags: ITagItem[];
  category: ITagItem;
}

export interface ITagItem {
  id: string;
  label: string;
  value: string;
  createAt: string;
  updateAt: string;
}

export interface IRecommendedItem {
  id: string;
  title: string;
  cover: string;
  summary: string;
  content: string;
  html: string;
  toc: string;
  status: string;
  views: number;
  likes: number;
  isRecommended: boolean;
  needPassword: boolean;
  isCommentable: boolean;
  publishAt: string;
  createAt: string;
  updateAt: string;
}
export interface MasbordItem {
  children: { [key: string]: string }[];
  content: string;
  createAt: string;
  email: string;
  hostId: string;
  html: string;
  id: string;
  name: string;
  pass: boolean;
  updateAt: string;
  url: string;
  userAgent: string;
}

export interface ITagItem {
  id: string;
  label: string;
  value: string;
  createAt: string;
  updateAt: string;
}

export interface getKonwdgeitem {
  content?: any;
  cover: string;
  createAt: string;
  html?: any;
  id: string;
  isCommentable: boolean;
  likes: number;
  order: number;
  parentId?: any;
  publishAt: string;
  status: string;
  summary: string;
  title: string;
  toc?: any;
  updateAt: string;
  views: number;
}
export interface classfiyItem {
  articleCount: number;
  createAt: string;
  id: string;
  label: string;
  updateAt: string;
  value: string;
}
export interface tagitem {
  articleCount: number;
  createAt: string;
  id: string;
  label: string;
  updateAt: string;
  value: string;
}

export interface msgListItem {
  category: ITagItem;
  content: string;
  cover: string;
  createAt: string;
  html: string;
  id: string;
  isCommentable: boolean;
  isRecommended: boolean;
  likes: number;
  needPassword: boolean;
  publishAt: string;
  status: string;
  summary: string;
  tags: ITagItem[];
  title: string;
  toc: string;
  updateAt: string;
  views: number;
}

export interface ITagItem {
  id: string;
  label: string;
  value: string;
  createAt: string;
  updateAt: string;
}

export interface IRecommendedItem {
  id: string;
  title: string;
  cover: string;
  summary: string;
  content: string;
  html: string;
  toc: string;
  status: string;
  views: number;
  likes: number;
  isRecommended: boolean;
  needPassword: boolean;
  isCommentable: boolean;
  publishAt: string;
  createAt: string;
  updateAt: string;
}
export interface DetailItem {
  content: string;
  cover: string;
  createAt: string;
  html: string;
  id: string;
  isCommentable: boolean;
  isRecommended: boolean;
  likes: number;
  needPassword: boolean;
  password: string | null;
  publishAt: string;
  status: string;
  summary: string;
  title: string;
  toc: string;
  updateAt: string;
  views: number;
}
export interface DetailMuItem {
  id: string;
  level: string;
  text: string;
}
export interface detaillist {
  children: Child[];
  content?: any;
  cover: string;
  createAt: string;
  html?: any;
  id: string;
  isCommentable: boolean;
  likes: number;
  order: number;
  parentId?: any;
  publishAt: string;
  status: string;
  summary: string;
  title: string;
  toc?: any;
  updateAt: string;
  views: number;
}
export interface Child {
  content: string;
  cover?: any;
  createAt: string;
  html: string;
  id: string;
  isCommentable: boolean;
  likes: number;
  order: number;
  parentId: string;
  publishAt: string;
  status: string;
  summary?: any;
  title: string;
  toc: string;
  updateAt: string;
  views: number;
}
