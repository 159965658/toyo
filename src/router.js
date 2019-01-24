import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const mainIndex = () => import('./view/vehicle/index')
const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    name: "login",
    component: () => import('./view/login'),
    meta: {
      title: "登录",
      isValid: true
    }
  },
  {
    name: 'register',
    component: () => import('./view/login/register'),
    meta: {
      title: "注册",
      isValid: true
    }
  }, {
    path: "/main",
    component: mainIndex,
    redirect: "/main/vehicle",
    children: [
      {
        path: 'vehicle', name: 'vehicle', component: () => import('./view/vehicle/my-vehicle'), meta: {
          title: "车辆"
        }
      }, // 车辆
      {
        path: "goodfriend", name: "goodfriend", component: () => import('./view/friend'), meta: {
          title: '好友',
          overlay: "isfunVue"
        }
      }, //好友
      {
        path: "vehicleuse", name: "vehicleuse", component: () => import('./view/vehicle/vehicle-use'), meta: {
          title: '用车',

        }
      }, //用车
      {
        path: "mine", name: "mine", component: () => import('./view/user'), meta: {
          title: '我的'
        }
      }
    ]
  },
  { name: 'qrcode', component: () => import('./view/user/my-qrcode'), meta: { title: '我的二维码' } },
  {
    name: 'hisuser',
    component: () => import('./view/vehicle/his-use'),
    meta: {
      title: '历史用车'
    }
  },
  {
    name: 'user',
    component: () => import('./view/user'),
    meta: {
      title: '会员中心'
    }
  },
  {
    name: 'cart',
    component: () => import('./view/cart'),
    meta: {
      title: '购物车'
    }
  },
  {
    name: 'goods',
    component: () => import('./view/goods'),
    meta: {
      title: '商品详情'
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  const isLogin = to.meta && to.meta.isValid;
  if (!isLogin) {
    const user = sessionStorage.getItem('userSession');
    if (!user)
      next('/login');
  }
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
