import React, { useEffect, useState, Component } from 'react';
// import any other smaller components
import axios from 'axios';
import AnimeContainer from './AnimeContainer.js';
import TotalsDisplay from '../components/TotalsDisplay';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// const mapStateToProps = reducers => ({
//   // add pertinent state here
//   totalAnime: reducers.markets.totalCards
// });

class Home extends Component {
  constructor(props) {
    super(props);
  }

  //Loading anime upon opening App
  // useEffect(() => {
  //   console.log("running useEffect");
  //   axios.get('https://api.myanimelist.net/v2/anime/10357?fields=rank,mean,alternative_titles> X-MAL-CLIENT-ID: 0650bbe806ecd86d323dc55b26979089')
  //     .then(res => alert("Successful"))
  //     .catch(err => console.log(err));
  // }, []);
  //Loading flashcards upon opening App
  // GET https://api.myanimelist.net/v2/anime/10357?fields=rank,mean,alternative_titles
// > X-MAL-CLIENT-ID: a1b2c3d4e5f6
  render() {
    return (
      <div className="container">
        <h1>
          Your Anime List
        </h1>
        {/* <Link to="/App">Back to Login</Link> */}
        <TotalsDisplay />
        <AnimeContainer />
      </div>
        
      // <div>
        
      //   {/* <input>Search Bar</input> */}
      //   {/* <TotalsDisplay  /> */}
      //   {/* Add to Totals Display: totalAnime={this.props.totalCards} */}
      //   {/* <AnimeContainer /> */}
      //   {/* <ul>Anime List
      //     <li>Attack on Titan</li>
      //     <li>One Piece</li> */}
      //   {/* </ul> */}
      //   {/* <SearchContainer /> */}
        
      //   {/* <form method="POST" action='/login'>
      //     <input name='username' type='text' placeholder='username'></input>
      //     <input name='password' type='password' placeholder='password'></input>
      //     <input type='submit' value='login'></input>
      //   </form>
      //   <a href='./signup'>Sign up</a> */}
      // </div>
    );
  }
}

export default Home;