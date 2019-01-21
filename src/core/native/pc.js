
export default {
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
                    "JSONResult": {
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
            setTimeout(() => {


                if (response.SUCCESS) {
                    window.clearLoading();
                    resolve(response);
                }
                else {
                    window.clearLoading();
                    reject(response.MESSAGE);
                }
            }, 5000);
        });
        return p;
    }

}