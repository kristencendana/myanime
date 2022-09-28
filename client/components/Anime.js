 import React from 'react';
 import { connect } from 'react-redux';
 import * as actions from '../actions/actions.js';
 
//  const mapDispatchToProps = dispatch => ({
//    addCard : (marketId) => dispatch(actions.addCardActionCreator(marketId)),
//    deleteCard : (marketId) => dispatch(actions.deleteCardActionCreator(marketId))   
//  });
 

 const Anime = props => {
 
  //  const addCardButton = () => {
  //    const input = document.querySelector('button');
  //    props.addCard(props.market.marketId);
  //  };
 
  //  const deleteAnimeButton = () => {
  //    const input = document.querySelector('button');
  //    props.deleteAnime(props.market.marketId);
  //  };
 
   return (
     <div className="AnimeBox">
       <h4>AnimeBox: Anime Name:</h4>
       {/* insert in anime name {props.market.marketId} */}
       {/* <h4>Location:{props.market.location}</h4>
       <h4>Cards:{props.market.cards}</h4> */}
       {/* <h4>% of total:{props.market.percentOfTotal}</h4> */}
       {/* <button id="button" name="addCard" onClick={addCardButton}>Add Card</button> */}
       {/* <button id="button" name="deleteAnime" onClick={deleteAnimeButton}>Delete Card</button> */}
     </div>
   );
 };
 export default Anime;
 //connect (null, mapDispatchToProps)(Market)
 