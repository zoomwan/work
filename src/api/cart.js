import { get, post, delet } from "../utils/request";

// 加入购物车需要提供用户token值
// 加入购物车
export const reqAddCart = (data) => post("/api/v1/shop_carts", data);
// 购物车列表
export const reqCartList = () => get("/api/v1/shop_carts");
// 删除购物车的意见商品
export const reqCartdel = (id) => delet("/api/v1/shop_carts/" + id);
// 删除购物车的所有商品
export const reqCartdels = (data) => post("/api/v1/shop_carts/delmany", data);

// 获取订单列表
export const reqOrderList = () => get("/api/v1/orders");
// 收货地址列表
export const reqAddressList = () => get("/api/v1/addresses");
