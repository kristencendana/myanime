import React, { Component } from 'react';
// import any other smaller components
import AnimeContainer from '../containers/AnimeContainer.js';
import TotalsDisplay from '../components/TotalsDisplay';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// const mapStateToProps = reducers => ({
//   // add pertinent state here
//   totalAnime: reducers.markets.totalCards
// });

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          Home Page:
        </h1>
        {/* <input>Search Bar</input> */}
        {/* <TotalsDisplay  /> */}
        {/* Add to Totals Display: totalAnime={this.props.totalCards} */}
        {/* <AnimeContainer /> */}
        {/* <ul>Anime List
          <li>Attack on Titan</li>
          <li>One Piece</li> */}
        {/* </ul> */}
        {/* <SearchContainer /> */}
        
        {/* <form method="POST" action='/login'>
          <input name='username' type='text' placeholder='username'></input>
          <input name='password' type='password' placeholder='password'></input>
          <input type='submit' value='login'></input>
        </form>
        <a href='./signup'>Sign up</a> */}
      </div>
    );
  }
}

export default MainContainer;