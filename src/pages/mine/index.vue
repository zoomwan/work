<template>
    <div class='wode'>
        <!-- 第一个板块 -->
        <div class="redbanner">
                <van-sticky>
                    <van-button type="primary" class="header">
                        <div class="zong">
                            <div class="lef">
                                <p><img src="https://res.vmallres.com/nwap/20210415/staticm/img/personal/defaultface_user_after.png" alt=""></p>
                                <h5 @click="tologin()">登录/注册</h5>
                            </div>
                            <div class="rig">
                               <van-icon name="setting-o" size="2.1rem"/>
                               <van-icon name="chat-o" size="2.1rem"/>
                            </div>
                        </div>
                    </van-button>
                </van-sticky>
                <div class="persion">
                                <p><img src="https://res.vmallres.com/nwap/20210415/staticm/img/personal/defaultface_user_after.png" alt=""></p>
                                <div class="niupi">
                                    <h5 @click="tologin()">登录/注册</h5>
                                <p><van-icon class="url" name="smile" size=".6rem"/>
                                    签到领积分</p>
                                </div>
                            </div>
            <main class="onebankuai">
                <van-row type="flex" justify="space-around">
                    <van-col class="sp" span="6"><p>-</p><p>积分</p></van-col>
                    <van-col class="sp middle" span="6"><p>-</p><p>代金券</p></van-col>
                    <van-col class="sp" span="6"><p>-</p><p>优惠劵</p></van-col>
                </van-row>
            </main>
        </div>
        <!-- 第二个板块 我的订单 -->
        <div class="twobankuai">
            <nav class="order">
                <div class="lanmu">
                    <h5>我的订单</h5>
                    <p>全部订单></p>
                </div>
                <div class="twowo">
                    <van-grid :column-num="5">
                        <van-grid-item icon="cash-back-record" text="代付款" />
                        <!-- 待收货                                       -->
                        <van-grid-item icon="free-postage" text="待收货" />
                        <van-grid-item icon="filter-o" text="待评价" />
                        <van-grid-item icon="comment-circle-o" text="退换/款" />
                        <van-grid-item icon="gift-card-o" text="回收单" />
                    </van-grid>
                    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                        <van-swipe-item><img src="https://res.vmallres.com/pimages//pages/picImages/20653969722616935602.jpg" alt=""></van-swipe-item>
                        <van-swipe-item><img src="https://res.vmallres.com/pimages//pages/picImages/79837532822613573897.jpg" alt=""></van-swipe-item>
                    </van-swipe>
                </div>
            </nav>
        </div>
        <div class="order">
                <div class="lanmu">
                    <h5>我的VMALL</h5>
                    <p></p>
                </div>
                <div>
                    <van-grid :column-num="4">
                        <van-grid-item icon="gem" color="#1989fa" text="会员频道"  />
                        <van-grid-item icon="friends" text="邀请处理" color="#red" />
                        <van-grid-item icon="manager" text="教育购" color="#ee0a24"/>
                        <van-grid-item icon="bag" text="优购物码" />
                        <van-grid-item icon="hot" text="我的拼团" />
                        <van-grid-item icon="logistics" text="收货地址" />
                        <van-grid-item icon="bookmark" text="预约记录" />
                        <van-grid-item icon="umbrella-circle" text="福利中心" />
                    </van-grid>
                </div>
         </div>
         <div class="order2">
                <div class="lanmu2">
                    <h5>我的服务</h5>
                    <p>联系客服></p>
                </div>
                <div>
                    <van-grid :column-num="4">
                        <van-grid-item icon="debit-pay" color="#1989fa" text="自动服务"  />
                        <van-grid-item icon="tosend" text="特色服务" color="#red" />
                        <van-grid-item icon="pending-payment" text="预约记录" color="#ee0a24"/>
                        <van-grid-item icon="paid" text="实名认证" />
                        <van-grid-item icon="aim" text="以旧换新" />
                        <van-grid-item icon="discount" text="补够保障" />
                        <van-grid-item icon="idcard" text="换电池" />
                        <van-grid-item icon="shrink" text="常见问题" />
                    </van-grid>
                </div>
         </div>
         <!-- 华为生活 -->
         <div class="life">
             <h5>华为生活</h5>
             <div>
                <img src="https://res.vmallres.com/pimages//sale/2019-01/vbWjbV8qDpMZAEfVG6Rr.png" alt="">
                <img src="https://res.vmallres.com/pimages//sale/2019-01/SsPo08I0eVbYcxkbU6tP.png" alt="">
                <img src="https://res.vmallres.com/pimages//sale/2019-01/P4QEfc9ja3ryXeUhWskN.png" alt="">
            </div>
         </div>
         <!-- 为您推荐 -->
         <div class="tuijian">
             <h5>为您推荐</h5>
             <div class="iii">
                <img src="https://res.vmallres.com/pimages/pages/dynamicMsg/67859399022619395876.png" alt="">
                
            </div>
         </div>
         <div class="foot">
             <div class="ziti">
                <span>登录</span><span>|</span><span>反馈</span>
             </div>
         </div>
         <div class="choose">
            <div class="choo">
                <van-grid :border="false">
                <van-grid-item icon="good-job-o"  text="客户端" />
                <van-grid-item icon="aim" text="触屏版" />
                <van-grid-item icon="desktop-o" text="电脑端" />
                </van-grid>
            </div>
         </div>
         <!-- 底部的文字 -->
         <div class="banner">
             <div class="xieyi">
                <span>隐私协议</span>
                <span class="middle">用户协议</span>
                <span>关于Cookie</span>
             </div>
                <p>Copyright 2012-2021  VMALL.COM 版权所有</p>
                <p>营业执照  备案主体编号：44201919072182</p>
                <p>粤ICP备19015064号粤公网安备 44190002003939号</p>
                <p>增值电信业务经营许可证:粤B2-20190762</p>
         </div>
         
    </div>
</template>

<script>


export default {
    
    components: {},
    data() {
        
        return {
             container: null,
        };
    },
    computed: {},
    watch: {},
    
    methods: {
        tologin(){
            this.$router.push("../register")
        }
    },
    created() {
        
    },
    mounted() {
        
    },
    beforeCreate() {}, 
    beforeMount() {},
    beforeUpdate() {}, 
    updated() {}, 
    }
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.wode{
    background-color: #F9F9F9;
}
.header,.zong{
    width: 100%;
    background-color: rgb(243, 8, 8);
    height: 2.875rem;
    border: none;
}
.zong{
    position: relative;
}
.persion{
display: flex;
align-items: center;
color: white;
position: absolute;
top: 3.5rem;
}
.niupi p{
    font-size: .75rem;
    width: 5.4375rem;
    height: 1.25rem;
    text-indent: 1.3rem;
    line-height: 1.25rem;
    background-color: rgba(122, 14, 14, 0.541);
    border-radius: 1.25rem;
}
.niupi p .url{
  margin-left: -3.8rem;

}
.niupi h5{
    font-size: 1.25rem;
}
.persion img{
    width: 4rem;
    height: 4rem;
    margin:0 .7rem;
}
.zong .lef{
 height: 2.875rem;
 width: 8rem;
 display: flex;
 align-items: center;
 justify-content: center;
 margin-left: -12.5rem;
 position: absolute;
}
.zong .rig{
 height: 2.875rem;
 width: 8rem;
 position: absolute;
 top: .3125rem;
 left:5.125rem;
}
.zong .lef p img{
    width: 2.1rem;
    height: 2.1rem;
    margin: 0 .8rem;
}
/* .wode{
    background-color: #775757;
} */
.redbanner{
    width: 100%;
    height: 12rem;
    margin: auto;
    background-color: red;
    border-radius: 0 0 5rem 5rem;
}
.onebankuai{
    width: 95%;
    margin: auto;
    background-color: #fff;
    padding: 1.25rem 0;
    border-radius: .9375rem;
    margin-top: 5rem;
}
.onebankuai .sp{
    display: block;
    width: 6rem;
    height: 1.875rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.order{
    width: 95%;
    margin: auto;
    background-color: #fff;
    border-radius: .625rem;
}
.order1{
    width: 95%;
    margin-top: .7rem;
    border-radius: .625rem;
    background-color: #fff;
}
.order h5{
   font-weight: 900;
   font-size: 1.125rem;
}
.lanmu{
    width: 95%;
    height: 2.75rem;
    display: flex;
    margin: 0 auto;
    margin-top: .7rem;
    justify-content: space-between;
    align-items: center;
}
.order2{
    border-radius: .625rem;
    margin: auto;
    width: 95%;
    margin-top: .7rem;
    
    background-color: #fff;
}
.lanmu2{
    width: 95%;
    height: 2.75rem;
    display: flex;
    margin: 0 auto;
    margin-top: .7rem;
    justify-content: space-between;
    align-items: center;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 1.25rem;
    line-height: 3.375rem;
    text-align: center;
}
.my-swipe img{
width: 100%;
}
.life{
     width: 95%;
    height: 9.125rem;
    margin: .625rem auto;
     background-color: #fff;
     border-radius: .625rem;
     
}
.life h5{
     font-weight: 900;
     height: 2.5rem;
     font-size: 1.125rem;
     text-indent:.3rem ;
     line-height: 2.5rem;
}
.life div{
     width: 95%;
     height: 5.625rem;
     margin: auto;
     display: flex;
     overflow-x: scroll;
}
.life  img{
    margin: 0 .2rem;
     width: 9.125rem;
     height: 5.625rem;
}
.tuijian{
     width: 95%;
    height: 8.5rem;
    margin: .625rem auto;
     background-color: #fff;
     border-radius: .625rem;
     
}
.tuijian h5{
     font-weight: 900;
     height: 2.5rem;
     font-size: 1.3rem;
     line-height: 2.5rem;
     text-align: center;
    background-color: #F9F9F9;
}
.tuijian .iii{
     width: 100%;
     height: 5.875rem;
     margin: auto;
}
.tuijian .iii img{
     width: 100%;
     margin: auto;
}
.foot{
     width: 95%;
     height: 2.5rem;
     margin: auto;
     display: flex;
     background-color: #fff;
     align-items: center;
    justify-content: center;
    border-bottom: solid .0625rem #EAEAEA;
}
.ziti span{
    margin: 0 15px;
}
.choose{
     width: 100%;
     height: 5.45rem;
     background-color: #fff;
}
.choose>.choo{
     margin-left: 4.25rem;
}
.banner{
    width: 100%;
    background-color: #fff;
    color: #9b9b9b;
    margin:auto;
    height: 9.375rem;
    padding-bottom: 4rem;

}
.xieyi{
    width: 95%;
    height: 1.3rem;
    margin: auto;
    display: flex;
    justify-content: center;
    padding-top: .5rem;


}
.xieyi .middle{
    border-left: solid 1px #EAEAEA;
    border-right: solid 1px #EAEAEA;
}
.xieyi span{
    display: block;
    width: 6rem;
    height: 1.3rem;
    line-height: 1.3rem;
    text-align: center;

}
.banner p{
    text-align: center;
    margin-top: .3rem;
}
</style>