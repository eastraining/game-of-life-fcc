// store.js
// Creates a Redux store from a given initialState
// Or creates a store from a default initialState if none supplied

import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';

const defaultBoard = {
  height: 3,
  width: 3,
  board: [[0, 0, 0], [1, 1, 1], [0, 0, 0]]
}

let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore);

let configureStore = (initialState = defaultBoard) => {
  return finalCreateStore(reducer, initialState);
}

export default configureStore;
