import * as types from '../constants/actionTypes';

export const updateLogin = login => ({
  type: types.SET_LOGIN,
  payload: login,
});