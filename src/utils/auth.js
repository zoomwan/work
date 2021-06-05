import {TOKEN} from "./common"
export const isLogin = ()=>{
    if(localStorage.getItem(TOKEN)){
        return true;
    }
    return false;
}

// 存储token
export const setToken = (token)=>{
    localStorage.setItem(TOKEN,token)
}
// 获取token
export const getToken = ()=>{
    return localStorage.getItem(TOKEN)
}
// 删除token
export const removeToken = ()=>{
    localStorage.removeItem(TOKEN)
}