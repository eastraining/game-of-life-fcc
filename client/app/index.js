import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import configureStore from './redux/store';
import actions from './redux/actions'
import App from './displays/App';

let store = configureStore();

// render App
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
