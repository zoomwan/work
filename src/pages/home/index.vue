<template>
  <div class="home">
    <div class="fixed">
      <div class="topHead">
        <img
          src="https://res.vmallres.com/nwap/20210415/images/echannelWap/logo/logo_vmall.png"
          alt=""
        />
        <p>
          <van-icon name="search" />
          <van-swipe
            class="my-swipe"
            indicator-color="rgb(255,255,255,0)"
            :autoplay="3000"
            vertical
          >
            <van-swipe-item v-for="item in words" :key="item._id">{{
              item
            }}</van-swipe-item>
          </van-swipe>
        </p>
        <van-icon name="chat-o" />
        <h4>登录</h4>
      </div>
      <div class="tits">
        <van-tabs v-model="active" type="line">
          <van-tab title="推荐"></van-tab>
          <van-tab title="华为专区"></van-tab>
          <van-tab title="HarmonyOS"></van-tab>
          <van-tab title="智能家居"></van-tab>
        </van-tabs>
        <van-icon name="arrow-down" />
      </div>
    </div>
    <div class="lunbo">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="lunbo-x">
      <p><van-icon name="certificate" />官方商城</p>
      <p><van-icon name="certificate" />正品保障</p>
      <p><van-icon name="certificate" />售后无忧</p>
    </div>
    <van-swipe class="lunbo-y" :loop="false" indicator-color="gray">
      <van-swipe-item>
        <ul class="tu">
          <li v-for="item in tur" :key="item.id">
            <img :src="item.img" alt="" />
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </van-swipe-item>
      <van-swipe-item>
        <ul class="zi">
          <li v-for="item in zir" :key="item.id">
            <img :src="item.img" alt="" />
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </van-swipe-item>
    </van-swipe>
    <div class="lun-a">
      <h3>商城头条</h3>
      <p>
        <van-swipe
          class="my-swipe"
          :autoplay="3000"
          vertical
          indicator-color="rgb(255,255,255,0)"
        >
          <van-swipe-item v-for="item in luna" :key="item.id">{{
            item
          }}</van-swipe-item>
        </van-swipe>
      </p>
      <span>更多</span>
    </div>
    <div class="lun-d">
      <ul class="lun-b">
        <li v-for="item in lunb" :key="item.id">
          <img :src="item" alt="" />
        </li>
      </ul>
      <ul class="lun-c">
        <li v-for="item in lunc" :key="item.id">
          <img :src="item" alt="" />
        </li>
      </ul>
    </div>
    <div class="lun-e">
      <h4>好物购 <van-icon name="bullhorn-o" /></h4>
    </div>
    <div class="alls">
      <ul class="cp">
        <li
          v-for="item in products"
          :key="item._id"
          @click="jumpPdesc(item._id)"
        >
          <img :src="item.coverImg" alt="" />
          <p>{{ item.name }}</p>
          <h4>{{ "￥" + item.price }}</h4>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reqProducts } from "../../api/home";
export default {
  components: {},
  data() {
    return {
      products: [],
      words: [
        "组长王豪强",
        "购物车叶小琳",
        "主页朱文平",
        "发现任雪亮",
        "致敬！朱文平",
        "分类吴金龙",
        "登录靳玉龙",
        "感谢！朱文平",
      ],
      active: 0,
      images: [
        "https://res.vmallres.com/pimages//pages/picImages/06691112822611119660.jpg",
        "https://res.vmallres.com/pimages//pages/picImages/73490197032619109437.jpg",
        "https://res.vmallres.com/pimages//pages/picImages/15590249922614209551.jpg",
        "https://res.vmallres.com/pimages//pages/picImages/04817149922614171840.jpg",
        "https://res.vmallres.com/pimages//pages/picImages/01568090922619086510.jpg",
        "https://res.vmallres.com/pimages//pages/picImages/82179681132618697128.jpg",
      ],
      tur: [
        {
          img: "https://res2.vmallres.com/shopdc/pic/ba537197-da8a-4b89-a830-5011c060cf51.png",
          name: "会员领券",
        },
        {
          img: "https://res5.vmallres.com/shopdcGray/shopdc/pic/1473acfc-2a5f-49ac-a80d-f9566357347c.png",
          name: "新品首发",
        },
        {
          img: "https://res9.vmallres.com/shopdc/pic/12b4e506-f892-4fa3-bf74-3657eda7e24e.png",
          name: "鸿蒙智联",
        },
        {
          img: "https://res7.vmallres.com/shopdc/pic/25d68a6e-3e0e-47a8-806e-95aa6e77bf21.png",
          name: "企业购",
        },
        {
          img: "https://res6.vmallres.com/shopdc/pic/321b78bc-2087-49a9-8ae5-4deac4b7af73.png",
          name: "好物众测",
        },
      ],
      zir: [
        {
          img: "https://res7.vmallres.com/shopdc/pic/39e1576c-98db-40ea-877f-0aae345856d8.png",
          name: "邀请有礼",
        },
        {
          img: "https://res8.vmallres.com/shopdc/pic/80294c0e-dd62-4410-8e31-d4df346636f1.png",
          name: "智能居家",
        },
        {
          img: "https://res2.vmallres.com/shopdcGray/shopdc/pic/8bc51b39-fd2d-4147-b756-be55d139a46c.png",
          name: "正在直播",
        },
        {
          img: "https://res7.vmallres.com/shopdc/pic/39e1576c-98db-40ea-877f-0aae345856d8.png",
          name: "生日礼包",
        },
        {
          img: "https://res2.vmallres.com/shopdcGray/shopdc/pic/2ac02997-ebf0-4b6f-95e2-980bf0774d77.png",
          name: "省钱好物",
        },
      ],
      luna: [
        "【征婚启事】朱文平没有对象！",
        "【赚钱神器】微信Vi257",
        "【看大神如何力挽狂澜】朱文平是个好人",
        "【朱文平最男人】超男Super man！",
        "【毕业后一起去旅游】一起组团",
        "【好想谈恋爱阿】哈哈哈哈哈哈",
      ],
      lunb: [
        "https://res.vmallres.com/pimages//pages/picImages/61347887032618874316.png",
        "https://res.vmallres.com/pimages//pages/picImages/42094268512616249024.jpg",
        "https://res.vmallres.com/pimages//pages/picImages/97995064132616059979.jpg",
      ],
      lunc: [
        "https://res.vmallres.com/pimages//pages/picImages/11016887032618861011.png",
        "https://res.vmallres.com/pimages//pages/picImages/68864433032613446886.jpg",
        "https://res.vmallres.com/pimages//pages/picImages/68864433032613446886.jpg",
        "https://res.vmallres.com/pimages//pages/picImages/70800703032610700807.jpg",
      ],
    };
  },
  computed: {},
  watch: {},

  methods: {
    async getProducts() {
      const per = 10;
      const page = 1;
      const result = await reqProducts({ per, page });
      console.log(result);
      this.products = result.data.products;
    },
    jumpPdesc(id) {
      this.$router.push("/detail/" + id);
    },
  },
  created() {
    this.getProducts();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.home {
  margin: 0 10px;
}
.fixed {
  width: 100%;
  z-index: 1;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
}
.topHead {
  padding: 0 10px;
  box-sizing: border-box;
  width: 100vw;
  height: 40px;
  background: rgb(253, 253, 253);
  display: flex;
  justify-content: space-between;
}
.topHead img {
  width: 61px;
  height: 13px;
  margin-top: 13px;
}
.topHead p {
  width: 193px;
  height: 32px;
  border-radius: 15px;
  background: rgb(238, 234, 234);
  margin-top: 4px;
  display: flex;
}
.topHead p .van-icon {
  font-size: 13px;
  line-height: 32px;
  padding-left: 5px;
}
.topHead p .van-swipe {
  line-height: 32px;
  width: auto;
  font-size: 15px;
}
.topHead .van-icon {
  font-size: 25px;
  line-height: 40px;
}
.topHead h4 {
  font-weight: normal;
  font-size: 13px;
  line-height: 40px;
}
.van-swipe {
  color: rgb(179, 174, 174);
}
.van-swipe i {
  opacity: 0;
}
.tits {
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: space-between;
}
.van-tabs {
  width: 300px;
  height: 34px;
}
.van-icon {
  font-size: 15px;
  width: 30px;
  line-height: 34px;
}
.lunbo {
  width: 100%;
  height: 147px;
  margin-top: 90px;
  border-radius: 15px;
  box-shadow: 0 20px 20px rgb(234, 238, 234);
}
.lunbo img {
  width: 100%;
  height: 147px;
  border-radius: 15px;
}
.lunbo-x {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 34px;
  line-height: 34px;
  color: rgb(142, 145, 145);
}
.lunbo-x p {
  display: flex;
}
.lunbo-x .van-icon {
  width: 15px;
}
.lunbo-y {
  width: 100%;
  height: 90px;
  border-bottom: solid 1px rgb(235, 245, 245);
}
.lunbo-y img {
  width: 30px;
  height: 30px;
}
.tu,
.zi {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  list-style: none;
  color: black;
}
.zi li {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.tu li {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.lun-a {
  width: 100%;
  height: 40px;
  display: flex;
  line-height: 40px;
  justify-content: space-between;
  margin-bottom: 5px;
}
.lun-a p {
  width: 250px;
  height: 40px;
  display: flex;
  font-weight: 100;
  color: black;
}
.lun-a h3 {
  font-weight: bolder;
}
.lun-a span {
  color: rgb(99, 96, 96);
}
.van-swipe__indicator {
  opacity: 0;
}
.lun-d {
  width: 100%;
  height: 498px;
  display: flex;
}
.lun-b {
  width: 50%;
  height: 498px;
  display: flex;
  flex-direction: column;
  background: blanchedalmond;
}
.lun-c {
  width: 50%;
  height: 498px;
  display: flex;
  flex-direction: column;
}
.lun-b li img {
  width: 100%;
}
.lun-c li img {
  width: 100%;
}
.lun-e {
  width: 100%;
  height: 40px;
  background: aqua;
  display: flex;
}
.lun-e .van-icon {
  font-size: 20px;
  line-height: 40px;
  color: red;
}
.lun-e h4 {
  line-height: 40px;
  font-size: 20px;
  width: 130px;
  height: 40px;
}
.lun-e p {
  width: 100%-130px;
  background: red;
  text-align: center;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
}
.alls {
  width: 100%;
  height: auto;
  margin-bottom: 50px;
}
.cp {
  width: 100%;
  height: auto;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.cp li {
  width: 165px;
  height: 190px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: rgb(241, 243, 241);
  border-radius: 10px;
}
.cp li img {
  width: 122px;
  height: 122px;
}
.cp li h4 {
  color: red;
  font-size: 14px;
}
</style>