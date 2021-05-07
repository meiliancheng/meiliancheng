import { makeAutoObservable } from 'mobx';
import { articeTag, getSearchArr } from '@/service/index'
import { message } from 'antd'
class Search {
    constructor() {
        makeAutoObservable(this);
    }
    // 开关
    flag = false;
    tasg = [];
    searchArr = [];
    async setFlag() {
        this.flag = !this.flag
    }
    // laber标签
    async getTags() {
        let result = await articeTag()
        if (result.statusCode === 200) {
            this.tasg = result.data
        } else {
            message.error(result.msg)
        }

    }
    // 模糊搜索
    async getSearchArr(value: string) {
        let result = await getSearchArr(value)
        if (result.statusCode === 200) {
            this.searchArr = result.data
        } else {
            message.error(result.msg)
        }
    }
}

export default Search;
