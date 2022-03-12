import { ADD_FAVORITE, DEL_FAVORITE } from "../ActionTypes/productActionTypes";

export const addFavorite = (id) => {
  return {
    type: ADD_FAVORITE,
    payload: id,
  };
};

export const delFavorite = (id) => {
  return {
    type: DEL_FAVORITE,
    payload: id,
  };
};
