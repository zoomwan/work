import Vue from 'vue'
import App from './App.vue'
import { Tabbar, TabbarItem } from "vant";
import 'vant/lib/index.css';
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
