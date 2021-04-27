import { classfiyItem } from '@/utils/interface'
import { request } from 'umi'

//获取知识页面列表
export const knewLedgeList = () => {
    return request("/api/Knowledge")
}
//获取左侧文章分类列表接口
export const articeclassfiy = () => {
    return request("/api/category")
}

// api/tag
//获取左侧文章标签接口
export const articeTag = () => {
    return request("/api/tag")
}
//获取对应文章分类数据
export const articeValue = (value: string, pageSize: number) => {
    return request(`/api/article/category/${value}`, {
        method: "GET",
        params: {
            page: 1,
            pageSize,
            status: "publish"
        }
    })
}

//获取对应文章分类数据
export const ChangeList = (item: classfiyItem, index: number) => {
    return request(`/api/article/category/${item.value}`, {
        method: "GET",
        params: {
            page: 1,
            pageSize: item.articleCount,
            status: "publish"
        }
    })
}

//获取对应文章分类数据
export const TagList = (item: classfiyItem, index: number) => {
    console.log(item, index)
    return request(`/api/article/tag/${item.value}`, {
        method: "GET",
        params: {
            page: 1,
            pageSize: item.articleCount,
            status: "publish"
        }
    })
}

//进入笔记详情
export const knowledgeDetail = (id: string) => {
    return request(`/api/knowledge/${id}`, {
        method: "GET",

    })
}
// 阅读详情

export const readingId = (id: string) => {
    return request(`/api/knowledge/${id}`, {
    })
}
