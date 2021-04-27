
2
3
4
5
6
7
8
9
import { useContext } from 'react';
import StoreContext from './storeContext';

function useStore() {
  let store = useContext(StoreContext);
  return store;
}

export default useStore;