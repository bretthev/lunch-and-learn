import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './router.js';
import { browserHistory } from 'react-router';
import store from './store/storeIndex';
import firebase from 'firebase';
import { listenForUser, getUsersFromDatabase } from './actions/userActions';
require("./styles/style-index.scss");



render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(listenForUser())
