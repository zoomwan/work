import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import {
  Lazyload,
  Tab,
  Tabs,
  Tabbar,
  TabbarItem,
  Sticky,
  Icon,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Button,
  Col,
  Row,
  Form,
  Field,
  Uploader,
  Toast,
  ActionSheet,
  Popup,
  AddressEdit,
  Checkbox,
  CheckboxGroup,
  Overlay,
  SubmitBar,
  TreeSelect,
  Image as VanImage,
  Search,
} from "vant";
import "vant/lib/index.css";

import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";
import { Dialog } from "vant"; //立即的事

Vue.use(Dialog);
Vue.use(Search);
Vue.use(VanImage);
Vue.use(TreeSelect); //分类选择
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);

Vue.use(Tabs);
Vue.use(SubmitBar);

Vue.use(Tab);
Vue.use(Lazyload);
Vue.use(Popup);
Vue.use(Checkbox);
Vue.use(Overlay); //遮罩层
Vue.use(CheckboxGroup);
Vue.use(AddressEdit); //使用地址列表
Vue.use(ActionSheet);
Vue.use(Uploader); //上传文件
Vue.use(Form); //表单
Vue.use(Field);
Vue.use(Col);
Vue.use(Row);
Vue.use(Button); //按钮
Vue.use(Tabbar);
Vue.use(GridItem);
Vue.use(SwipeItem);
Vue.use(Grid); //格子
Vue.use(Icon); //图标
Vue.use(Sticky); //粘性布局
Vue.use(TabbarItem);
Vue.use(Swipe); //轮播
Vue.use(Toast); //清提示
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
