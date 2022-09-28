// // Importing React, React-dom, and App component to use
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import App from './App'
// import store from './store';
// import Login from './containers/Login';
// // import './styles/main.scss';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import MainContainer from './containers/MainContainer';

// import styles from './scss/application.scss';

// render(
//     // <Provider store={store}>
//       <div>
//         <p>Hello World</p>
//       </div>,
//     // </Provider>,
//   document.getElementById('root') 
// )

// // function Home() {
// //   return (
// //     <div>
// //       <h1>Home route</h1>
// //     </div>
// // )}

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.js';
import store from './store';

// uncomment so that webpack can bundle styles
import styles from './scss/application.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
