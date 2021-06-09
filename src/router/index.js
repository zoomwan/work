import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    // <!-- 默认首页 -->
    { path: "/", redirect: "/home" },
    // <!-- 首页 -->
    {
      path: "/home",
      component: () => import("../pages/home"),
      meta: { showFooter: true },
    },
    // <!-- 我的 -->
    {
      path: "/mine",
      component: () => import("../pages/mine"),
      meta: { showFooter: true },
    },
    // <!-- 分类 -->
    {
      path: "/sort",
      component: () => import("../pages/sort"),
      meta: { showFooter: true },
    },
    // <!-- 发现 -->
    {
      path: "/find",
      component: () => import("../pages/find"),
      meta: { showFooter: true },
    },
    // <!-- 购物车 -->
    {
      path: "/cart",
      component: () => import("../pages/cart"),
      meta: { showFooter: true },
    },
    // <!-- 登录 -->
    {
      path: "/register",
      component: () => import("../pages/register"),
      meta: { showFooter: false },
    }, //异步加载
    // <!-- 注册 -->
    {
      path: "/login",
      component: () => import("../pages/login"),
      meta: { showFooter: false },
    },

    // <!-- 发现模块 商品头条 -->
    {
      path: "/findHeadline/:id",
      component: () => import("../pages/find/findheadline"),
      meta: { showFooter: false },
    },

    // <!--首页模块 商品详情 -->
    {
      path: "/detail/:id",
      component: () => import("../pages/detail"),
      meta: { showFooter: false },
    },

    // <!-- 分类模块 商品详情 -->
    {
      path: "/detail/:id",
      component: () => import("../pages/sort/detail"),
      meta: { showFooter: false },
    },

    // <!-- 我的模块  收货地址 -->
    {
      path: "/address",
      component: () => import("../pages/mine/address.vue"),
      meta: { showFooter: true },
    },
    // <!-- 我的模块  新增收货地址 -->
    {
      path: "/addaddress",
      component: () => import("../pages/mine/addAddress.vue"),
      meta: { showFooter: true },
    },
    // <!-- 我的模块  修改收货地址 -->
    {
      path: "/updateaddress/:id",
      component: () => import("../pages/mine/updateAddress.vue"),
      meta: { showFooter: true },
    },
    // 订单列表页
    {
      path: "/orders",
      component: () => import("../pages/mine/orders.vue"),
      meta: { showFooter: true },
    },
  ],
});
export default router;
