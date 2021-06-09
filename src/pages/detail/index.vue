<template>
  <div class="detail">
    <div class="TOU">
      <p @click="Gog"><van-icon name="arrow-left" /></p>
      <p @click="picGo"><van-icon name="weapp-nav" /></p>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot @click="onKF" />
      <van-goods-action-icon icon="cart-o" text="购物车" :badge="num" />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="1" @click="onDP" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onGO" />
      <van-goods-action-button type="danger" text="立即购买" @click="onBUY"  />
    </van-goods-action>
    <div class="XQ">
      <img :src="product.coverImg" alt="">
      <h2><span>{{'￥'+product.price}}</span><span>{{'库存  :'+product.quantity}}</span></h2>
      <h3>{{product.name}}</h3>
      <p>数量<span @click="minus">-</span><input type="number" v-model="num"><span @click="add">+</span></p>
    </div>
    <ul class="TJ">
      <li v-for="item in products" :key="item._id" @click="haowu(item._id)">
        <h1>好物推荐</h1>
        <img :src="item.coverImg" alt="">
      </li>
    </ul>
    <van-dialog v-model="show" title="抱歉！订单列表API出错了" show-cancel-button>
      <img src="https://img1.baidu.com/it/u=1877336880,817127914&fm=26&fmt=auto&gp=0.jpg" />
    </van-dialog>
    <van-dialog v-model="zhu" title="点击企鹅开始与我互动吧" show-cancel-button>
      <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=784737894&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:784737894:52" alt="请问有什么需要帮助的吗" title="请问有什么需要帮助的吗"/></a>
    </van-dialog>
  </div>
</template>

<script>
import { Toast } from 'vant'
import {reqProductPdesc ,reqCartProuduct ,reqProducts } from '../../api/home'
export default {
  component:{ 

  },
  data(){
    return {
      id:'',
      product:[],
      num:1,
      show: false,
      products:[],
      pages:1,
      zhu:false,
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
    Gog(){
      this.$router.push('/home')
    },
    picGo(){

    },
    add(){
      if(this.num>=10){
        Toast.fail('超出库存注意')
      }else{
        this.num++
      }

    },
    minus(){
      if(this.num<=1){
        Toast.fail('再减我就给你急眼了')
      }else{
        this.num--
      }
    },
    //客服
    onKF(){
      this.zhu=!this.zhu
    },
    //购物车
    // onGW(){ 
    // },
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
    onBUY(){
      this.show=!this.show
    },
    async getProducts(){
      const per = 10
      const page=this.pages
      const result = await reqProducts({per,page})
      console.log(result)
      this.products=result.data.products
    },
    haowu(id){
      this.$router.push('/detail/'+id)
      location.reload()
    }

  },

  created() {
    this.id=this.$route.params.id;
    this.getProductPdesc()
    this.getProducts()
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
  .TOU{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 10px;
    left: 0;
  }
  .TOU p{
    line-height: 30px;
    text-align: center;
    margin: 0 15px 0 15px;
    width: 30px;
    height: 30px;
    background: rgb(199, 199, 196);
    font-size: 20px;
    color: white;
    border-radius: 15px;
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
  .van-dialog img{
    width: 100%;
    height: 100%;
  }
  .TJ{
    width: 100%;
    height: auto;
  }
  .TJ h1{
    width: 100%;
    height: 60px;
    display: block;
    line-height: 60px;
    text-align: center;
  }
  .TJ img{
    width: 100%;
    height: auto;
  }
</style>