export interface areaItem {
    children?: areaItem[]
    content: string
    createAt: string
    email: string
    hostId: string
    html: string | null
    id: string
    name: string
    parentCommentId: null | string
    pass: boolean
    replyUserEmail: null | string
    replyUserName: null | string
    updateAt: string
    url: string
    userAgent: string
}

interface tagsItem {
    createAt: string,
    id: string,
    label: string,
    updateAt: string,
    value: string,
}
export interface articleItem {
    category: {
        id: string, label: string, value: string, createAt: string, updateAt: string,
    }
    content: string,
    cover: string,
    createAt: string,
    html: string,
    id: string,
    isCommentable: boolean,
    isRecommended: boolean,
    likes: string,
    needPassword: boolean
    publishAt: string,
    status: string,
    summary: string,
    tags: tagsItem[],
    title: string,
    toc: string,
    updateAt: string,
    views: number
}
export interface IareaPost {
    textArea: string, username: string, email: string
}