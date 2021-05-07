import { useEffect, useState } from 'react';
import './index.less';
import useStore from '@/context/userStore';
import { observer } from 'mobx-react-lite'
import { IArticleItem, IRecommendedItem } from '@/utils/interface'
import { timeAgo } from '@/utils/time';
import { Carousel, List, message, Avatar, Spin } from 'antd';
import { useHistory } from 'umi'
import ArchivesRet from '@/components/ArchivesRet';
import InfiniteScroll from 'react-infinite-scroller';
import Bscroll from "better-scroll"
function IndexPage() {
  let { Article } = useStore()
  let history = useHistory()
  let { archives } = useStore();
  const [loading, setLoading] = useState<boolean>(false)
  const [hasMore, setHasMore] = useState<boolean>(false)
  useEffect(() => {
    Article.getArticleList();
    Article.getArticleAllRecommend();
    archives.getArticleRecommend();
  }, [])
  useEffect(() => {
    let bs = new Bscroll(".scroll_list", {
      probeType: 3,
      click: true,
      pullUpLoad: true
    })
    bs.on('pullingUp', pullingUpHandler)

  }, [Article.articleList]);

  const pullingUpHandler = () => {
    console.log(111)
  }
  const List = JSON.parse(JSON.stringify(archives.articles))
  const tj = JSON.parse(JSON.stringify(archives.recommends))
  const classification = JSON.parse(JSON.stringify(archives.categorys))
  const tags = JSON.parse(JSON.stringify(archives.tags))
  function date(time: string) {
    return parseInt(((+new Date - +new Date((time.slice(0, 10)))) / 1000 / 60 / 60 / 24) as any)
  }
  function loadFunc() {
  }
  return (

    <div className='artivle'>
      <div className="container">

        <div className='artivle_left'>
          <div className='artivle_left_autoimg'>
            <Carousel autoplay>
              {
                Article.getAutomimg.length && Article.getAutomimg.map((item: IRecommendedItem) => {
                  return (<div key={item.id} className='autoimg_item'>
                    <div className='autoimg_img'>
                      <img src={item.cover} alt="" />
                    </div>
                    <div className="autoimg_value">
                      <h2>{item.title}</h2>
                      <p>
                        <span>{timeAgo(+new Date(item.createAt))}前</span>
                        <span className='right_category_point'> ▪ </span>
                        <span>{item.views}  次阅读</span>
                      </p>
                    </div>
                  </div>)
                })
              }
            </Carousel>
          </div>

          <div className="scroll_list">
            <ul className='artivle_left_list'>
              {
                Article.articleList.length > 0 && Article.articleList.map((item: IArticleItem) => {
                  return <li key={item.id} className='artivle_left_list_item'
                    onClick={() => {
                      history.push(`/Detail/${item.id}`);
                    }}>
                    <div className='item_left'>
                      <img src={item.cover} alt="" />
                    </div>
                    <div className='item_right'>
                      <p className='right_title'>{item.title}</p>
                      <p className='right_summary'>{item.summary}</p>
                      <div className='right_category'>
                        <span>{item.category ? item.category.label : ''}</span>
                        <span className='right_category_point'> ▪ </span>
                        <span>{item.views}  次阅读</span>
                        <span className='right_category_point'> ▪ </span>
                        <span>{timeAgo(+new Date(item.createAt))}前</span>
                      </div>
                    </div>
                  </li>
                })
              }

            </ul>
          </div>

        </div>

        <div className="artivle_right">
          <ArchivesRet tj={tj} classification={classification} tags={tags} date={(time: string) => date(time)} />
        </div>
      </div>
    </div>
  );
}
export default observer(IndexPage)