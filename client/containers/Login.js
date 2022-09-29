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
  isLoggedIn: false,
  totalAnime: state.animes.totalAnime,
  animeList: state.animes.animeList,
});

const Login = () => {
  const [isLoggedIn, setUpdate] = useState(false);
  // constructor(props) {
  //   super(props);
  //   console.log(props);
  //   console.log(this.props);
  //   this.handleLoginClick = this.handleLoginClick.bind(this);
  //   // const [isLoggedIn, setLogins] = useState('');
  // }

  const handleLoginClick = async () => {
    // const navigate = useNavigate();
    console.log("using login click");
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    const user = {
      username: username,
      password: password
    };
    alert("buttonclicked");
    try {
      const response = await axios.post('/login', user);
      console.log(response.data);
      // this.props.isLoggedIn = true;
      // Handle data
      // dispatch({ type: actions.SET_LOGIN, payload: true });
      // console.log(props);
      // this.props.isLoggedIn = true;
      // setUpdate(true);
      // navigate('/Home');
      // console.log(props);
      // props.setLogin(true);
    } catch (error) {
      console.log(error);
    }
  }

  // componentDidMount(){
  //   if (this.props.isLoggedIn){
  //     let insert = 'this.props.isLoggedIn && <Home />';
  //   }
  //   // console.log(this.props.isloggedIn);
  // }
  // render() {
    return (
    
      <div>
        <h1>Login</h1>
        {/* method="POST" action='/login' type='submit' */}
          <form >
            <input id="username" name='username' type='text' placeholder='username'></input>
            <input id="password" name='password' type='password' placeholder='password'></input>
            <input onClick={handleLoginClick} value='login'></input>
          </form>
          <a href='./signup'>Sign up</a> 
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



          
