 import React from 'react';
 import { connect } from 'react-redux';
 
 // makes a copy of the entire original state
//  const mapStateToProps = state => ({
//    markets: state.markets
//  });
 
 const TotalsDisplay = props => (
   <div className="innerbox" id="totals">
     <label htmlFor="totalAnime">Total Anime:</label>
     {/* <span id="totalCards">{props.markets.totalCards}</span> */}
   </div>
 );
 
 export default TotalsDisplay;

 //connect(mapStateToProps, null)(TotalsDisplay);