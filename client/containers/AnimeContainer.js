import React, { Component } from 'react';
import { connect } from 'react-redux';
// import child components
import AnimeCreator from '../components/AnimeCreator';
import AnimeList from '../components/AnimeList';
import RecommendedList from '../components/RecommendedList';

const mapStateToProps = state => ({
  totalAnime: state.animes.totalAnime,
  animeList: state.animes.animeList,
});

const mapDispatchToProps = dispatch => ({
  addStars : (animeName) => dispatch(actions.addStarsActionCreator(animeName)),
  removeStars : (animeName) => dispatch(actions.removeStarsActionCreator(animeName)),
  deleteAnime : (animeName) => dispatch(actions.deleteAnimeActionCreator(animeName)),
  addAnime : (animeName) => dispatch(actions.addAnimeActionCreator(animeName))
});

class AnimeContainer extends Component {
  constructor(props) {
    super(props);
    console.log("props"+this.props);
    // console.log(this.props.topAnime)
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