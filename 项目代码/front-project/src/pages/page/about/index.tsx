import { useEffect, useState } from 'react'
import styles from './index.less'
import { observer } from 'mobx-react-lite'
import useStore from '@/context/userStore'
import AreaForm from '@/components/AreaForm'
import { areaItem, articleItem } from '@/utils/about'
import Area from '@/components/Area'
import ArticleItem from '@/components/ArticleItem'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Spin } from 'antd';
function About() {
    let [arr, setArr] = useState<areaItem[]>([])
    let [article, setArticle] = useState<articleItem[]>([])
    let [arrLength, setLength] = useState(undefined)
    let [num, setNum] = useState(0)
    let [page, setPage] = useState(1)
    let [articleNum, setArticleNum] = useState(1)
    let { about } = useStore()
    useEffect(() => {
        document.body.scroll = function (e) {
            // console.log(document.documentElement.scrollTop);
            console.log(1);

        }
        // console.log(document.body.children[0]);
    }, [])
    useEffect(() => {
        about.getAboutWord().then(() => {
            about.getArea(JSON.parse(JSON.stringify(about.aboutWord))[0][0].id, page).then(() => {
                setArr(JSON.parse(JSON.stringify(about.area))[0])
                setLength(JSON.parse(JSON.stringify(about.area))[1])
            })
        })
        about.getArticle(articleNum).then(() => {
            setArticle(JSON.parse(JSON.stringify(about.article))[0])
        })

    }, [page])


    return (
        <div className={styles.about} >
            <div className={styles.img}>
                <img src='https://wipi.oss-cn-shanghai.aliyuncs.com/2020-04-04/despaired-2261021_1280.jpg' alt=''>
                </img>
            </div>
            <div className={styles.word} dangerouslySetInnerHTML={{ __html: JSON.parse(JSON.stringify(about.aboutWord))[0] ? JSON.parse(JSON.stringify(about.aboutWord))[0][0].html : '' }}>
            </div>
            <div className={styles.area}>
                <div>
                    评论
                </div>
                <AreaForm
                    url={window.location.pathname}
                    hostId={JSON.parse(JSON.stringify(about.aboutWord))[0] && JSON.parse(JSON.stringify(about.aboutWord))[0][0].id}
                ></AreaForm>
                {
                    arr.length === 0 && <div className={styles.loading}>
                        <Spin />
                    </div>
                }
                {
                    arr.length > 0 && arr.map((item: areaItem, index: number) => {
                        return <Area
                            hostId={JSON.parse(JSON.stringify(about.aboutWord))[0] && JSON.parse(JSON.stringify(about.aboutWord))[0][0].id}
                            key={index}
                            item={item}
                        ></Area>
                    })
                }
                <div className={styles.pages}>
                    {
                        !arrLength && <Spin />
                    }
                    {
                        arrLength &&
                        <>
                            <div
                                onClick={() => {
                                    if (page <= 1) return
                                    setNum(page - 2)
                                    setPage(page - 1)
                                    about.getArea(JSON.parse(JSON.stringify(about.aboutWord))[0][0].id, page).then(() => {
                                        setArr(JSON.parse(JSON.stringify(about.area))[0])
                                    })
                                }}
                            ><LeftOutlined /></div>
                            {
                                new Array(Math.ceil((arrLength as unknown as number) / 6)).fill('').map((item, index: number) => {
                                    return <div
                                        key={index}
                                        className={num === index ? styles.active : ''}

                                        onClick={() => {
                                            if (page === index + 1) return
                                            setNum(index)
                                            setPage(index + 1)
                                            about.getArea(JSON.parse(JSON.stringify(about.aboutWord))[0][0].id, page).then(() => {
                                                setArr(JSON.parse(JSON.stringify(about.area))[0])
                                            })
                                        }}
                                    >{index + 1}</div>
                                })
                            }
                            <div
                                onClick={() => {
                                    if (page >= Math.ceil((arrLength as unknown as number) / 6)) return
                                    setNum(page)
                                    setPage(page + 1)
                                    about.getArea(JSON.parse(JSON.stringify(about.aboutWord))[0][0].id, page).then(() => {
                                        setArr(JSON.parse(JSON.stringify(about.area))[0])
                                    })
                                }}
                            ><RightOutlined /></div>
                        </>
                    }


                </div>
                <div className={styles.read}>
                    推荐阅读
                </div>
                {
                    article.length === 0 && <div className={styles.loading}>
                        <Spin />
                    </div>
                }
                {
                    article.length > 0 && article.map((item: articleItem, index: number) => {
                        return (
                            <ArticleItem item={item} key={index}></ArticleItem>
                        )
                    })
                }

            </div>

        </div>
    )
}
export default observer(About)