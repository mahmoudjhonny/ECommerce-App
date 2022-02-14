"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _cartReducers = _interopRequireDefault(require("./Reducers/cartReducers"));

var _productReducers = _interopRequireDefault(require("./Reducers/productReducers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducers = (0, _redux.combineReducers)({
  product: _productReducers["default"],
  cart: _cartReducers["default"]
});
var _default = rootReducers;
exports["default"] = _default;