 import React from 'react';
 import { connect } from 'react-redux';
 
 // makes a copy of the entire original state
 const mapStateToProps = state => ({
  totalAnimes: state.animes.totalAnimes
 });
 
 const TotalsDisplay = props => (
   <div className="innerbox" id="totals">
     <label className="totalAnime">Watchlist Anime Totals:</label>
     <span id="totalAnime">{props.totalAnimes}</span>
   </div>
 );
 
//  export default TotalsDisplay;

 export default connect(mapStateToProps, null)(TotalsDisplay);