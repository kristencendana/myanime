import { combineReducers } from "redux";
// import all reducers here
// import marketsReducer from './marketsReducer';
// import totalCards from './marketsReducer';

import actionsReducer from './actionsReducer'
// combine reducers into one obj with the label markets
const reducers = combineReducers({
  // if we had other reducers, they would go here
  // markets: marketsReducer,
  state: actionsReducer,
});
// make the combined reducers available for import
export default reducers;