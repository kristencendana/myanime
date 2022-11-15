import React, { Component } from 'react';
import Login from './containers/Login'
import RecommendedList from './components/RecommendedList'
import Home from './containers/Home'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setLoginActionCreator, updateTopAnime } from './actions/actions'
import { useState, useEffect } from 'react'
// import {setLoginActionCreator} from './actions/actions';


const mapDispatchToProps = dispatch => ({
  setLogin : (boolean) => dispatch(actions.setLoginActionCreator(boolean)),
  updateTopAnime: (animeList) => dispatch(actions.updateTopAnime(animeList))
});

const mapStateToProps = state => ({
  // provide pertinent state here
  totalAnime: state.animes.totalAnime,
  animeList: state.animes.animeList,
  isLoggedIn: state.animes.isLoggedIn,
  topAnime: state.animes.topAnime
});

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.state = {isLoggedIn: false};
    this.getTopAnime = this.getTopAnime.bind(this);
  };
  
  async handleLoginClick () {
    // const navigate = useNavigate();
    // console.log("using login click");
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    // console.log(username);
    // console.log(password);
    const user = {
      username: username,
      password: password
    };
    // alert("buttonclicked");
    try {
      const response = await axios.post('/login', user);
      console.log(response.data);
      // this.props.isLoggedIn = true;
      // Handle data
      // dispatch({ type: actions.SET_LOGIN, payload: true });
      // console.log(props);
      this.props.isLoggedIn = true;
      
       console.log(this.props.isLoggedIn);
      this.props.setLogin(true);
      console.log(this.props.isLoggedIn);
      // setUpdate(true);
      this.setState({isLoggedIn: true})
      // console.log(this.props.isLoggedIn);
      // navigate('/Home');
      // console.log(props);
      // props.setLogin(true);
      alert("User Found!")
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  // const [topAnime, setTopAnime] = useState([]);
  getTopAnime = async() => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime`)
      .then(res => res.json());
      alert('made it in getTopAnime')
      console.log(temp.data.slice(0,10));
      console.log(this.props.animeList)
      console.log(updateTopAnime);
      updateTopAnime(temp.data.slice(0, 10));

  }

  componentDidMount() {
    let cookie = document.cookie.ssid;
    console.log(cookie);

    this.getTopAnime();
    
  }


  render() {

    // console.log(this.props.topAnime)
    // console.log(this.props.topAnime);
    // alert(topAnime);
    return (
      <div>

        {/* <Link handleClick={this.handleLoginClick} to="/Login">Login</Link> |{" "} */}
         
        {/* <RecommendedList /> */}
        {/* <p>App Component {Greeting}</p> */} 
        {/* <Home /> */}
        {!(this.props.isLoggedIn) && <Login handleClick={this.handleLoginClick}/>}
        <Link to="/Home" className="links">Home</Link>
        {/* <Login />
        <Home/> */}
        {/* dont freak out when not see home */}
      </div>
      // <Router>
        
        /* <Switch>
          <Route path='/' component={Home} />
          <Route path='/login' component={Login} />
        </Switch> */
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(App);
