// import { loadPartialConfigSync } from '@babel/core';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
// import ACTIONS from '../constants/actionTypes';
// import { LoaderOptionsPlugin } from 'webpack';
// import any other smaller components
// import MainContainer from './containers/MainContainer.js';
const mapDispatchToProps = dispatch => ({
  addStars : (animeName) => dispatch(actions.addStarsActionCreator(animeName)),
  removeStars : (animeName) => dispatch(actions.removeStarsActionCreator(animeName)),
  deleteAnime : (animeName) => dispatch(actions.deleteAnimeActionCreator(animeName)),
  addAnime : (animeName) => dispatch(actions.addAnimeActionCreator(animeName)),
  setLogin : (boolean) => dispatch(actions.setLoginActionCreator(boolean))
});

class Login extends Component {
  constructor(props) {
    super(props);
  }

  handleLoginClick() {
    console.log("using login click");
    alert("buttonclicked");
    axios.post('/login', {
      // username: req.body.username,
      // password: req.body.password
      // ***("localhost:"{PORT})
    })
    .then((response) => {
      console.log(response.data);
      // this.props.isLoggedIn = true;
        // Handle data
        return dispatch({type:ACTIONS.SET_LOGIN, payload: true})
    })
    .catch((error) => {
      console.log(error);
      return dispatch({type:ACTIONS.SET_LOGIN, payload: true});
    })
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        {/* method="POST" action='/login' */}
          <form>
            <input name='username' type='text' placeholder='username'></input>
            <input name='password' type='password' placeholder='password'></input>
            <input onClick={this.handleLoginClick} value='login'></input>
          </form>
          <a href='./signup'>Sign up</a> 
      </div> 
    );
  }
}


// function UserGreeting(props) {
//   return <h1>Welcome Back!</h1>
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>
// }

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }
   

// export default Login;
export default connect(null, mapDispatchToProps)(Login);



          
