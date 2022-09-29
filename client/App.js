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


const mapStateToProps = state => ({
  // provide pertinent state here
  totalAnime: state.animes.totalAnime,
  animeList: state.animes.animeList,
  isLoggedIn: state.animes.isLoggedIn
});

class App extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    // this.state = getInitialState();
  }
  
  // Comp
  // Greeting(props) {
  //   const isLoggedIn = props.isLoggedIn;
  //   if (isLoggedIn){
  //     return <Home />;
  //   }
  //   return <Login />;
  // }
  // componentDidMount() => {
  //   this.props.isLoggedIn = document.cookie.ssid??
  // }
// cookie.isloggedin is what you set on the backend when you hanel the post to /login
  render() {
    // const { rows, turn, winner, gameList } = this.state;
    // const handleClick = this.handleClick;
    // const rowElements = rows.map((letters, i) => (
    //   <Row key={i} row={i} letters={letters} handleClick={handleClick} />
    // ));
    return (
      <div>
        {/* <p>App Component {Greeting}</p> */} 
        {!(this.props.isLoggedIn) && <Login />}
        {/* <Login /> */}
        {this.props.isLoggedIn && <Home />}
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

export default connect(mapStateToProps, null)(App);
