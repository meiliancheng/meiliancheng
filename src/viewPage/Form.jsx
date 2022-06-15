import { Button, Form, Input } from "antd";
import React from "react";
import {useNavigate} from "react-router-dom"
import {RollbackOutlined ,VerticalAlignTopOutlined } from "@ant-design/icons"

const App = (props) => {
  const {_,dispatch} =props.store
  const navigate = useNavigate()
    const onFinish = (values) => {
        dispatch({
            type:"ADD_USER",
            obj:{...values,created_at: new Date().getTime()}
        })
        navigate("/",{replace:true})
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div style={{ width: "70%", margin: "60px auto" }}>
            <Form
                name="basic"
                labelCol={{
                    span: 5,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="用户名称"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "请输入用户名称!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "请输入密码!",
                        },
                        {
                            pattern:/^(?=.*\d)(?=.*[a-zA-Z]).{6,12}$/,
                            message:"请输入包含数字字母的密码"
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item label="手机号" name="phone"
                    rules={[
                        {
                            required: true,
                            message: "请输入手机号!",
                        },
                        {
                            pattern:/^1[3-9]\d{9}$/,
                            message:"请输入合法手机号"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="所属部门" name="part"
                    rules={[
                        {
                            required: true,
                            message: "请填写部门",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="职位" name="post"
                    rules={[
                        {
                            required: true,
                            message: "请填写部门",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 10,
                        span: 16,
                    }}
                >
                    <Button   icon={<RollbackOutlined/>} style={{marginRight:"15px"}} onClick={()=>window.history.go(-1)}>
                       取消
                    </Button>
                    <Button type="primary" htmlType="submit" icon={<VerticalAlignTopOutlined />}>
                       提交
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default App;
