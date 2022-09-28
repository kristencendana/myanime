// import { loadPartialConfigSync } from '@babel/core';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import ACTIONS from '../constants/actionTypes';
// import { LoaderOptionsPlugin } from 'webpack';
// import any other smaller components
// import MainContainer from './containers/MainContainer.js';
const mapStateToProps = reducers => ({
  // provide pertinent state here
  // counter: state.counter.count
  // user: state.user
  loginStatus: reducers.state.loginStatus
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators to update props' 
  // method : func def
  // store.dispatch()
  // store.dispatch goes thru every single reducer func and calls each of those reducer funcs
  // accepts 1 param which is the action object
  // addCard : (marketID) => dispatch(actions.addCardActionCreator(marketID)),
  // deleteCard : (marketID) => dispatch(actions.deleteCardActionCreator(marketID)),
  // addMarket : (totalMarkets) => dispatch(actions.addMarketActionCreator(totalMarkets)),
  // setLocation : (newLocation) => dispatch(actions.addLocationActionCreator(newLocation))
    // always pass in payload as parameter to action

  // whenever you have an event (on click) in this component, the dispatch calls every reducer in this 
});
function Login (props) {

  // handleLoginClick() {
  //   console.log("using login click");
  //   alert("buttonclicked");
  //   axios.post('/success', {
  //     // Add parameters here
  //   })
  //   .then((response) => {
  //     console.log(response.data);
  //       // Handle data
  //       return dispatch({type:ACTIONS.SET_LOGIN, payload: response.data})
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }
    return (
      <div>
        <h1>Login</h1>
        <form method="POST" action='/success'>
            <input name='username' type='text' placeholder='username'></input>
            <input name='password' type='password' placeholder='password'></input>
            <input onClick={this.handleLoginClick} type='submit' value='login'></input>
          </form>
          <a href='./signup'>Sign up</a> 
      </div> 
    );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn){
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function UserGreeting(props) {
  return <h1>Welcome Back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
   

// export default Login;
export default Login;



          
