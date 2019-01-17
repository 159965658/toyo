import Vue from 'vue';
import App from './App';
import 'amfe-flexible';
import { router } from './router';
import { PullRefresh, List, Toast, NavBar, Icon, Swipe, SwipeItem } from 'vant';//下拉刷新  

Vue.use(Swipe).use(SwipeItem);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(List);
Vue.use(Toast);
Vue.use(PullRefresh);
import 'vant/lib/button/style';
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
