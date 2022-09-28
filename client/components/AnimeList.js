 import React from 'react';
//  import Anime from './Anime.js';
 import { connect } from 'react-redux';
 
 import Anime from './Anime.js';
 const mapStateToProps = state => ({
   animeList: state.animes.marketList
 });
 
 const AnimeList = props => {
   const animes = [];
  //  for (let i = 0; i < props.marketList.length; i++) {
  //    animes.push(<Anime anime = {props.animeList[i]}/>);
  //    console.log([i])
  //  }
   return(
     <div className="displayBox">
       <h4>Animes</h4>
       {/* {markets} */}
       <Anime anime ={props.animeList} />
     </div>
   );
 };
 
 
 export default (AnimeList);
 // connect(mapStateToProps, null)