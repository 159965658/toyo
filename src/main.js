import Vue from 'vue';
import App from './App';
import 'amfe-flexible';
import { router } from './router';

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
