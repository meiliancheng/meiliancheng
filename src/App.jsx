import React, { useReducer } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Users from "./viewPage/userList.jsx";
import Forms from "./viewPage/Form.jsx";
import { initState, reducer } from "./model/reducer";
function App() {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Users store={{state, dispatch}} />}></Route>
                    <Route
                        exact
                        path="/form"
                        element={<Forms   store={{state, dispatch}} />}
                    />
                    <Route exact path="*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
    );
}

export default (App);
