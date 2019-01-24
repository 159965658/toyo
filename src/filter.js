import Vue from 'vue';
import * as filters from './filters';

// import * as directives from './directive';

// //全局指令
// Object.keys(directives).forEach(key => {
//     console.log(key);
//     Vue.directive(key, directives[key])
// })


//全局过滤器
Object.keys(filters).forEach(key => {
    window.console.log(key);
    Vue.filter(key, filters[key])
    Vue.prototype['$$' + key] = filters[key]
})
