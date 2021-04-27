import ImageDemo from '@/components/Image'
import { computeTime } from '@/utils/time'
import styles from './gfy/ArticleItem.less'
import { articleItem } from '@/utils/about'
interface Iprops {
    item: articleItem
}
export default function ArticleItem(props: Iprops) {
    const { item } = props
    return (
        <a
            className={styles.ant_spin_container}
            href={`/aticle/${item.id}`}
        >
            <div className={styles.image}>
                {
                    item.cover ? <img src={item.cover}></img>
                        : <ImageDemo></ImageDemo>
                }
            </div>

            <div className={styles.article_content}>
                <p className={styles.article_content_header}>{item.title}</p>
                <p>{item.summary}</p>
                <div>
                    <span>
                        <span>{item.category?.label}</span>
                    </span>
                    <span className={styles.punctuation}>· </span>
                    <span>{item.views}次阅读</span>
                    <span className={styles.punctuation}>· </span>
                    <span>{computeTime(item.createAt)}</span>
                </div>
            </div>
        </a>
    )
}