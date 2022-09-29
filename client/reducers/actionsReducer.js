

import * as types from '../constants/actionTypes';

const initialState = {
  isLoggedIn: false,
  totalAnimes: 0,
  animeList: [{animeName: "cat", stars: 2}],
  newAnimeName: '',
}

const actionsReducer = (state = initialState, action) => {
  let animeList;
  let newAnime = {};
  const newState = Object.assign({}, state);

  switch(action.type){
    // case types.SET_LOGIN:
    //   newState.isLoggedIn = true;
    //   return newState;
    case types.ADD_ANIME:
      newState.newAnimeName = document.getElementById('input').value;
      newState.totalAnimes++;
      newAnime = {
        animeName: newState.newAnimeName,
        stars: 1
      }

      animeList = state.animeList.slice();
      animeList.push(newAnime);
      newState.animeList = animeList;
      return newState;
    default: {
      return state;
    }
  }
}

export default actionsReducer;