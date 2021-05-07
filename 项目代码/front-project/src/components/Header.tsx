import { useState, useEffect } from 'react';
import { NavLink } from 'umi'
import styles from './gfy/Header.less';
import Theme from './theme'
import useStore from '@/context/userStore'
import { observer } from 'mobx-react-lite'
function Header() {
  let { Searcha } = useStore()
  let [falg, setFlag] = useState(false)
  let [arr] = useState([
    { title: '首页', path: '/' },
    { title: '归档', path: '/archives' },
    { title: '知识笔记', path: '/knowledge' },
    { title: '留言板', path: '/page/msgboard' },
    { title: '关于', path: '/page/about' },])

  // nav默认高亮
  let [activeIndex, setIndex] = useState(arr.findIndex(item => item.path === window.location.pathname))

  useEffect(() => {
    Searcha.getTags()
  }, [0])

  return (
    <div id={styles.header}>
      <div className={styles.header_container}  >
        <div className={styles.header_logo}>
          <img src="https://wipi.oss-cn-shanghai.aliyuncs.com/2021-02-20/wipi-logo.png"></img>
        </div>
        {
        }
        <div className={styles.header_nav} >
          <ul className={styles.header_a}>
            {
              arr.map((item, index) => {
                return <li key={index}>
                  <NavLink
                    activeClassName={activeIndex === index ? styles.active : ''}
                    to={item.path}
                    onClick={() => { setIndex(index) }}
                  >{item.title}</NavLink>
                </li>
              })
            }
          </ul>
          <div className={styles.header_btn}>
            <Theme />
            <div className={styles.icon}>
              <i
                onClick={() => { Searcha.setFlag() }}
                className='iconfont icon-Search'
              ></i>
            </div>
          </div>
        </div>
        <div className={styles.header_memu} onClick={() => { setFlag(!falg) }}>
          <div className={falg ? styles.actv : ''}></div>
          <div className={falg ? styles.actv : ''}></div>
          <div className={falg ? styles.actv : ''}></div>
        </div>
        {
          falg && <div id={styles.header_nav} >
            <ul className={styles.header_a}>
              {
                arr.map((item, index) => {
                  return <li key={index}>
                    <NavLink
                      activeClassName={activeIndex === index ? styles.active : ''}
                      to={item.path}
                      onClick={() => { setIndex(index) }}
                    >{item.title}</NavLink>
                  </li>
                })
              }
            </ul>
            <div className={styles.header_btn}>
              <Theme />
              <div className={styles.icon}>
                <i
                  onClick={() => { Searcha.setFlag() }}
                  className='iconfont icon-Search'
                ></i>
              </div>
            </div>
          </div>
        }

      </div>

    </div>
  );
}

export default observer(Header)