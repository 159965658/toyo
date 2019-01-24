// import ToastComponent from '@c/components/tips.vue'
import FullBg from '@c/full-bg.vue'

const Toast = {};
Toast.isBack = false;//默认没有全屏
// 注册Toast
Toast.install = function (Vue) {
    // 生成一个Vue的子类
    // 同时这个子类也就是组件
    // const ToastConstructor = Vue.extend(ToastComponent)
    const fullConstructor = Vue.extend(FullBg)
    // 生成一个该子类的实例
    // const instance = new ToastConstructor();
    const instanceFull = new fullConstructor();
    // 将这个实例挂载在我创建的div上
    // 并将此div加入全局挂载点内部
    // instance.$mount(document.createElement('div'))
    instanceFull.$mount(document.createElement('div'))
    // document.body.appendChild(instance.$el)
    document.body.appendChild(instanceFull.$el)
    // 通过Vue的原型注册一个方法
    // 让所有实例共享这个方法 
    // Vue.prototype.$toast = (msg, duration = 1500) => {
    //     instance.message = msg;
    //     instance.type = 0;
    //     instance.visible = true;

    //     setTimeout(() => {
    //         instance.visible = false;
    //     }, duration);
    // }
    //全屏 
    Vue.prototype.$toastFull = (visible = true) => {
        instanceFull.isShow = visible;
        if (visible)
            Toast.isBack = true;
        if (!visible) return;

        Toast.isBack = true;
    }
    //关闭全屏
    Vue.prototype.$closeFull = () => {
        Toast.isBack = false;
        //关闭内容
        const vm = window.$vm, meta = vm.$route.meta
        window.console.log(meta, vm.$refs)
        //emit 事件
        meta && meta.overlay && vm.$emit(meta.overlay);
        vm.$toastFull(false);
    }
    //获取全屏状态
    Vue.prototype.$isfull = () => {
        return Toast.isBack;
    }
    Vue.prototype.$dateFormatter = function (type, value) {
        if (type === 'year') {
            return `${value}年`;
        } else if (type === 'month') {
            return `${value}月`
        }
        return value;
    }
    Vue.prototype.$minDate = new Date('2010-01-01');//最小时间
    Vue.prototype.$$checkName = function (str) {
        var regEn = /[`!@#$%^&*()_+<>?:"{},.\\/;'[\]]/im,
            regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
        if (regEn.test(str) || regCn.test(str)) {
            return false;
        }
        return true;
    }
}

export default Toast