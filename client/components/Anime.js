 import React from 'react';
 import { connect } from 'react-redux';
 import * as actions from '../actions/actions.js';

 const mapDispatchToProps = dispatch => ({
   addStars : (animeName) => dispatch(actions.addStarsActionCreator(animeName)),
   removeStars : (animeName) => dispatch(actions.removeStarsActionCreator(animeName)),
   deleteAnime : (animeName) => dispatch(actions.deleteAnimeActionCreator(animeName)),
   addAnime : (animeName) => dispatch(actions.addAnimeActionCreator(animeName))
 });
 const mapStateToProps = state => ({
  animeList: state.animes.animeList
});

 const Anime = props => {
 
   const addStarsButton = () => {
     const input = document.querySelector('button');
     props.addStars(props.anime.animeName);
   };
 
   const removeStarsButton = () => {
     const input = document.querySelector('button');
     props.removeStars(props.anime.animeName);
   };

   const deleteAnimeButton = () => {
    const input = document.querySelector('button');
    props.deleteAnime(props.anime.animeName);
  };
 
   return (
     <div className="AnimeBox">
       {/* <h4>AnimeBox: Anime Name:</h4> */}
       <div class="animeTitles">
        <div>
          <h2 className="animeName">{props.anime.animeName}</h2>
          <h3 className="stars"> Review Stars: {props.anime.stars}</h3>
        </div>
        <button id="Xbutton" className="primaryButton" name="deleteAnime" onClick={deleteAnimeButton}>X</button>
       </div>
       {/* <h4>Location:{props.market.location}</h4>
       <h4>Cards:{props.market.cards}</h4> */}
       {/* <h4>% of total:{props.market.percentOfTotal}</h4> */}
       <div class="buttons">
       {/* <button id="button" className="primaryButton" name="deleteAnime" onClick={deleteAnimeButton}>X</button> */}
        <button id="button" className="primaryButton" name="addStars" onClick={addStarsButton}>Add Stars</button>
        <button id="button" className="primaryButton" name="deleteStars" onClick={removeStarsButton}>Remove Stars</button>
       </div>
     </div>
   );
 };
 export default connect (null, mapDispatchToProps)(Anime);
 