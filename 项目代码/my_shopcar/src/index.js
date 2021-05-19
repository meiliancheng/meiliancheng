import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Subsbilte";

// import "antd-mobile/dist/antd-mobile.css";
// import "lib-flexible";

import store from "./store";

ReactDOM.render(<App />, document.getElementById("root"));
// store.subscribe(() => {
//     console.log(store.getState());
// });
// store.subscribe(() => {
//     ReactDOM.render(<App />, document.getElementById("root"));
// });
