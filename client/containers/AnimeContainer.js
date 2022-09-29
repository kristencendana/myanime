import React, { Component } from 'react';
import { connect } from 'react-redux';
// import child components
import AnimeCreator from '../components/AnimeCreator';
import AnimeList from '../components/AnimeList';
import RecommendedList from '../components/RecommendedList';
// STATE mapStateToProps OR mapDispatchToProps
const mapStateToProps = state => ({
  // provide pertinent state here
  // counter: state.counter.count
  // user: state.user
  totalAnime: state.animes.totalAnime,
  animeList: state.animes.animeList,
});

const mapDispatchToProps = dispatch => ({
  addStars : (animeName) => dispatch(actions.addStarsActionCreator(animeName)),
  removeStars : (animeName) => dispatch(actions.removeStarsActionCreator(animeName)),
  deleteAnime : (animeName) => dispatch(actions.deleteAnimeActionCreator(animeName)),
  addAnime : (animeName) => dispatch(actions.addAnimeActionCreator(animeName))
});

// const mapDispatchToProps = dispatch => ({
//   // create functions that will dispatch action creators to update props' 
//   // method : func def
//   // store.dispatch()
//   // store.dispatch goes thru every single reducer func and calls each of those reducer funcs
//   // accepts 1 param which is the action object
//   addCard : (marketID) => dispatch(actions.addCardActionCreator(marketID)),
//   deleteCard : (marketID) => dispatch(actions.deleteCardActionCreator(marketID)),
//   addMarket : (totalMarkets) => dispatch(actions.addMarketActionCreator(totalMarkets)),
//   setLocation : (newLocation) => dispatch(actions.addLocationActionCreator(newLocation))
//     // always pass in payload as parameter to action

//   // whenever you have an event (on click) in this component, the dispatch calls every reducer in this 
// });

class AnimeContainer extends Component {
  constructor(props) {
    super(props);
    console.log("props"+this.props);
  }

  render() {
    // console.log("props: "+ this.props.animeList);
    // console.log("Is it undefined: " + this.props.animeList == undefined);
    return(
    <div className="innerbox">
      <AnimeCreator /> 
      <AnimeList animeList={this.props.animeList}/>
      {/* <RecommendedList /> */}
    </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimeContainer);
// export default AnimeContainer;