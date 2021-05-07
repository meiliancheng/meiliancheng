// import React, { useRef } from "react";
// // import { PreviewPc } from "react-preview-images";
import "viewerjs/dist/viewer.css";
// import Viewer from "viewerjs";
// import hooks from "./utils/mockHooks";
// // const ReactMarkdown = require("react-markdown");
// let { useState, useEffect } = hooks;

// export default function App() {
//     const [index, setIndex] = useState(0);
//     const [visible, setVisible] = React.useState(false);
//     const myImg = useRef();
//     console.log(myImg.current);
//     const show = (e) => {
//         console.log(e);
//     };
//     useEffect(() => {
//         const viewer = new Viewer(myImg.current, {
//             inline: true,

//             shown: show(),
//             viewed() {
//                 viewer.zoomTo(1);
//                 viewer.hide(false);
//             },
//         });
//     }, [index]);
//     // useEffect(() => {
//     //     console.log("eeee");
//     //     return () => {
//     //         console.log(222);
//     //     };
//     // }, [index]);

//     // return (

//     // );
//     return (
//         <div>
//             {/* <img
//                 src="https://img1.baidu.com/it/u=2496571732,442429806&fm=26&fmt=auto&gp=0.jpg"
//                 onClick={() => {
//                     setVisible(true);
//                 }}
//             /> */}
//             <img
//                 ref={myImg}
//                 src="https://img1.baidu.com/it/u=2496571732,442429806&fm=26&fmt=auto&gp=0.jpg"
//                 alt="Picture"
//                 onClick={() => {
//                     setVisible(true);
//                 }}
//             />
//         </div>
//     );
// }
import Viewer from "viewerjs";

import React from "react";

export default function App() {
    const previewImg = () => {
        const viewer = new Viewer(document.getElementById("imglist"), {
            // url: "data-original",
            inline: false,
            button: true,
            viewed() {
                viewer.zoomTo(1);
            },
        });
    };
    const list = [
        {
            src:
                "https://img1.baidu.com/it/u=2496571732,442429806&fm=26&fmt=auto&gp=0.jpg",
        },
    ];
    return (
        <ul className="img-list" id="imglist">
            {list.map(({ src }, index) => (
                <li key={index}>
                    <img
                        src={src}
                        key={index}
                        onClick={previewImg}
                        data-original={src}
                    />
                </li>
            ))}
        </ul>
    );
}
