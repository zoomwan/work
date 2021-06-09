"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _vant = require("vant");

require("vant/lib/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//立即的事
_vue["default"].use(_vant.Dialog);

_vue["default"].use(_vant.GoodsAction);

_vue["default"].use(_vant.GoodsActionButton);

_vue["default"].use(_vant.GoodsActionIcon);

_vue["default"].use(_vant.Tabs);

_vue["default"].use(_vant.SubmitBar);

_vue["default"].use(_vant.Tab);

_vue["default"].use(_vant.Lazyload);

_vue["default"].use(_vant.Popup);

_vue["default"].use(_vant.Checkbox);

_vue["default"].use(_vant.Overlay); //遮罩层


_vue["default"].use(_vant.CheckboxGroup);

_vue["default"].use(_vant.AddressEdit); //使用地址列表


_vue["default"].use(_vant.ActionSheet);

_vue["default"].use(_vant.Uploader); //上传文件


_vue["default"].use(_vant.Form); //表单


_vue["default"].use(_vant.Field);

_vue["default"].use(_vant.Col);

_vue["default"].use(_vant.Row);

_vue["default"].use(_vant.Button); //按钮


_vue["default"].use(_vant.Tabbar);

_vue["default"].use(_vant.GridItem);

_vue["default"].use(_vant.SwipeItem);

_vue["default"].use(_vant.Grid); //格子


_vue["default"].use(_vant.Icon); //图标


_vue["default"].use(_vant.Sticky); //粘性布局


_vue["default"].use(_vant.TabbarItem);

_vue["default"].use(_vant.Swipe); //轮播


_vue["default"].use(_vant.Toast); //清提示


_vue["default"].config.productionTip = false;
new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _router["default"]
}).$mount("#app");