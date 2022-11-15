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

  render() {
    return (
      <div className="container">
        <form className='search-box'>
          <input type='search' placeholder='Search for an anime...' required />
        </form>
        <h1>
          Your Anime List
        </h1>
        {/* <Link to="/App">Back to Login</Link> */}
        <TotalsDisplay />
        <AnimeContainer />
      </div>
    );
  }
}

export default Home;