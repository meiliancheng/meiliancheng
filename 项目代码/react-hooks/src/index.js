import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import Ass from "./Ass";
import "highlight.js/styles/androidstudio.css"; //代码块样式
import hooks from "./utils/mockHooks";
import "react-preview-images/dist/main.css";
function RenderUI() {
    ReactDOM.render(<Ass />, document.getElementById("root"));
}

RenderUI();

// 在Tick上挂在render方法
hooks.Tick.render = RenderUI;
