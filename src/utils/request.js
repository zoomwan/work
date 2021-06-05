import axios from "axios";
import {BASE_URL}from "./common"
import {getToken} from "./auth"
const instance = axios.create({
    baseURL:BASE_URL,
    timeout:5000,
})
// 添加拦截器
instance.interceptors.request.use(function (config) {
   if(getToken()){
     config.headers.authorization ="Bearer "+ getToken();//Bearer空格
   }
    return config;

  }, function (error) {
 
    return Promise.reject(error);
  });


instance.interceptors.response.use(function (response) {
    
    return response;
  }, function (error) {
    
    return Promise.reject(error);
  });

//   封装get请求
export const get =(url,params)=>instance.get(url,{params});
// 封装post请求
export const post = (url,data)=>instance.post(url,data);
// 封装delete请求
export const delet = (url,data)=>instance.delete(url,data);
// 封装put请求
export const put = (url,id,data)=>instance.put(url,id,data);