import { ADD_FAVORITE, DEL_FAVORITE } from "../ActionTypes/productActionTypes";

const initialState = {
  favorite: [],
};

export const favoriteReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      const item = {
        id: action.payload,
      };
      return {
        ...state,
        favorite: [
          ...state.favorite,
          {
            ...item,
          },
        ],
      };
    case DEL_FAVORITE:
      return {
        ...state,
        favorite: state.favorite.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
