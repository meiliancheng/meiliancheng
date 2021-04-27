import { MasbordItem, msgListItem, DetailItem } from '@/utils/interface';
import { makeAutoObservable } from 'mobx';
import {
  getMsgbordList,
  getmsgList,
  addComment,
  replycomment,
} from '../../service/Msgboard';
import { getDetail, getTuijianDetail } from '../../service/Detail';
import { message } from 'antd';
class Msgbord {
  constructor() {
    makeAutoObservable(this);
  }
  msgPList: MasbordItem[] = [];
  Detail = {} as DetailItem;
  masList: msgListItem[] = [];
  TuijianDetail: DetailItem[] = [];
  total: number = 0;

  async getMsgbordList(num?: number) {
    let result;
    if (num === undefined) {
      result = await getMsgbordList();
      if (result === undefined) {
        message.error('服务器超时！请刷新');
        return;
      }
    } else {
      result = await getMsgbordList(num);
      if (result === undefined) {
        message.error('服务器超时！请刷新');
        return;
      }
    }

    this.msgPList = result.data[0];
    this.total = result.data[1];
  }
  async getmsgList() {
    let result = await getmsgList();
    if (result !== undefined) {
      this.masList = result.data;
    } else {
      message.error('服务器超时！请刷新');
    }
  }
  async getDetail(id: string) {
    let result = await getDetail(id);
    this.Detail = result.data;
  }
  async getTuijianDetail(id: string) {
    let result = await getTuijianDetail(id);
    this.TuijianDetail = result.data;
  }
  async addCommit(
    content: string,
    email: string,
    hostId: string,
    name: string,
    url: string,
  ) {
    let result = await addComment(content, email, hostId, name, url);
    if (result.statusCode !== 201) {
      message.loading('评论失败，请稍后再试！');
      return;
    }
    message.loading('评论成功，等待审核');
  }
  async replyCommit(
    content: string,
    email: string,
    hostId: string,
    name: string,
    url: string,
    parentCommentId: string,
    replyUserEmail: string,
    replyUserName: string,
  ) {
    let result = await replycomment(
      content,
      email,
      hostId,
      name,
      url,
      parentCommentId,
      replyUserEmail,
      replyUserName,
    );
    if (result.statusCode !== 201) {
      message.loading('回复失败，请稍后再试！');
      return;
    }
    message.loading('回复成功，等待审核');
  }
}

export default Msgbord;
