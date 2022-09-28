// Importing React, React-dom, and App component to use
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App'
import store from './store';
import Login from './containers/Login';
// uncomment so that webpack can bundle styles
import styles from './scss/application.scss';
// import './styles/main.scss';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainContainer from './containers/MainContainer';

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root') 
)

// function Home() {
//   return (
//     <div>
//       <h1>Home route</h1>
//     </div>
// )}