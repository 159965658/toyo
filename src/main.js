import Vue from 'vue';
import App from './App';
import 'amfe-flexible';
import { router } from './router';
import { PullRefresh, List, Toast, NavBar, Icon, Swipe, SwipeItem, Popup, Picker } from 'vant';//下拉刷新  

Vue.use(Swipe).use(SwipeItem).use(Popup);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(List);
Vue.use(Toast);
Vue.use(Picker);
Vue.use(PullRefresh);
import { native } from './core/native/app';
Vue.prototype.$native = native;
import ToastFull from '@/core/toast'
Vue.use(ToastFull);
import 'vant/lib/button/style';
window.$vm = new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
