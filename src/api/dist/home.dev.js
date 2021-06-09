"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqProducts = void 0;

var _request = require("../utils/request");

var reqProducts = function reqProducts(params) {
  return (0, _request.get)('/api/v1/products', params);
};

exports.reqProducts = reqProducts;