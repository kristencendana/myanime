// Importing React, React-dom, and App component to use
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from '/client/components/App'
import store from './store';
// uncomment so that webpack can bundle styles
import styles from './scss/application.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') 
)