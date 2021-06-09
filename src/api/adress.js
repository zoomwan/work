import { get, put, post, delet } from "../utils/request";

// 添加收货人地址
export const addAdress = (params) => post("/api/v1/addresses", params);
// 修改收货地址
export const updateAdress = (id, params) =>
  put("/api/v1/addresses", id, params);
// 删除收货地址
export const delAdress = (id) => delet("/api/v1/addresses/" + id);
// 获取单个收货地址
export const oneAdress = (id) => get("/api/v1/addresses/" + id);
// 地址列表
export const addressList = (params) => get("/api/v1/addresses", params);
// 修改收货地址
export const updateAddress = (id, params) =>
  put("/api/v1/addresses/" + id, params);
// 订单提交
export const getOrder = (data) => post("/api/v1/addresses", data);
