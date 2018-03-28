import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

require("./stylesheets/main.scss");

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
  );

render (
  <Provider store={store}>
  <App />
  </Provider>, document.getElementById('app')
  );