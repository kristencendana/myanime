import React from 'react';
import { connect } from 'react-redux'; // you only need to use connect when you are either mapDispatchToprops or mapStateToProps in that file
import * as actions from '../actions/actions.js';

const mapDispatchToProps = dispatch => ({
  addStars : (animeName) => dispatch(actions.addStarsActionCreator(animeName)),
  removeStars : (animeName) => dispatch(actions.removeStarsActionCreator(animeName)),
  deleteAnime : (animeName) => dispatch(actions.deleteAnimeActionCreator(animeName)),
  addAnime : (animeName) => dispatch(actions.addAnimeActionCreator(animeName))
});

const AnimeCreator = props => {
  //button click or dispatch
  const handleClick = () => {
    const input = document.querySelector('input');
    props.addAnimeActionCreator(input.value);
    // props.addMarket(input.value);
    input.value = '';
  };

  return(
    <div className="createNewAnime">
      <h4>Create New Anime</h4>
      <div>
        <input id="input" type="text" name="submit" placeholder='anime name'></input>
        <button id ="button" onClick={handleClick} >Add Anime</button>
      </div>
    </div>
  );
};
//updating our state with the add market payload

export default connect(null, mapDispatchToProps)(AnimeCreator);
// export default AnimeCreator;