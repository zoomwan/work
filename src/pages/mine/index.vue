<template>
  <div class="wode">
    <!-- 第一个板块 -->
    <div class="redbanner">
      <van-sticky>
        <van-button type="primary" class="header">
          <div class="zong">
            <div class="lef">
              <p>
                <img
                  src="https://res.vmallres.com/nwap/20210415/staticm/img/personal/defaultface_user_after.png"
                  alt=""
                />
              </p>
              <h5 @click="tologin()">登录/注册</h5>
            </div>
            <div class="rig">
              <van-icon name="setting-o" size="2.1rem" @click="goUser" />
              <van-icon name="chat-o" size="2.1rem" />
            </div>
          </div>
        </van-button>
      </van-sticky>
      <!-- 头像 -->
      <div class="persion" v-for="item in user" :key="item._id">
        <p>
          <img
            src="https://res.vmallres.com/nwap/20210415/staticm/img/personal/defaultface_user_after.png"
            alt=""
            v-show="init"
          />
          <img :src="item.avatar" alt="" v-show="my" />
        </p>
        <!-- 用户名回显 -->
        <div class="niupi">
          <div v-show="init">
            <h5 @click="tologin()">登录/注册</h5>
            <p><van-icon class="url" name="smile" size=".6rem" /> 签到领积分</p>
          </div>
          <div v-show="my">
            <div>
              昵称:<span>{{ item.nickName }}</span>
            </div>
            <div>
              用户名:<span>{{ item.userName }}</span>
            </div>
          </div>
        </div>
      </div>

      <main class="onebankuai">
        <van-row type="flex" justify="space-around">
          <van-col class="sp" span="6"
            ><p>-</p>
            <p>积分</p></van-col
          >
          <van-col class="sp middle" span="6"
            ><p>-</p>
            <p>代金券</p></van-col
          >
          <van-col class="sp" span="6"
            ><p>-</p>
            <p>优惠劵</p></van-col
          >
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
            <van-swipe-item
              ><img
                src="https://res.vmallres.com/pimages//pages/picImages/20653969722616935602.jpg"
                alt=""
            /></van-swipe-item>
            <van-swipe-item
              ><img
                src="https://res.vmallres.com/pimages//pages/picImages/79837532822613573897.jpg"
                alt=""
            /></van-swipe-item>
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
          <van-grid-item icon="gem" color="#1989fa" text="会员频道" />
          <van-grid-item icon="friends" text="邀请处理" color="#red" />
          <van-grid-item icon="manager" text="教育购" color="#ee0a24" />
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
          <van-grid-item icon="debit-pay" color="#1989fa" text="自动服务" />
          <van-grid-item icon="tosend" text="特色服务" color="#red" />
          <van-grid-item
            icon="pending-payment"
            text="预约记录"
            color="#ee0a24"
          />
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
        <img
          src="https://res.vmallres.com/pimages//sale/2019-01/vbWjbV8qDpMZAEfVG6Rr.png"
          alt=""
        />
        <img
          src="https://res.vmallres.com/pimages//sale/2019-01/SsPo08I0eVbYcxkbU6tP.png"
          alt=""
        />
        <img
          src="https://res.vmallres.com/pimages//sale/2019-01/P4QEfc9ja3ryXeUhWskN.png"
          alt=""
        />
      </div>
    </div>
    <!-- 为您推荐 -->
    <div class="tuijian">
      <h5>为您推荐</h5>
      <div class="iii">
        <img
          src="https://res.vmallres.com/pimages/pages/dynamicMsg/67859399022619395876.png"
          alt=""
        />
      </div>
    </div>
    <div class="foot">
      <div class="ziti"><span>登录</span><span>|</span><span>反馈</span></div>
    </div>
    <div class="choose">
      <div class="choo">
        <van-grid :border="false">
          <van-grid-item icon="good-job-o" text="客户端" />
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
      <p>Copyright 2012-2021 VMALL.COM 版权所有</p>
      <p>营业执照 备案主体编号：44201919072182</p>
      <p>粤ICP备19015064号粤公网安备 44190002003939号</p>
      <p>增值电信业务经营许可证:粤B2-20190762</p>
    </div>
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
    <div>
      <!-- 修改个人信息的框 -->
      <van-popup v-model="flag" round position="bottom">
        <!-- 头像 -->
        <div class="image">
          <van-uploader :after-read="afterRead" />
          <img :src="imgurl" alt="" />
        </div>
        <!-- 昵称 -->
        <van-field
          v-model="nickname"
          type="text"
          name="nickName"
          label="昵称"
          placeholder="昵称"
          :rules="[{ required: true, message: '请填写昵称' }]"
        />
        <div class="cent">
          <van-button type="primary" @click="go" size="large">修改</van-button>
        </div>
      </van-popup>

      <!-- 修改密码的框 -->
      <div class="pass">
        <van-popup v-model="tag" round position="bottom">
          <van-field
            v-model="oldPassword"
            type="text"
            name="oldPassword"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <van-field
            v-model="password"
            type="text"
            name="password"
            label="新密码"
            placeholder="新密码"
            :rules="[{ required: true, message: '请填写新密码' }]"
          />
          <div class="cent">
            <van-button type="primary" @click="goindex" size="large"
              >修改密码提交</van-button
            >
          </div>
        </van-popup>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { reqUser, reqInfoUpdate, reqPasswordUpdate } from "../../api/user";
import { getToken } from "../../../../../day12-vuex/pm-项目手机端/code/project/src/utils/auth";
export default {
  components: {},
  data() {
    return {
      container: null,
      show: false,
      flag: false,
      tag: false,
      init: true,
      my: false,
      user: [],
      userInfo: {},
      actions: [
        { name: "修改密码" },
        { name: "修改个人信息" },
        { name: "退出登录" },
        { name: "取消" },
      ],
      imgurl: "",
      nickname: "",
      oldPassword: "",
      password: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    tologin() {
      this.$router.push("../register");
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.imgurl = file.content;
    },
    goUser() {
      this.show = true;
    },
    onSelect(item, index) {
      this.show = false;
      Toast(item.name);
      if (index == 0) {
        this.tag = true;
      }
      if (index == 1) {
        this.flag = true;
        // 回显用户信息
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
        console.log(this.userInfo);
        this.nickname = this.userInfo.nickName;
        this.imgurl = this.userInfo.avatar;
      }
      if (index == 2) {
        Toast("退出登录");
        this.init = true;
        this.my = false;
        localStorage.removeItem("token");
      }
    },

    // 获取用户的信息
    async getuserInfo() {
      const result = await reqUser();
      console.log(result);
      this.user.push(result.data);
      // console.log(this.user);
      if (result.status == 200) {
        if (getToken) {
          console.log(getToken);
          this.my = true;
          this.init = false;
          localStorage.setItem("userInfo", JSON.stringify(result.data));
        }
      }
    },

    async go() {
      // 修改头像和昵称完之后，将弹框消失，调用修改接口，重新加载用户数据
      this.flag = false;
      const result = await reqInfoUpdate({
        nickName: this.nickname,
        avatar: this.imgurl,
      });
      console.log(result);
      location.reload();
    },
    async goindex() {
      this.tag = false;
      // 修改密码，将新旧密码输入，调用接口
      let result = await reqPasswordUpdate({
        oldPassword: this.oldPassword,
        password: this.password,
      });
      console.log(result);
      if (result.data.code == "success") {
        Toast("修改密码成功");
      }
    },
  },
  created() {
    this.getuserInfo();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.wode {
  background-color: #f9f9f9;
}
.header,
.zong {
  width: 100%;
  background-color: rgb(243, 8, 8);
  height: 2.875rem;
  border: none;
}
.zong {
  position: relative;
}
.persion {
  display: flex;
  align-items: center;
  color: white;
  position: absolute;
  top: 3.5rem;
}
.niupi p {
  font-size: 0.75rem;
  width: 5.4375rem;
  height: 1.25rem;
  text-indent: 1.3rem;
  line-height: 1.25rem;
  background-color: rgba(122, 14, 14, 0.541);
  border-radius: 1.25rem;
}
.niupi p .url {
  margin-left: -3.8rem;
}
.niupi h5 {
  font-size: 1.25rem;
}
.persion img {
  width: 4rem;
  height: 4rem;
  margin: 0 0.7rem;
}
.zong .lef {
  height: 2.875rem;
  width: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -12.5rem;
  position: absolute;
}
.zong .rig {
  height: 2.875rem;
  width: 8rem;
  position: absolute;
  top: 0.3125rem;
  left: 5.125rem;
}
.zong .lef p img {
  width: 2.1rem;
  height: 2.1rem;
  margin: 0 0.8rem;
}
/* .wode{
    background-color: #775757;
} */
.redbanner {
  width: 100%;
  height: 12rem;
  margin: auto;
  background-color: red;
  border-radius: 0 0 5rem 5rem;
}
.onebankuai {
  width: 95%;
  margin: auto;
  background-color: #fff;
  padding: 1.25rem 0;
  border-radius: 0.9375rem;
  margin-top: 5rem;
}
.onebankuai .sp {
  display: block;
  width: 6rem;
  height: 1.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.order {
  width: 95%;
  margin: auto;
  background-color: #fff;
  border-radius: 0.625rem;
}
.order1 {
  width: 95%;
  margin-top: 0.7rem;
  border-radius: 0.625rem;
  background-color: #fff;
}
.order h5 {
  font-weight: 900;
  font-size: 1.125rem;
}
.lanmu {
  width: 95%;
  height: 2.75rem;
  display: flex;
  margin: 0 auto;
  margin-top: 0.7rem;
  justify-content: space-between;
  align-items: center;
}
.order2 {
  border-radius: 0.625rem;
  margin: auto;
  width: 95%;
  margin-top: 0.7rem;

  background-color: #fff;
}
.lanmu2 {
  width: 95%;
  height: 2.75rem;
  display: flex;
  margin: 0 auto;
  margin-top: 0.7rem;
  justify-content: space-between;
  align-items: center;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 1.25rem;
  line-height: 3.375rem;
  text-align: center;
}
.my-swipe img {
  width: 100%;
}
.life {
  width: 95%;
  height: 9.125rem;
  margin: 0.625rem auto;
  background-color: #fff;
  border-radius: 0.625rem;
}
.life h5 {
  font-weight: 900;
  height: 2.5rem;
  font-size: 1.125rem;
  text-indent: 0.3rem;
  line-height: 2.5rem;
}
.life div {
  width: 95%;
  height: 5.625rem;
  margin: auto;
  display: flex;
  overflow-x: scroll;
}
.life img {
  margin: 0 0.2rem;
  width: 9.125rem;
  height: 5.625rem;
}
.tuijian {
  width: 95%;
  height: 8.5rem;
  margin: 0.625rem auto;
  background-color: #fff;
  border-radius: 0.625rem;
}
.tuijian h5 {
  font-weight: 900;
  height: 2.5rem;
  font-size: 1.3rem;
  line-height: 2.5rem;
  text-align: center;
  background-color: #f9f9f9;
}
.tuijian .iii {
  width: 100%;
  height: 5.875rem;
  margin: auto;
}
.tuijian .iii img {
  width: 100%;
  margin: auto;
}
.foot {
  width: 95%;
  height: 2.5rem;
  margin: auto;
  display: flex;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-bottom: solid 0.0625rem #eaeaea;
}
.ziti span {
  margin: 0 15px;
}
.choose {
  width: 100%;
  height: 5.45rem;
  background-color: #fff;
}
.choose > .choo {
  margin-left: 4.25rem;
}
.banner {
  width: 100%;
  background-color: #fff;
  color: #9b9b9b;
  margin: auto;
  height: 9.375rem;
  padding-bottom: 4rem;
}
.xieyi {
  width: 95%;
  height: 1.3rem;
  margin: auto;
  display: flex;
  justify-content: center;
  padding-top: 0.5rem;
}
.xieyi .middle {
  border-left: solid 1px #eaeaea;
  border-right: solid 1px #eaeaea;
}
.xieyi span {
  display: block;
  width: 6rem;
  height: 1.3rem;
  line-height: 1.3rem;
  text-align: center;
}
.banner p {
  text-align: center;
  margin-top: 0.3rem;
}
</style>