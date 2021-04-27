import { makeAutoObservable } from 'mobx';
import { getAboutWord, getArea, getArticle, postArea } from '@/service/index'
import { message } from 'antd'
import { IareaPost } from '@/utils/about';
class About {
    constructor() {
        makeAutoObservable(this);
    }

    // 数据
    aboutWord = [];

    // 评论
    area = []

    // 文章
    article = []

    // 数据
    async getAboutWord() {
        let result = await getAboutWord();
        if (!result.statusCode) {
            message.error(result.msg)
        } else if (result.statusCode === 200) {
            this.aboutWord = result.data
        } else if (result.statusCode !== 200) {
            message.error(result.msg)
        }
    }

    // 评论
    async getArea(id: string, index: number) {
        let result = await getArea(id, index);
        if (result.statusCode === 200) {
            this.area = result.data
        }
        else {
            message.error(result.msg)
        }
    }

    // 文章
    async getArticle(num: number) {
        let result = await getArticle(num);
        if (result.statusCode === 200) {
            this.article = result.data
        }
        else {
            message.error(result.msg)
        }
    }

    // 添加评论
    async postArea(obj: {
        textArea: string,
        email: string,
        hostId: string,
        username: string,
        url: string,
    }) {
        let postI = {
            content: obj.textArea,
            name: obj.username,
            email: obj.email,
            url: obj.url,
            hostId: obj.hostId,
        }
        let result = await postArea(postI);
        if (result.statusCode === 200) {
            message.success('评论添加审核中')
        } else {
            message.error(result.msg)
        }
    }

    // 回复评论
    async postAreaItem(obj: {
        hostId: string,
        url: string,
        content: string,
        email: string,
        name: string,
        parentCommentId: string,
        replyUserEmail: string,
        replyUserName: string,
    }) {
        let result = await postArea(obj);
        if (result.statusCode === 200) {
            message.success('评论回复审核中')
        } else {
            message.error(result.msg)
        }
    }
}

export default About;