"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delFavorite = exports.addFavorite = void 0;

var _productActionTypes = require("../ActionTypes/productActionTypes");

var addFavorite = function addFavorite(id) {
  return {
    type: _productActionTypes.ADD_FAVORITE,
    payload: {
      id: id
    }
  };
};

exports.addFavorite = addFavorite;

var delFavorite = function delFavorite(id) {
  return {
    type: _productActionTypes.DEL_FAVORITE,
    payload: {
      id: id
    }
  };
};

exports.delFavorite = delFavorite;