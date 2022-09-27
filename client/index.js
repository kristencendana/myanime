// Importing React, React-dom, and App component to use
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from '/client/components/App'

// uncomment so that webpack can bundle styles
import styles from './scss/application.scss';

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root') 
)