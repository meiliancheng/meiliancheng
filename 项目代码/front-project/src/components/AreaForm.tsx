import React, { useState } from 'react';
import styles from './gfy/AreaForm.less';
import { Form, Input, Button, message } from 'antd';
import { IareaPost } from '@/utils/about';
import useStore from '@/context/userStore'
import { observer } from 'mobx-react-lite'
interface Iaug {
    hostId: string,
    url: string,
    content: string,
    email: string,
    name: string,
    parentCommentId: string,
    replyUserEmail: string,
    replyUserName: string,
}
interface Iprops {
    url?: string,
    hostId?: string,
    title?: string,
    setPop?: Function,
    messageI?: {
        hostId: string,
        url: string,
        parentCommentId: string,
        replyUserEmail: string,
        replyUserName: string,
    }
}

const Comment: React.FC<Iprops> = (props) => {
    const { about } = useStore()
    let [ipt, setIpt] = useState('')
    const onFinish = (values: IareaPost) => {
        if (!values.textArea || !values.username || !values.email) {
            message.error('输入内容不能为空')
            return
        }
        if (!/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(values.email)) {
            message.error('邮箱不正确')
            return
        }
        if (props.title === '回复') {

            about.postAreaItem({
                hostId: (props.messageI?.hostId as string),
                url: (props.messageI?.url as string),
                content: values.textArea,
                email: values.email,
                name: values.email,
                parentCommentId: (props.messageI?.parentCommentId as string),
                replyUserEmail: (props.messageI?.replyUserEmail as string),
                replyUserName: (props.messageI?.replyUserName as string),
            })
            setIpt('')
            return
        }
        about.postArea({ ...values, url: (props.url as string), hostId: (props.hostId as string) })
        setIpt('')
    };
    const { TextArea } = Input;
    //   let { btnFlag, CommentFlag = false, setCommentFlag } = props;
    return (
        <div className={styles.index} >
            <Form
                name="area"
                initialValues={{ remember: true }}
                onFinish={onFinish}

            >
                <Form.Item
                    name="textArea"
                >
                    <TextArea placeholder='请输入评论内容' />
                </Form.Item>
                <div className={styles.ipt}>
                    <Form.Item
                        name="username"
                    >
                        <Input value={ipt} onChange={(e) => {
                            setIpt(e.target.value)
                        }} placeholder='请输入您的昵称' />
                    </Form.Item>
                    <span></span>
                    <Form.Item
                        name="email"
                    >
                        <Input placeholder='请输入您的邮箱(不会公开,您可以选择不输入)' />
                    </Form.Item>
                </div>

                <Form.Item >
                    <Button type="primary" htmlType="submit" >
                        评论
                    </Button >
                    {
                        props.title && <Button
                            type="primary"
                            htmlType="button"
                            onClick={() => { (props.setPop as Function)(false) }}
                        >
                            收起
                        </Button >
                    }

                </Form.Item>
            </Form>
        </div>
    );
}
export default observer(Comment);
