import { makeAutoObservable } from 'mobx';
import { articeclassfiy, knewLedgeList, articeTag, articeValue, ChangeList, TagList, knowledgeDetail, readingId } from "../../service/index";
import { classfiyItem, tagitem, DetailItem, getKonwdgeitem, Child } from "../../utils/interface"
interface Itoc {
  id: string,
  level: string,
  text: string
}
class knowledge {
  constructor() {
    makeAutoObservable(this);
  }
  knowdeglist = [];
  articeclasslist: classfiyItem[] = [];
  Taglist: tagitem[] = [];
  aritcedetailList = [];
  detailobj = {} as DetailItem;
  newlist = [];
  id: string = '';
  readingObj = {} as Child
  TocList: [] = [];

  //文章列表
  async getKonwdgeList() {
    let result = await knewLedgeList();
    let newlist = result.data[0].filter((item: getKonwdgeitem) => item.id != this.id);
    this.newlist = newlist;
    this.knowdeglist = result.data;
  }
  //左侧文章分类
  async classList() {
    let result = await articeclassfiy();

    this.articeclasslist = result.data;
  }
  //左侧文章标签
  async tagList() {
    let result = await articeTag();
    this.Taglist = result.data;
  }
  //文章对应数据
  async articeValueList(value: string, pageSize: number) {
    let res = await articeValue(value, pageSize);
    this.aritcedetailList = res.data;

  }
  //分类文正切换数据
  async changelist(item: classfiyItem, index: number) {
    let res = await ChangeList(item, index);

    this.aritcedetailList = res.data;
  }
  //标签文正切换数据
  async Taglists(item: classfiyItem, index: number) {
    let res = await TagList(item, index);

    this.aritcedetailList = res.data;
  }
  //笔记详情
  async detailKnowdege(id: string) {
    let res = await knowledgeDetail(id);
    this.id = id;
    this.getKonwdgeList();
    if (res.statusCode === 200) {
      this.detailobj = res.data;
    }
  }
  //阅读详情
  async readingId(id: string) {
    let res = await readingId(id);
    if (res.statusCode === 200) {
      this.readingObj = res.data;
      // let tocarr: [] = []
      // let arr1: Itoc[] = JSON.parse(res.data.toc).filter((item: Itoc) => item.level === "2");
      // let arr2: Itoc[] = JSON.parse(res.data.toc).filter((item: Itoc) => item.level === "3");
      // tocarr.push(arr1, arr2);
      //赋值
      this.TocList = JSON.parse(res.data.toc);

    }
  }

}
export default knowledge;
