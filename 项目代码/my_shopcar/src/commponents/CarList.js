import React, { useState } from "react";
import carlist from "../mock/carList";
import { List, Checkbox } from "antd-mobile";
const Item = List.Item;
export default function CarList() {
    console.log(carlist);
    const [disabled, setDisabled] = useState(false);
    return (
        <div>
            <List
                renderHeader={() => <span>编辑商品</span>}
                className="my-list"
            >
                {carlist.map((item) => {
                    return (
                        <div key={item.id} className="listItem">
                            <Checkbox.CheckboxItem>
                                <Item>
                                    <p>
                                        <img src={item.shoppartrue} />
                                    </p>
                                </Item>
                            </Checkbox.CheckboxItem>
                        </div>
                    );
                })}
            </List>
        </div>
    );
}
