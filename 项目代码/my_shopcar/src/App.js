// import React from "react";
// import "./App.scss";
// //引入商品列表组件
// import CarList from "./commponents/CarList";
// import { NavBar, Icon } from "antd-mobile";
// export default function App() {
//     return (
//         <div className="app">
//             <NavBar
//                 mode="light"
//                 icon={<Icon type="left" />}
//                 onLeftClick={() => console.log("onLeftClick")}
//                 rightContent={[<Icon key="1" type="ellipsis" />]}
//             >
//                 购物车
//             </NavBar>
//             <CarList />
//         </div>
//     );
// }
"use strict";
import React from "react";
import ReactDOM from "react-dom";
import MdEditor from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";

const MOCK_DATA =
    "Hello.\n\n * This is markdown.\n * It is fun\n * Love it or leave it.";
export default class Demo extends React.Component {
    mdParser = null;
    constructor(props) {
        super(props);
        this.mdParser = new MarkdownIt(/* Markdown-it options */);
    }
    handleEditorChange({ html, text }) {
        console.log("handleEditorChange", html, text);
    }
    render() {
        return (
            <div style="height: 500px">
                <MdEditor
                    value={MOCK_DATA}
                    renderHTML={(text) => this.mdParser.render(text)}
                    onChange={this.handleEditorChange}
                />
            </div>
        );
    }
}
