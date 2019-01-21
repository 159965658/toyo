

const apis = {
    login({ phoneNumber, password }) {
        //唤醒loadding
        window.showLoading('登录中');
        // eslint-disable-next-line no-unused-vars 
        var p = new Promise(function (resolve, reject) {
            const par = { phoneNumber: phoneNumber, password: password };
            //js_user_login
            window.console.log(par, 'fun:', "js_user_login");
            let response = {
                "MESSAGE": "正常终了",
                "CODE": "011000",
                "SUCCESS": true,
                "JSONResult": {
                    "UsrInfo": {
                        "id": "41b83b4fca5541f18e02632b348257d3",
                        "userid": "12345678",
                        "nickname": null,
                        "actualname": null,
                        "gender": null,
                        "phonenumber": "12345678",
                        "avatarurl": null,
                        "remarks": null,
                        "creattime": 1547196998000,
                        "updatetime": null
                    }
                }
            }
            apis.resFun(resolve, reject, response);
        });
        return p;
    },
    //发送验证码
    getSmsCode({ phoneNumber }) {
        // eslint-disable-next-line no-unused-vars  
        var p = new Promise(function (resolve, reject) {
            const par = { phoneNumber: phoneNumber };
            //js_user_login
            window.console.log(par, 'fun:', "js_user_login");
            let response = {
                "MESSAGE": "正常终了",
                "CODE": "011000",
                "SUCCESS": true,
                "JSONResult": {
                    "verifyCode": "111111",
                    "createTime": 1547196991411
                }
            }
            apis.resFun(resolve, reject, response, 0);
        });
        return p;
    },
    //用户注册
    register({ phoneNumber, password, code }) {
        //唤醒loadding     
        window.showLoading('注册中...');
        var p = new Promise(function (resolve, reject) {
            const par = { phoneNumber: phoneNumber, password: password, code: code };
            //js_user_register
            window.console.log(par, 'fun:', "js_user_register");
            let response = {
                "MESSAGE": "正常终了",
                "CODE": "011000",
                "SUCCESS": true
            }
            apis.resFun(resolve, reject, response);
        });
        return p;
    },
    resFun(resolve, reject, response, time = 3000) {
        setTimeout(() => {
            if (response.SUCCESS) {
                window.clearLoading();
                resolve(response);
            }
            else {
                window.clearLoading();
                apis.error(response.MESSAGE);
                reject(response.MESSAGE);
            }
        }, time);
    },
    error(text) {
        setTimeout(() => {
            window.$vm.$toast(text)
        }, 1);

    }
}

export default apis