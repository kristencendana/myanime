import * as types from '../constants/actionTypes';

// export const updateLogin = login => ({
//   type: types.SET_LOGIN,
//   payload: login,
// });

export const addAnimeActionCreator = animeName => ({
  type: types.ADD_ANIME,
  payload: animeName,
});