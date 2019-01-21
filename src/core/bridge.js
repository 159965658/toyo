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
export default {
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
                        reject(response.MESSAGE);
                    }
                },
                '登录中'
            );
        });
        return p;
    }

}