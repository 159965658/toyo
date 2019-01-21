function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        return callback(window.WebViewJavascriptBridge)
    }
    if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback)
    }
    window.WVJBCallbacks = [callback]
    let WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none'
    WVJBIframe.src = 'https://__bridge_loaded__'
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(() => {
        document.documentElement.removeChild(WVJBIframe)
    }, 0)
}
const apis = {
    callhandler(name, data, callback) {
        setupWebViewJavascriptBridge(function (bridge) {
            bridge.callHandler(name, data, callback)
        })
    },
    registerhandler(name, callback) {
        setupWebViewJavascriptBridge(function (bridge) {
            bridge.registerHandler(name, function (data, responseCallback) {
                callback(data, responseCallback)
            })
        })
    },
    login({ phoneNumber, password }) {
        const vm = window.$vm;
        // eslint-disable-next-line no-unused-vars  
        //唤醒loadding
        window.showLoading('登录中');
        var p = new Promise(function (resolve, reject) {
            vm.$native.callhandler(
                "js_user_login",
                { phoneNumber: phoneNumber, password: password },
                data => {
                    const response = JSON.parse(data);
                    if (response.SUCCESS) {
                        window.clearLoading();
                        resolve(response);
                    }
                    else {
                        window.clearLoading();
                        vm.$native.error(response.MESSAGE);
                        reject(response.MESSAGE);
                    }
                },
                '登录中...'
            );
        });
        return p;
    },
    //发送验证码
    getSmsCode({ phoneNumber }) {
        const vm = window.$vm;
        // eslint-disable-next-line no-unused-vars  
        //唤醒loadding 
        var p = new Promise(function (resolve, reject) {
            vm.$native.callhandler(
                "js_user_getSmsCode",
                { phoneNumber: phoneNumber },
                data => {
                    const response = JSON.parse(data);
                    if (response.SUCCESS) {
                        resolve(response);
                    }
                    else {
                        vm.$native.error(response.MESSAGE);
                        reject(response.MESSAGE);
                    }
                }
            );
        });
        return p;
    },
    //用户注册接口
    register({ phoneNumber, password, code }) {
        const vm = window.$vm;
        // eslint-disable-next-line no-unused-vars  
        //唤醒loadding 
        var p = new Promise(function (resolve, reject) {
            vm.$native.callhandler(
                "js_user_register",
                { phoneNumber: phoneNumber, password: password, code: code },
                data => {
                    const response = JSON.parse(data);
                    if (response.SUCCESS) {
                        resolve(response);
                    }
                    else {
                        vm.$native.error(response.MESSAGE);
                        reject(response.MESSAGE);
                    }
                }
            );
        });
        return p;
    },
    //获取车辆列表接口
    getCarListByUserId({ UserId, currPage = 1 }) {
        const vm = window.$vm;
        var p = new Promise(function (resolve, reject) {
            vm.$native.callhandler(
                "js_carManager_getCarListByUserId",
                { UserId: UserId, currPage: currPage },
                data => {
                    apis.resFun(resolve, reject, data)
                }
            );
        });
        return p;
    },
    //获取用车列表接口接口
    getBorrowCarListByUserId({ UserId, currPage = 1 }) {
        const vm = window.$vm;
        var p = new Promise(function (resolve, reject) {
            vm.$native.callhandler(
                "js_borrowCar_getBorrowCarListByUserId",
                { UserId: UserId, currPage: currPage },
                data => {
                    apis.resFun(resolve, reject, data)
                }
            );
        });
        return p;
    },
    resFun(resolve, reject, data) {
        const response = JSON.parse(data);
        if (response.SUCCESS) {
            window.clearLoading();
            resolve(response);
        }
        else {
            window.clearLoading();
            apis.error(response.MESSAGE);
            reject(response.MESSAGE);
        }
    },
    error(text) {
        setTimeout(() => {
            window.$vm.$toast(text)
        }, 1);

    }

}

export default apis