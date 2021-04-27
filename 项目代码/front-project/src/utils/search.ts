export interface ItasgItem {
    articleCount: number
    createAt: string
    id: string
    label: string
    updateAt: string
    value: string
}
export interface IsearchItem {
    content: string
    cover: null | string
    createAt: string
    html: null | string
    id: string
    isCommentable: boolean
    isRecommended: boolean
    likes: number
    needPassword: false
    publishAt: string
    status: string
    summary: null | string
    title: string
    toc: null | string
    updateAt: string
    views: number
}