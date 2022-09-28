 import React from 'react';
//  import Anime from './Anime.js';
 // import { connect } from 'react-redux';
 
 import Anime from './Anime.js';
 // const mapStateToProps = state => ({
 //   markets: state.markets,
 //   marketList: state.markets.marketList
 // });
 
 const AnimeList = props => {
   const animeList = [];
  //  for (let i = 0; i < props.marketList.length; i++) {
  //    markets.push(<Market market = {props.marketList[i]}/>);
  //    console.log([i])
  //  }
   return(
     <div className="displayBox">
       <h4>Animes</h4>
       {/* {markets} */}
       <Anime />
     </div>
   );
 };
 
 
 export default (AnimeList);
 // connect(mapStateToProps, null)