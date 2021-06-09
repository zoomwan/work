"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  routes: [// <!-- 默认首页 -->
  {
    path: "/",
    redirect: "/home"
  }, // <!-- 首页 -->
  {
    path: "/home",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("../pages/home"));
      });
    },
    meta: {
      showFooter: true
    }
  }, // <!-- 我的 -->
  {
    path: "/mine",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("../pages/mine"));
      });
    },
    meta: {
      showFooter: true
    }
  }, // <!-- 分类 -->
  {
    path: "/sort",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("../pages/sort"));
      });
    },
    meta: {
      showFooter: true
    }
  }, // <!-- 发现 -->
  {
    path: "/find",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("../pages/find"));
      });
    },
    meta: {
      showFooter: true
    }
  }, // <!-- 购物车 -->
  {
    path: "/cart",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("../pages/cart"));
      });
    },
    meta: {
      showFooter: true
    }
  }, // <!-- 登录 -->
  {
    path: "/register",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("../pages/register"));
      });
    },
    meta: {
      showFooter: false
    }
  }, //异步加载
  // <!-- 注册 -->
  {
    path: "/login",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("../pages/login"));
      });
    },
    meta: {
      showFooter: false
    }
  }, // <!-- 发现模块 商品头条 -->
  {
    path: "/findHeadline/:id",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("../pages/find/findheadline"));
      });
    },
    meta: {
      showFooter: false
    }
  }, // <!--首页模块 商品详情 -->
  {
    path: "/detail/:id",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("../pages/detail"));
      });
    },
    meta: {
      showFooter: false
    }
  }, // <!-- 分类模块 商品详情 -->
  {
    path: "/detail/:id",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("../pages/sort/detail"));
      });
    },
    meta: {
      showFooter: false
    }
  }, // <!-- 我的模块  收货地址 -->
  {
    path: "/address",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("../pages/mine/address.vue"));
      });
    },
    meta: {
      showFooter: true
    }
  }, // <!-- 我的模块  新增收货地址 -->
  {
    path: "/addaddress",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("../pages/mine/addAddress.vue"));
      });
    },
    meta: {
      showFooter: true
    }
  }, // <!-- 我的模块  修改收货地址 -->
  {
    path: "/updateaddress/:id",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("../pages/mine/updateAddress.vue"));
      });
    },
    meta: {
      showFooter: true
    }
  }]
});
var _default = router;
exports["default"] = _default;