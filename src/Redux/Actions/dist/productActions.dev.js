"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchProducts = exports.fetchProductFailuar = exports.fetchProductSuccess = exports.fetchProductRequast = void 0;

var _productActionTypes = require("../ActionTypes/productActionTypes");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchProductRequast = function fetchProductRequast() {
  return {
    type: _productActionTypes.FETCH_PRODUCT_REQUAST
  };
};

exports.fetchProductRequast = fetchProductRequast;

var fetchProductSuccess = function fetchProductSuccess(products) {
  return {
    type: _productActionTypes.FETCH_PRODUCT_SUCCESS,
    payload: products
  };
};

exports.fetchProductSuccess = fetchProductSuccess;

var fetchProductFailuar = function fetchProductFailuar(error) {
  return {
    type: _productActionTypes.FETCH_PRODUCT_FAILUAR,
    payload: error
  };
};

exports.fetchProductFailuar = fetchProductFailuar;

var fetchProducts = function fetchProducts() {
  return function (dispatch) {
    dispatch(fetchProductRequast());

    _axios["default"].get('https://fakestoreapi.com/products').then(function (res) {
      var products = res.data;
      console.log(products);
      dispatch(fetchProductSuccess(products));
    })["catch"](function (error) {
      dispatch(fetchProductFailuar(error.massage));
    });
  };
};

exports.fetchProducts = fetchProducts;