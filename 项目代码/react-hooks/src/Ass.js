import React, { useState, useEffect } from "react";
import "./ass.css";
import axios from "axios";
import Bscroll from "better-scroll";
export default function Ass() {
    const [list, setlist] = useState([]);
    const [page, setPage] = useState(1);
    const [bs, setBs] = useState(null);
    // const app = () => {
    //     console.log(111);
    // };
    // const [fun, setFun] = useState(app);
    // console.log(fun);
    useEffect(async () => {
        let res = await axios.get("/api/article", {
            params: { page, pageSize: 5, status: "publish" },
        });
        if (page === 1) {
            setlist(res.data.data[0]);
        } else {
            setlist([...res.data.data[0], ...list]);
        }

        let bs = new Bscroll(".wrapper", {
            probeType: 3,
            pullUpLoad: true,
        });
        bs.on("pullingUp", pullingUpHandler);
    }, [page]);
    const pullingUpHandler = () => {
        setPage(page + 1);
    };
    console.log(list);
    return (
        <div className="wrapper">
            <div className="scroll-content">
                {list &&
                    list.map((item) => {
                        return (
                            <p key={item.id}>
                                <img src={item.cover}></img>
                            </p>
                        );
                    })}
            </div>
        </div>
    );
}
