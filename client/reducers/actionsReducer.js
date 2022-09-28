

import * as types from '../constants/actionTypes';

const initialState = {
  isLoggedIn: false,
  totalAnimes: 0,
  animeList: [],
  animeId: 10000,
}

const actionsReducer = (state = initialState, action) => {
  let animneList;
  let newAnime = {};
  const newState = Object.assign({}, state);

  switch(action.type){
    case types.SET_LOGIN:
      newState.isLoggedIn = true;
      return newState;
    default: {
      return state;
    }
  }
}

export default actionsReducer;