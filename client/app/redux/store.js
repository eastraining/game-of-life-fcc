// store.js
// Creates a Redux store from a given initialState
// Or creates a store from a default initialState if none supplied

import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';
import actions from './actions'

// generate random board using reducer action - clumsy
let defaultBoard = reducer({}, actions.genBoard(6, 9));

let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore);

let configureStore = (initialState = defaultBoard) => {
  return finalCreateStore(reducer, initialState);
}

export default configureStore;
