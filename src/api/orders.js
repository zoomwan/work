import { get, post, delet } from "../utils/request";
// 订单提交
export const giveOrder = (params) => post("/api/v1/orders", params);
// 获取订单列表
export const getOrderList = (params) => get("/api/v1/orders", params);
// 根据 id 获取订单详情
export const getOrderdetail = (id) => get("/api/v1/orders/" + id);
// 根据 id 删除详情
export const delOrderdetail = (id) => delet("/api/v1/orders/" + id);
// 删除多个订单
export const delOrderall = (params) => post("/api/v1/orders/delmany", params);
