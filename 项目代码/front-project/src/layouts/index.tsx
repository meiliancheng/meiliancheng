import { Layout, BackTop } from 'antd';
import { IRouteComponentProps } from 'umi';
import Headers from '@/components/Header';
import '../font/iconfont.css';
import Footers from '@/components/Footer';
import Searchs from '@/components/Search'
import useStore from '@/context/userStore'
import { observer } from 'mobx-react-lite'
const { Content } = Layout;

function Layouts(props: IRouteComponentProps) {
  let { Searcha } = useStore()
  return (
    <>
      {
        Searcha.flag && <Searchs></Searchs>
      }
      <Headers />
      <BackTop
        target={() => document.body}
        duration={450}
        visibilityHeight={600}
      >
        <div>
          <svg
            t="1619143796299"
            style={{ width: '45px', height: '45px' }}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5208"
            width="200"
            height="200"
          >
            <path
              d="M511.99872 0C229.23008 0 0 229.23136 0 512c0 282.76992 229.23008 512 512 512 282.7712 0 512-229.23008 512-512C1024 229.23136 794.76992 0 511.99872 0zM743.37024 604.99968c-8.61696 0-16.47744-3.49312-22.1376-9.13792L542.752 417.46176l0 414.38592c0 17.24544-13.98528 31.2448-31.24608 31.2448-17.27744 0-31.27552-14.00064-31.27552-31.2448l0-0.02944L480.2304 418.432 303.33952 595.3408c-5.7088 5.96736-13.7536 9.67552-22.67904 9.67552-17.35168 0-31.41376-14.06208-31.41376-31.4304 0-8.6144 3.49184-16.43008 9.09312-22.0928l230.90816-230.9376c5.72288-6.03136 13.76768-9.81504 22.74048-9.81504 8.8128 0 16.79872 3.67744 22.47552 9.53856L765.61408 551.4624l0 0.02944c5.64736 5.6448 9.13792 13.47712 9.13792 22.12224C774.752 590.95296 760.70656 604.99968 743.37024 604.99968zM772.9216 281.8624 251.07712 281.8624c-17.2608 0-31.27552-14.03008-31.27552-31.2768 0-17.2928 14.01472-31.27808 31.27552-31.27808l521.84576 0c17.25952 0 31.27808 13.98528 31.27808 31.27808C804.19968 267.83104 790.1824 281.8624 772.9216 281.8624z"
              p-id="5209"
            ></path>
          </svg>
        </div>
      </BackTop>
      <Content>{props.children}</Content>
      <Footers />
    </>
  );
}
export default observer(Layouts)
