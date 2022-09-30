 import React, { Component} from 'react';
//  import Anime from './Anime.js';
 import { connect } from 'react-redux';

 import Anime from './Anime.js';
 const mapStateToProps = state => ({
   animeList: state.animes.animeList
 });
 
 const AnimeList = props => {
   const animes = [];
  //  console.log("props :" + props);
  //  console.log("animeList"+props.animeList);
  //  console.log("animeList"+props.animeList.length);
  //  if (props.animeList.length){
  //  console.log("animeList"+ this.props.animeList);
   for (let i = 0; i < props.animeList.length; i++) {
     animes.push(<Anime anime = {props.animeList[i]}/>);
     console.log([i])
   }
  //  }
   return(
     <div className="displayBox">
       {/* <h4>Animes</h4> */}
       {animes}
       {/* <Anime anime ={props.animeList} /> */}
     </div>
   );
 };
 
 
 export default connect(mapStateToProps, null)(AnimeList);
