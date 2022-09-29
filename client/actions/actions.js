import * as types from '../constants/actionTypes';

// export const updateLogin = login => ({
//   type: types.SET_LOGIN,
//   payload: login,
// });
export const addAnimeActionCreator = animeName => ({
  type: types.ADD_ANIME,
  payload: animeName,
});

export const deleteAnimeActionCreator = animeName => ({
  type: types.DELETE_ANIME,
  payload: animeName,
});

export const addStarsActionCreator = animeName => ({
  type: types.ADD_STARS,
  payload: animeName,
});

export const removeStarsActionCreator = animeName => ({
  type: types.REMOVE_STARS,
  payload: animeName,
});

export const setLoginActionCreator = boolean => ({
  type: types.SET_LOGIN,
  payload: boolean,
});
