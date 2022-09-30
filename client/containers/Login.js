// import { loadPartialConfigSync } from '@babel/core';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
// import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import { setLoginActionCreator } from '../actions/actions';
import Home from './Home';
import { useNavigate } from "react-router-dom";
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

const mapStateToProps = state => ({
  // provide pertinent state here
  isLoggedIn: state.animes.isLoggedIn,
  totalAnime: state.animes.totalAnime,
  animeList: state.animes.animeList,
});

const Login = (props) => {
  // constructor(props) {
  //   super(props);
  //   console.log(props);
  //   console.log(this.props);
  //   this.handleLoginClick = this.handleLoginClick.bind(this);
    // const [isLoggedIn, setLogins] = useState('');
  // }

  

  // componentDidMount(){
  //   if (this.props.isLoggedIn){
  //     let insert = 'this.props.isLoggedIn && <Home />';
  //   }
  //   // console.log(this.props.isloggedIn);
  // }
  // render() {
    return (
    
      <div>
        <h2 className="login" >Login</h2>
        {/* method="POST" action='/login' type='submit' */}
          <form >
            <input id="username" name='username' type='text' placeholder='username'></input>
            <input id="password" name='password' type='password' placeholder='password'></input>
            <input className="primaryButton" onClick={props.handleClick} value='login'></input>
          </form>
            <a href='./signup'>Sign up</a> 
            {/* {(props.isLoggedIn == true) && <Home />}   */}
      </div> 
    );
  // }
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);



          
