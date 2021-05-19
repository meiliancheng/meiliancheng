import { createStore } from "redux";
const nameInitialState = {
    count: 1,
};
const reducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case "number":
            state.count++;

            return { count: state.count };
        default:
            return state;
    }
};
export default createStore(reducer);
