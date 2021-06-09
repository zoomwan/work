<template>
  <div class="find">
    <h1>发现频道</h1>
    <section class="findIndexTemplate">
      <ul>
        <li>
          <a href="#">
            <img
              src="https://res.vmallres.com/nwap/20190115/staticm/img/find/icon_headline.png"
              alt
            />
            <p>商城公告</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://res.vmallres.com/pimages//cop/image/SLFGdNprb0pSQks7I0rS.png" alt />
            <span>邀请有礼</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="https://res.vmallres.com/pimages///cop/image/2019/nwylDYIPCm4pn2hNwA46.png"
              alt
            />
            <p>直播预告</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://res.vmallres.com/nwap/20190115/staticm/img/find/icon_fans.png" alt />
            <p>粉丝互动</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="https://res.vmallres.com/nwap/20190115/staticm/img/find/icon_public_surver.png"
              alt
            />
            <p>华为众测</p>
          </a>
        </li>
      </ul>
    </section>
    <div class="findList">
      <header class="h">
        <span>商城头条</span>
      </header>
      <section>
        <div class="findCategoryList">
          <ul class="clearfix">
            <li>
              <a href="#">
                <img
                  src="https://res.vmallres.com/pimages/cop/newType/0JkZba0fXbu73EJDCKps.png"
                  alt
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://res.vmallres.com/pimages/cop/newType/YVZoCF8B6yp7t0AckfrY.png"
                  alt
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://res.vmallres.com/pimages/cop/newType/gVFhFTMl1zhmAoCiXX69.png"
                  alt
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://res.vmallres.com/pimages/cop/newType/92ME2SypV9gvDJPOsPH8.png"
                  alt
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://res.vmallres.com/pimages/cop/newType/RXRlTtaCvzSJPq46bp46.png"
                  alt
                />
              </a>
            </li>
          </ul>
        </div>
        <div class="findNewsList">
          <ul class="clearfix">
            <li class="product" @click="goodtail">
              <a>
                <div class="bg">
                  <img
                    src="https://res.vmallres.com/pimages//cop/topNews/27925409001610452972.jpg"
                    alt
                  />
                  <p class="p-name">【微信福利】关注华为商城公众号丨免费赢nova 8 Pro手机</p>
                  <p class="p-promotion">微信公众号回复【nova】即有机会赢取nova 8 Pro手机！</p>
                  <p class="p-other">
                    <span>2021-01-11</span>
                    <em>62661&nbsp;阅读</em>
                  </p>
                </div>
              </a>
            </li>
            <li class="product" @click="goodtail">
              <a>
                <div class="bg">
                  <img
                    src="https://res.vmallres.com/pimages//cop/topNews/95327328281612372359.jpg"
                    alt
                  />
                  <p class="p-name">女性朋友必看丨教你用手表管理生理周期</p>
                  <p class="p-promotion">这个功能守护女性健康女性生理周期管理</p>
                  <p class="p-other">
                    <span>2021-01-13</span>
                    <em>25154&nbsp;阅读</em>
                  </p>
                </div>
              </a>
            </li>
            <li class="product" @click="goodtail">
              <a>
                <div class="bg">
                  <img
                    src="https://res.vmallres.com/pimages//cop/topNews/90769517150611596709.png"
                    alt
                  />
                  <p class="p-name">新机侦探丨带你揭秘AI隔空操作</p>
                  <p class="p-promotion">Mate40系列AI隔空操作手机，这是什么神仙生活？</p>
                  <p class="p-other">
                    <span>2021-01-13</span>
                    <em>25154&nbsp;阅读</em>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// import {} from "../find/findheadline";
export default {
  components: {},
  data() {
    return {
      product: []
    };
  },
  computed: {},
  watch: {},

  methods: {
    goodtail(id) {
      this.$router.push("/findheadline/" + id);
    }
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {}
};
</script>
<style scoped>
.find {
  width: 100vw;
  text-align: center;
  font-size: 0.9rem;
  color: #191919;

  position: relative;
}
.find h1 {
  height: 40px;
  line-height: 40px;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  font-size: 16px;
  background: #fff;
  z-index: 1;
}
.findIndexTemplate {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.findIndexTemplate ul {
  width: 342px;
  height: 102px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.findIndexTemplate ul li {
  width: 68px;
  height: 102px;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.findIndexTemplate ul li a {
  /* padding: 1rem 0; */
  text-align: center;
  display: block;
  font-size: 12px;
}
.a {
  text-decoration: none;
  color: #333;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.findIndexTemplate ul li a img {
  width: 41px;
  height: 41px;
}
.findIndexTemplate ul li a img span {
  font-size: 10px;
}
.findList {
  background-color: #fff;
  margin-bottom: 5px;
}
.findList .h {
  padding: 0.5rem 0 0.6rem 0;
  font-size: 0.9rem;
  color: #333333;
  position: relative;
  text-align: center;
}
.findCategoryList {
  overflow-y: hidden;
  overflow-x: auto;
  margin-bottom: 0.35rem;
}
.findCategoryList ul {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
}
.findCategoryList ul li {
  display: inline-block;
  min-width: 4.75rem;
  padding-bottom: 0.37rem;
  /* margin-bottom: 3rem; */
  text-align: center;
}
.findCategoryList ul li a {
  display: block;
  padding-left: 0.25rem;
}
.findCategoryList ul li a img {
  width: 4.5rem;
  height: auto;
}
img {
  border: 0;
  max-width: 100%;
  height: auto;
  vertical-align: top;
}
.findNewsList ul li {
  padding: 1rem 0;
}
.findNewsList ul li .p-name {
  font-size: 0.7rem;
  line-height: normal;
  margin: 0.3rem 0.8rem 0.3rem 0.8rem;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.findNewsList ul li .p-promotion {
  font-size: 0.6rem;
  color: #666666;
  padding: 0 0.8rem;
  line-height: normal;
}
.findNewsList ul li .p-other {
  margin: 0.5rem 0.8rem 0;
  line-height: normal;
  position: relative;
  padding: 0;
  color: #999999;
  font-size: 0.6rem;
  display: flex;

  justify-content: space-between;
}
.findNewsList ul li .p-other span {
  float: left;
}
.findNewsList ul li .p-other em {
  float: right;
}
</style>