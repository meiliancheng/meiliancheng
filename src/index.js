/*
 * @Author: mlc01071780 mlc01071780@alibaba-inc.com
 * @Date: 2021-12-07 14:44:36
 * @LastEditors: mlc01071780 mlc01071780@alibaba-inc.com
 * @LastEditTime: 2022-06-14 21:26:27
 * @FilePath: /myapp的副本/src/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
// import App from "./HookReducer"
// import App from "./HookUseCallback"
// import App from "./Map"



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
