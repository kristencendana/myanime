import React, { useState } from 'react';
import { connect } from 'react-redux'; // you only need to use connect when you are either mapDispatchToprops or mapStateToProps in that file
import * as actions from '../actions/actions.js';

const mapDispatchToProps = dispatch => ({
  addStars : (animeName) => dispatch(actions.addStarsActionCreator(animeName)),
  removeStars : (animeName) => dispatch(actions.removeStarsActionCreator(animeName)),
  deleteAnime : (animeName) => dispatch(actions.deleteAnimeActionCreator(animeName)),
  addAnime : (animeName) => dispatch(actions.addAnimeActionCreator(animeName))
});

const AnimeCreator = props => {

  const [ animeName, setAnime ] = useState("");

  //button click or dispatch
  const handleClick = () => {
    const input = document.querySelector('input');
    // console.log("input.value"+ input.value);
    // console.log("input"+ input);
    // console.log(animeName)
    props.addAnime(animeName);
    // props.addMarket(input.value);
    input.value = '';
  };

  return(
    <div className="createNewAnime">
      <h4>Create New Anime</h4>
      <div>
        <input id="input" onChange={e => setAnime(e.target.value)} type="text" name="submit" placeholder='anime name'></input>
        <button id ="button" className="primaryButton" onClick={handleClick} >Add Anime</button>
      </div>
    </div>
  );
};
//updating our state with the add market payload

export default connect(null, mapDispatchToProps)(AnimeCreator);
// export default AnimeCreator;