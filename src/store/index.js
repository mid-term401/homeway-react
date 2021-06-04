// this is the store

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import loggin from './loggin';
const reducers = combineReducers({ loggin });


const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();