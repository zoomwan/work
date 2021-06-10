"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqMsg = exports.reqCartProuduct = exports.reqProductPdesc = exports.reqProducts = void 0;

var _request = require("../utils/request");

var reqProducts = function reqProducts(params) {
  return (0, _request.get)('/api/v1/products', params);
}; // 获取商品详情


exports.reqProducts = reqProducts;

var reqProductPdesc = function reqProductPdesc(id) {
  return (0, _request.get)('/api/v1/products/' + id);
}; //加入购物车


exports.reqProductPdesc = reqProductPdesc;

var reqCartProuduct = function reqCartProuduct(data) {
  return (0, _request.post)('/api/v1/shop_carts', data);
}; //获取购物车
// export const reqCartProuducts =() =>get('/api/v1/shop_carts')
//获取用户信息


exports.reqCartProuduct = reqCartProuduct;

var reqMsg = function reqMsg() {
  return (0, _request.get)('/api/v1/users/info');
};

exports.reqMsg = reqMsg;