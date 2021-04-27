import react from 'react'
import styles from './gfy/Footer.less'
export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.nav}>
                    <div><a href="/rss" className='iconfont icon-wifi'></a></div>
                    <div><a href="" className='iconfont icon-github'></a></div>
                </div>
                <div className={styles.word}>
                    <div>Designed by Fantasticit . 后台管理</div>
                    <div>Copyright © 2021. All Rights Reserved.</div>
                    <div>皖ICP备18005737号</div>
                </div>
            </div>
        </div>
    )
}