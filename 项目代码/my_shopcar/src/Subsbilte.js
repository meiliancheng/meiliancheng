import React from "react";
import store from "./store";
const Subsbilte = () => {
    let { count } = store.getState();

    const changeCount = () => {
        store.dispatch({
            type: "number",
            payload: {
                name: "zhuzhiang",
            },
        });
    };
    return (
        <div>
            {count}
            <button onClick={changeCount}>真加一</button>
        </div>
    );
};
export default Subsbilte;
store.subscribe(() => {
    return Subsbilte;
});
