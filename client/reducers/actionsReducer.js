

import * as types from '../constants/actionTypes';

const initialState = {
  isLoggedIn: false,
  totalAnimes: 0,
  animeList: [],
  newAnimeName: '',
  topAnime: [],
}

const actionsReducer = (state = initialState, action) => {
  let animeList;
  let newAnime = {};
  const newState = Object.assign({}, state);

  switch(action.type){
    case types.UPDATE_TOP_ANIME:
      console.log(newState)
      newState.topAnime = action.payload;
      console.log(newState.topAnime)
      return newState;
    case types.SET_LOGIN:
      newState.isLoggedIn = action.payload;
      return newState;
    case types.ADD_ANIME:
      // newState.newAnimeName = action.payload;
      newState.totalAnimes++;
      newAnime = {
        animeName: action.payload,
        stars: 1
      }
      animeList = state.animeList.slice();
      animeList.push(newAnime);
      newState.animeList = animeList;
      return newState;
      case types.DELETE_ANIME:
        newState.totalAnimes = state.totalAnimes;

        newState.animeList = state.animeList.filter((anime, i) => {
          if (state.animeList[i].animeName == action.payload){
            newState.totalAnimes--;
          };
          return (state.animeList[i].animeName !== action.payload)
          // {
            // newState.totalAnimes--;
            // return {animeName, stars};
            // } 
            // return;
        // });
        });
        return newState;

    case types.ADD_STARS:
      // animeList = state.animeList.slice();
      // action.payload.stars++;
      // newState = {...state, animeList: [...state.animeList]}
      newState.animeList = state.animeList.map((anime, i) => {
        if (state.animeList[i].animeName == action.payload){
          const stars = Math.min(anime.stars + 1, 5);
          return {
            animeName: action.payload, 
            stars: stars};
        } else {
          return anime;
        }
      });
      return newState;
    case types.REMOVE_STARS:
      newState.animeList = state.animeList.map((anime, i) => {
        if (state.animeList[i].animeName == action.payload){
          const stars = Math.max(0, anime.stars - 1);
          return {
            animeName: action.payload, 
            stars: stars};
        } else {
          return anime;
        }
      });
      return newState;
    default: {
      return state;
    }
  }
}

export default actionsReducer;