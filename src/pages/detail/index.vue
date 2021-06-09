<template>
  <div class="detail">
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot @click="onKF" />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" @click="onGW" />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12" @click="onDP" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onGO" />
      <van-goods-action-button type="danger" text="立即购买" @click="onBUY"  />
    </van-goods-action>
    <div class="XQ">
      <img :src="product.coverImg" alt="">
      <h2><span>{{'￥'+product.price}}</span><span>{{'库存  :'+product.quantity}}</span></h2>
      <h3>{{product.name}}</h3>
      <p>数量<span @click="minus">-</span><input type="number" v-model="num"><span @click="add">+</span></p>
    </div>
  </div>
</template>

<script>
import {reqProductPdesc ,reqCartProuduct } from '../../api/home'
export default {
  component:{},
  data(){
    return {
      id:'',
      product:[],
      num:1,
    };
  },
  computed:{},
  watch:{},
  methods: {
    async getProductPdesc(){
      const id= this.id
      const result = await reqProductPdesc(id)
      console.log(result.data)
      this.product=result.data
    },
    add(){
      this.num++
    },
    minus(){
      this.num--
    },
    //客服
    onKF(){},
    //购物车
    onGW(){},
    //店铺
    onDP(){},
    //加入购物车跳转
    async onGO(){
      const product= this.id
      const quantity=this.num
      const result = await reqCartProuduct({product,quantity})
      console.log(result)
      this.$router.push('/cart')
    },
    //直接买
    onBUY(){},

  },

  created() {
    this.id=this.$route.params.id;
    this.getProductPdesc()
  },
  mounted() {},
  beforeCreate() {},
  beforeMount(){},
  beforeUpdate(){},
  updated(){},
};
</script>
<style scoped>
  .detail{
    margin: 0 10px;
  }
  .XQ{
    width: 100%;
    height: auto;
    border-bottom: 3px solid aliceblue;
  }
  .XQ img{
    width: 100%;
    height: 340px;
    border-radius: 15px;
  }
  .XQ h2{
    color: red;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
  }
  .XQ h3{
    font-weight: bolder;
    line-height: 20px;
  }
  .XQ p{
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    margin-top: 5px;
    display: flex;
  }
  .XQ p input{
    width: 30px;
    height:30px ;
    box-sizing: border-box;
    line-height: 30px;
  }
  .XQ p span{
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: solid 1px slategrey;
    margin: 0 5px ;
    text-align: center;
    line-height: 20px;
  }
</style>