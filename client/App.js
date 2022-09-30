// import React, { Component } from 'react';
// // import 
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// // import any other smaller components
// import MainContainer from './containers/MainContainer.js';
// import Login from './containers/Login.js'
// import LoginControl from './containers/Login.js';

// // const Home = () => <div>Home</div>;
// // const mapStateToProps = reducers => ({
// //   isLoggedIn: reducers.state.isLoggedIn
// // })

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<Greeting isLoggedIn={true} />);
// class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   // const [screen, setScreen] = useState()
//   render() {
//     return (
//       <>
//         <h1>Hello World!</h1>
//       </>
//       // <h1>Hello world!</h1>
//     );
//   }
// }

// // const About = () => <div>About</div>;

// // const App = () => (
//   // <Router>
//   //   <Link to="/">Home</Link>
//   //   <Link to="/success">login</Link>
//     // <Route exact path="/" component={Login} />
//     // <Route path="/success" component={MainContainer} />
//   // </Router>
// // );

// // export default connect(mapStateToProps, null)(MainContainer);
// export default App;

import React, { Component } from 'react';
import Login from './containers/Login'
import Home from './containers/Home'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setLoginActionCreator } from './actions/actions'
// import {setLoginActionCreator} from './actions/actions';

// import Row from './Row';
// import GameList from './GameList';
// import Leaders from './Leaders';

// let gameStore = [];

// function getInitialState() {
//   return {
//     username: undefined,
//     password: undefined
//   };
// }

const mapDispatchToProps = dispatch => ({
  setLogin : (boolean) => dispatch(actions.setLoginActionCreator(boolean))
});

const mapStateToProps = state => ({
  // provide pertinent state here
  totalAnime: state.animes.totalAnime,
  animeList: state.animes.animeList,
  isLoggedIn: state.animes.isLoggedIn
});

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.state = {isLoggedIn: false};
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

  // Comp
  // Greeting(props) {
  //   const isLoggedIn = props.isLoggedIn;
  //   if (isLoggedIn){
  //     return <Home />;
  //   }
  //   return <Login />;
  // }
  componentDidMount() {
    let cookie = document.cookie.ssid;
    console.log(cookie);
  }
  //   l
  //   console.log("cookie")
  //   console.log(cookie);
  //   if (typeof(cookie)  === 'undefined'){
  //     CONSOLE.LOG('no cookie');
  //    } else {
  //     CONSOLE.LOG(' cookie exist');
  //    }
  //   // function checkACookieExists() {
  //   //   if (document.cookie.split(';').some((item) => item.trim().startsWith('reader='))) {
  //   //     console.log(`The cookie "reader" exists`)
  //   //   }
  //   // }
  //   // checkACookieExists()
  // }

    // this.props.isLoggedIn = 
    //document.cookie.ssid??
  // }
// cookie.isloggedin is what you set on the backend when you hanel the post to /login
  render() {
    // console.log("loggedIn"+ this.props.isLoggedIn);

    // const { rows, turn, winner, gameList } = this.state;
    // const handleClick = this.handleClick;
    // const rowElements = rows.map((letters, i) => (
    //   <Row key={i} row={i} letters={letters} handleClick={handleClick} />
    // ));
    return (
      <div>

        {/* <Link handleClick={this.handleLoginClick} to="/Login">Login</Link> |{" "} */}
         

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
