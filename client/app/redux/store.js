// store.js
// Creates a Redux store from a given initialState
// Or creates a store from a default initialState if none supplied

import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';

const defaultBoard = {
  height: 9,
  width: 9
}

let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore);

let configureStore = (initialState = defaultBoard) => {
  return finalCreateStore(reducer, initialState);
}

export default configureStore;
