import react from 'react'
import { MessageOutlined } from '@ant-design/icons'
import styles from './gfy/area.less'
import { computeTime } from '@/utils/time'
import { areaItem } from '@/utils/about'
import { useState } from 'react'
import AreaForm from '@/components/AreaForm'
interface Iprops {
    item: areaItem,
    hostId: string,
}
export default function Area(props: Iprops) {
    let { name, html, content, createAt, userAgent, id, children } = props.item
    // 评论框开关
    const [pop, setPop] = useState(false)
    const [messageI, setMessageI] = useState({
        hostId: '',
        url: '',
        parentCommentId: '',
        replyUserEmail: '',
        replyUserName: '',
    })
    return (
        <div className={styles.areaItem} >
            <div className={styles.areaHead}>
                <b style={{ background: `#${id.substr(0, 6)}` }}>{name.substr(0, 1).toUpperCase()}</b>
                <span>{name}</span>
            </div>
            <div className={styles.areaMain} >
                <div dangerouslySetInnerHTML={{ __html: html ? html : content }}>

                </div>
                <div className={styles.message}>
                    <span>{userAgent}</span>
                    <span>{computeTime(createAt)}</span>
                    <span
                        onClick={() => {
                            setPop(true)
                            setMessageI({
                                hostId: props.hostId,
                                url: window.location.pathname,
                                parentCommentId: props.item.id,
                                replyUserEmail: props.item.email,
                                replyUserName: props.item.name,
                            })
                        }}
                    ><MessageOutlined /> 回复</span>
                </div>
                {
                    children && children.length > 0 && children.map((item2: areaItem, index: number) => {
                        return (
                            <div className={styles.areaItem} key={index} >
                                <div className={styles.areaHead}>
                                    <b
                                        style={
                                            { background: `#${item2.id.substr(0, 6)}` }
                                        }
                                    >
                                        {item2.name.substr(0, 1).toUpperCase()}
                                    </b>
                                    <span>{item2.name}</span>
                                    <span className={styles.hf}>回复</span>
                                    <span className={styles.nameT}>{item2.replyUserName ? item2.replyUserName : name}</span>
                                </div>
                                <div className={styles.areaMain} >
                                    <div dangerouslySetInnerHTML={{ __html: item2.html ? item2.html : item2.content }}>
                                    </div>
                                    <div className={styles.message}>
                                        <span>{item2.userAgent}</span>
                                        <span>{computeTime(item2.createAt)}</span>
                                        <span
                                            onClick={() => {
                                                setPop(true)
                                                setMessageI({
                                                    hostId: props.hostId,
                                                    url: window.location.pathname,
                                                    parentCommentId: props.item.id,
                                                    replyUserEmail: props.item.email,
                                                    replyUserName: props.item.name,
                                                })
                                            }}
                                        ><MessageOutlined /> 回复</span>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
                {
                    pop && <AreaForm messageI={messageI} title='回复' setPop={setPop} />
                }
            </div>


        </div>
    )
}