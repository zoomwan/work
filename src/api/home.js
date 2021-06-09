import {get, post} from '../utils/request'

//获取商品
export const reqProducts = (params) =>get('/api/v1/products',params)

// 获取商品详情
export const reqProductPdesc =(id) =>get('/api/v1/products/'+id)

//加入购物车
export const reqCartProuduct =(data) =>post('/api/v1/shop_carts',data)