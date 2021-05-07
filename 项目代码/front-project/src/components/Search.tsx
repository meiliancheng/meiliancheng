import react, { useEffect } from 'react'
import { } from 'umi'
import { Input } from 'antd'
import { ItasgItem, IsearchItem } from '@/utils/search'
import styles from './gfy/Search.less'
import { CloseOutlined } from '@ant-design/icons'
import useStore from '@/context/userStore'
import { observer } from 'mobx-react-lite'
function Searc() {
    let { Searcha } = useStore()
    let { Search } = Input

    return (
        <div className={styles.index}>
            <div className={styles.search}>
                <div className={styles.btn}>
                    <CloseOutlined onClick={() => { Searcha.setFlag() }} />
                </div>
                <div className={styles.ipt}>
                    <Search
                        placeholder='输入关键字,搜索文章'
                        onSearch={(value) => {
                            Searcha.getSearchArr(value)
                        }}
                        enterButton
                    />
                </div>
                <div className={styles.tags}>
                    {
                        Searcha.tasg.length > 0 && Searcha.tasg.map((item: ItasgItem, index: number) => {
                            return (
                                <a key={index} href={`/tag/${item.value}`}>{item.label}[{item.articleCount}]</a>
                            )
                        })
                    }
                </div>
                <div className={styles.content}>
                    {
                        Searcha.searchArr.length > 0 && Searcha.searchArr.map((item: IsearchItem, index: number) => {
                            return (
                                <div key={index}>
                                    <a href={`/article/${item.id}`} >{item.title}</a>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default observer(Searc)