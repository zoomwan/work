import { get, post } from "../utils/request";

// 注册接口
export const reqRegister = (data) => post("/api/v1/auth/reg", data);

// 登录接口
export const reqLogin = (data) => post("/api/v1/auth/login", data);

//获取用户信息
export const reqUser = () => get("/api/v1/users/info");
// 修改密码
export const reqPasswordUpdate = (data) =>
  post("/api/v1/users/change_pwd", data);
// 修改个人信息
export const reqInfoUpdate = (data) => post("/api/v1/users/change_info", data);
