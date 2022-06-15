import { useState } from "react";
import { Button, Card, Table, Space, Popconfirm,Modal,Form,Input } from "antd";
import { useNavigate } from "react-router-dom";
import {EditOutlined ,DeleteOutlined } from "@ant-design/icons"
import moment from "moment";


const App = (props) => {
    const navigate = useNavigate();
    const {state,dispatch} =props.store
    console.log(state)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] =Form.useForm()


    const columns = [
        {
            title: "序号",
            render: (_, record, index) => <span>{index + 1}</span>,
        },
        {
            title: "姓名",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "所属部门",
            dataIndex: "part",
            key: "part",
        },
        {
            title: "职位",
            dataIndex: "post",
            key: "post",
        },
        {
            title: "手机号",
            dataIndex: "phone",
            render:(phone)=>phone.replace( /(\d{3})\d*(\d{4})/,"$1****$2")
        },
        {
            title: "注册时间",
            dataIndex: "created_at",
            render: (created_at) =>
                moment(created_at).format("YYYY-MM-DD HH:mm:ss"),
        },
        {
            title: "操作",
            width: "100px",
            dataIndex: "Action",
            render: (_, record, index) => (
                <Space size="middle">
                    <Button type="primary" size="small" icon={<EditOutlined />} onClick={()=>{
                        setIsModalVisible(true)
                        dispatch({type:"SAVE_INDEX",index})
                        form.setFieldsValue({...record})
                    }}></Button>
                    <Popconfirm
                        title="删除该用户?"
                        onConfirm={()=>{
                            dispatch({type:"REMOVE",index})
                        }}
                        // onCancel={}
                        okText="确认"
                        cancelText="取消"
                    >
                        <Button type="default"  size="small" icon={<DeleteOutlined/>} danger>
                            {/* 删除 */}
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];
    const handleOk = () => {
        form.validateFields().then(values=>{
            dispatch({
                type:"EDIT_USER",
                obj:{...values, created_at: new Date().getTime()}
            })
            setIsModalVisible(false);

        }).catch(info=>{
            setIsModalVisible(!info.outOfDate)
        })
      };
    return (
        <div className="app">
            <Card
                bordered={false}
                title="用户列表"
                extra={
                    <Button
                        type="primary"
                        onClick={() =>
                            navigate("/form")
                        }
                    >
                        注册用户
                    </Button>
                }
            >
                <Table
                    dataSource={state.data}
                    rowKey={"name"}
                    pagination={false}
                    columns={columns}
                />
            </Card>
            <Modal title="信息修改"  okText ="确认" cancelText="取消" visible={isModalVisible} onOk={handleOk} onCancel={()=>setIsModalVisible(false)}>
            <Form
                name="basic"
                form={form}
                labelCol={{
                    span: 5,
                }}
                wrapperCol={{
                    span: 16,
                }}
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
            </Form>
            </Modal>
        </div>
    );
};
export default App;
