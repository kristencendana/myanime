import React, { Component } from 'react';
import { connect } from 'react-redux';
// import child components
import AnimeCreator from '../components/AnimeCreator';
import AnimeList from '../components/AnimeList';
import RecommendedList from '../components/RecommendedList';
// STATE mapStateToProps OR mapDispatchToProps

class AnimeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div>
      <AnimeCreator />
      <AnimeList />
      <RecommendedList />
    </div>
  }
}

export default AnimeContainer;