// this is the store

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// const ReduxThunk = require('redux-thunk').default

import { composeWithDevTools } from 'redux-devtools-extension';
import loggin from './loggin';
import thunkReducer from './thunkReducer'

const reducers = combineReducers({ loggin,thunkReducer  });


const store = () => {
  return createStore(reducers,applyMiddleware(thunk), composeWithDevTools());
};

export default store();