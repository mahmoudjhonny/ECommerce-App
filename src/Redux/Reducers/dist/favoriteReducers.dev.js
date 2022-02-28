"use strict";

var _productActionTypes = require("../ActionTypes/productActionTypes");

var initialState = {
  favorite: []
};

var favoriteReducers = function favoriteReducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _productActionTypes.ADD_FAVORITE:
      return {};

    case _productActionTypes.DEL_FAVORITE:
      return {};

    default:
      return state;
  }
};