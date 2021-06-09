import {get} from '../utils/request'

//获取商品
export const reqProducts = (params) =>get('/api/v1/products',params)