// store.js
// Creates a Redux store from a given initialState
// Or creates a store from a default initialState if none supplied

import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';

let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore);

let configureStore = (initialState = {
  // TODO: Fill in the default state
}) => {
  return finalCreateStore(reducer, initialState);
}

export default configureStore;
