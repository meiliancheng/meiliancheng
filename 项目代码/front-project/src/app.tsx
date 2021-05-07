import { RequestConfig } from 'umi';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'lib-flexible';
import { message } from 'antd';
//配置进度条参数
NProgress.configure({
  showSpinner: false,
  minimum: 0.2,
  easeing: 'swing',
  speed: 1000,
  trickleRate: 0.2,
});
const baseUrl = 'https://api.blog.wipi.tech';
//防止多次请求进度条重复加载
let loadingNum = 0;
function startLoading() {
  if (loadingNum == 0) {
    NProgress.start();
  }
  loadingNum++;
}
function endLoading() {
  loadingNum--;
  if (loadingNum <= 0) {
    NProgress.done();
  }
}

export const request: RequestConfig = {
  timeout: 5000,
  errorHandler: (err) => {
    message.error('超时请重试.....');
    return;
  },
  requestInterceptors: [
    (url, options) => {
      if (!/\/\//.test(url)) {
        url = baseUrl + url;
      }
      let headers = {};
      // 加载进度条
      startLoading();
      return {
        url,
        options: { ...options, headers },
      };
    },
  ],
  responseInterceptors: [
    (Response) => {
      const codeMap: { [key: string]: string } = {
        400: '错误请求',
        403: '请求禁止访问',
        404: '请求资源不存在',
        500: '服务器内部错误',
        503: '服务不可用',
        504: '网关超时',
      };
      if (Response.status !== 200) console.log(Response.status);
      endLoading();
      return Response;
    },
  ],
};
