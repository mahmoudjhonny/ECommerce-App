"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adjustQty = exports.removeFromCart = exports.addToCart = void 0;

var _productActionTypes = require("../ActionTypes/productActionTypes");

var addToCart = function addToCart(itemId) {
  return {
    type: _productActionTypes.ADD_ITEM,
    payload: {
      id: itemId
    }
  };
};

exports.addToCart = addToCart;

var removeFromCart = function removeFromCart(itemId) {
  return {
    type: _productActionTypes.DEL_ITEM,
    payload: {
      id: itemId
    }
  };
};

exports.removeFromCart = removeFromCart;

var adjustQty = function adjustQty(itemId, value) {
  return {
    type: _productActionTypes.ADJUST_QTY,
    payload: {
      id: itemId,
      qty: value
    }
  };
};

exports.adjustQty = adjustQty;