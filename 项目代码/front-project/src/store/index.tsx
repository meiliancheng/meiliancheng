import Archives from './modules/archives';
import Knowledge from './modules/knowledge';
import Msgbord from './modules/Msgboard';
import About from './modules/about';
import Article from './modules/article';
import Search from './modules/search'
export default {
  archives: new Archives(),
  knowledge: new Knowledge(),
  Msgbord: new Msgbord(),
  about: new About(),
  Article: new Article(),
  Searcha: new Search()
};
