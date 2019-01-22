

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
                        "nickname": 'ceshi',
                        "actualname": null,
                        "gender": null,
                        "phonenumber": "12345678",
                        "avatarurl": "http://img2.imgtn.bdimg.com/it/u=3846895839,2711067435&fm=26&gp=0.jpg",
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
    //获取车辆列表接口
    getCarListByUserId({ UserId, currPage = 1 }) {
        //唤醒loadding      
        var p = new Promise(function (resolve, reject) {
            const par = { UserId: UserId, currPage: currPage };
            //js_user_register
            window.console.log(par, 'fun:', "js_carManager_getCarListByUserId");
            let response = {
                "MESSAGE": "正常终了",
                "CODE": "011000",
                "SUCCESS": true,
                "JSONResult": {
                    "CarInfoList": [
                        {
                            "id": "41b83b4fca5541f18e02632b34825710",
                            "carid": "CAR_010",
                            "platenumber": "京A00010",
                            "brandmodelnumber": "ES200x",
                            "vehicletype": "小型普通客车",
                            "vin": "LFMAPE2C7A0185410",
                            "enginenumber": "F000010",
                            "natureofuse": "02",
                            "registrationdate": "20170101",
                            "displacement": "2.0L",
                            "color": "超音速钛银色",
                            "longitude": "116.30718",
                            "latitude": "39.98226",
                            "carstatus": "02",
                            "creatuser": "13000000001",
                            "creattime": 1547196960000,
                            "updateuser": "13000000001",
                            "updatetime": 1547436120000
                        },
                        {
                            "id": "41b83b4fca5541f18e02632b34825710",
                            "carid": "CAR_010",
                            "platenumber": "京A00010",
                            "brandmodelnumber": "ES200x",
                            "vehicletype": "小型普通客车",
                            "vin": "LFMAPE2C7A0185410",
                            "enginenumber": "F000010",
                            "natureofuse": "02",
                            "registrationdate": "20170101",
                            "displacement": "2.0L",
                            "color": "超音速钛银色",
                            "longitude": "116.30718",
                            "latitude": "39.98226",
                            "carstatus": "02",
                            "creatuser": "13000000001",
                            "creattime": 1547196960000,
                            "updateuser": "13000000001",
                            "updatetime": 1547436120000
                        }, {
                            "id": "41b83b4fca5541f18e02632b34825710",
                            "carid": "CAR_010",
                            "platenumber": "京A00010",
                            "brandmodelnumber": "ES200x",
                            "vehicletype": "小型普通客车",
                            "vin": "LFMAPE2C7A0185410",
                            "enginenumber": "F000010",
                            "natureofuse": "02",
                            "registrationdate": "20170101",
                            "displacement": "2.0L",
                            "color": "超音速钛银色",
                            "longitude": "116.30718",
                            "latitude": "39.98226",
                            "carstatus": "02",
                            "creatuser": "13000000001",
                            "creattime": 1547196960000,
                            "updateuser": "13000000001",
                            "updatetime": 1547436120000
                        }, {
                            "id": "41b83b4fca5541f18e02632b34825710",
                            "carid": "CAR_010",
                            "platenumber": "京A00010",
                            "brandmodelnumber": "ES200x",
                            "vehicletype": "小型普通客车",
                            "vin": "LFMAPE2C7A0185410",
                            "enginenumber": "F000010",
                            "natureofuse": "02",
                            "registrationdate": "20170101",
                            "displacement": "2.0L",
                            "color": "超音速钛银色",
                            "longitude": "116.30718",
                            "latitude": "39.98226",
                            "carstatus": "02",
                            "creatuser": "13000000001",
                            "creattime": 1547196960000,
                            "updateuser": "13000000001",
                            "updatetime": 1547436120000
                        }, {
                            "id": "41b83b4fca5541f18e02632b34825710",
                            "carid": "CAR_010",
                            "platenumber": "京A00010",
                            "brandmodelnumber": "ES200x",
                            "vehicletype": "小型普通客车",
                            "vin": "LFMAPE2C7A0185410",
                            "enginenumber": "F000010",
                            "natureofuse": "02",
                            "registrationdate": "20170101",
                            "displacement": "2.0L",
                            "color": "超音速钛银色",
                            "longitude": "116.30718",
                            "latitude": "39.98226",
                            "carstatus": "02",
                            "creatuser": "13000000001",
                            "creattime": 1547196960000,
                            "updateuser": "13000000001",
                            "updatetime": 1547436120000
                        }, {
                            "id": "41b83b4fca5541f18e02632b34825710",
                            "carid": "CAR_010",
                            "platenumber": "京A00010",
                            "brandmodelnumber": "ES200x",
                            "vehicletype": "小型普通客车",
                            "vin": "LFMAPE2C7A0185410",
                            "enginenumber": "F000010",
                            "natureofuse": "02",
                            "registrationdate": "20170101",
                            "displacement": "2.0L",
                            "color": "超音速钛银色",
                            "longitude": "116.30718",
                            "latitude": "39.98226",
                            "carstatus": "02",
                            "creatuser": "13000000001",
                            "creattime": 1547196960000,
                            "updateuser": "13000000001",
                            "updatetime": 1547436120000
                        }, {
                            "id": "41b83b4fca5541f18e02632b34825710",
                            "carid": "CAR_010",
                            "platenumber": "京A00010",
                            "brandmodelnumber": "ES200x",
                            "vehicletype": "小型普通客车",
                            "vin": "LFMAPE2C7A0185410",
                            "enginenumber": "F000010",
                            "natureofuse": "02",
                            "registrationdate": "20170101",
                            "displacement": "2.0L",
                            "color": "超音速钛银色",
                            "longitude": "116.30718",
                            "latitude": "39.98226",
                            "carstatus": "02",
                            "creatuser": "13000000001",
                            "creattime": 1547196960000,
                            "updateuser": "13000000001",
                            "updatetime": 1547436120000
                        }, {
                            "id": "41b83b4fca5541f18e02632b34825710",
                            "carid": "CAR_010",
                            "platenumber": "京A00010",
                            "brandmodelnumber": "ES200x",
                            "vehicletype": "小型普通客车",
                            "vin": "LFMAPE2C7A0185410",
                            "enginenumber": "F000010",
                            "natureofuse": "02",
                            "registrationdate": "20170101",
                            "displacement": "2.0L",
                            "color": "超音速钛银色",
                            "longitude": "116.30718",
                            "latitude": "39.98226",
                            "carstatus": "02",
                            "creatuser": "13000000001",
                            "creattime": 1547196960000,
                            "updateuser": "13000000001",
                            "updatetime": 1547436120000
                        }, {
                            "id": "41b83b4fca5541f18e02632b34825710",
                            "carid": "CAR_010",
                            "platenumber": "京A00010",
                            "brandmodelnumber": "ES200x",
                            "vehicletype": "小型普通客车",
                            "vin": "LFMAPE2C7A0185410",
                            "enginenumber": "F000010",
                            "natureofuse": "02",
                            "registrationdate": "20170101",
                            "displacement": "2.0L",
                            "color": "超音速钛银色",
                            "longitude": "116.30718",
                            "latitude": "39.98226",
                            "carstatus": "02",
                            "creatuser": "13000000001",
                            "creattime": 1547196960000,
                            "updateuser": "13000000001",
                            "updatetime": 1547436120000
                        }, {
                            "id": "41b83b4fca5541f18e02632b34825710",
                            "carid": "CAR_010",
                            "platenumber": "京A00010",
                            "brandmodelnumber": "ES200x",
                            "vehicletype": "小型普通客车",
                            "vin": "LFMAPE2C7A0185410",
                            "enginenumber": "F000010",
                            "natureofuse": "02",
                            "registrationdate": "20170101",
                            "displacement": "2.0L",
                            "color": "超音速钛银色",
                            "longitude": "116.30718",
                            "latitude": "39.98226",
                            "carstatus": "02",
                            "creatuser": "13000000001",
                            "creattime": 1547196960000,
                            "updateuser": "13000000001",
                            "updatetime": 1547436120000
                        }, {
                            "id": "41b83b4fca5541f18e02632b34825710",
                            "carid": "CAR_010",
                            "platenumber": "京A00010",
                            "brandmodelnumber": "ES200x",
                            "vehicletype": "小型普通客车",
                            "vin": "LFMAPE2C7A0185410",
                            "enginenumber": "F000010",
                            "natureofuse": "02",
                            "registrationdate": "20170101",
                            "displacement": "2.0L",
                            "color": "超音速钛银色",
                            "longitude": "116.30718",
                            "latitude": "39.98226",
                            "carstatus": "02",
                            "creatuser": "13000000001",
                            "creattime": 1547196960000,
                            "updateuser": "13000000001",
                            "updatetime": 1547436120000
                        }, {
                            "id": "41b83b4fca5541f18e02632b34825710",
                            "carid": "CAR_010",
                            "platenumber": "京A00010",
                            "brandmodelnumber": "ES200x",
                            "vehicletype": "小型普通客车",
                            "vin": "LFMAPE2C7A0185410",
                            "enginenumber": "F000010",
                            "natureofuse": "02",
                            "registrationdate": "20170101",
                            "displacement": "2.0L",
                            "color": "超音速钛银色",
                            "longitude": "116.30718",
                            "latitude": "39.98226",
                            "carstatus": "02",
                            "creatuser": "13000000001",
                            "creattime": 1547196960000,
                            "updateuser": "13000000001",
                            "updatetime": 1547436120000
                        }, {
                            "id": "41b83b4fca5541f18e02632b34825710",
                            "carid": "CAR_010",
                            "platenumber": "京A00010",
                            "brandmodelnumber": "ES200x",
                            "vehicletype": "小型普通客车",
                            "vin": "LFMAPE2C7A0185410",
                            "enginenumber": "F000010",
                            "natureofuse": "02",
                            "registrationdate": "20170101",
                            "displacement": "2.0L",
                            "color": "超音速钛银色",
                            "longitude": "116.30718",
                            "latitude": "39.98226",
                            "carstatus": "02",
                            "creatuser": "13000000001",
                            "creattime": 1547196960000,
                            "updateuser": "13000000001",
                            "updatetime": 1547436120000
                        }, {
                            "id": "41b83b4fca5541f18e02632b34825710",
                            "carid": "CAR_010",
                            "platenumber": "京A00010",
                            "brandmodelnumber": "ES200x",
                            "vehicletype": "小型普通客车",
                            "vin": "LFMAPE2C7A0185410",
                            "enginenumber": "F000010",
                            "natureofuse": "02",
                            "registrationdate": "20170101",
                            "displacement": "2.0L",
                            "color": "超音速钛银色",
                            "longitude": "116.30718",
                            "latitude": "39.98226",
                            "carstatus": "02",
                            "creatuser": "13000000001",
                            "creattime": 1547196960000,
                            "updateuser": "13000000001",
                            "updatetime": 1547436120000
                        }, {
                            "id": "41b83b4fca5541f18e02632b34825710",
                            "carid": "CAR_010",
                            "platenumber": "京A00010",
                            "brandmodelnumber": "ES200x",
                            "vehicletype": "小型普通客车",
                            "vin": "LFMAPE2C7A0185410",
                            "enginenumber": "F000010",
                            "natureofuse": "02",
                            "registrationdate": "20170101",
                            "displacement": "2.0L",
                            "color": "超音速钛银色",
                            "longitude": "116.30718",
                            "latitude": "39.98226",
                            "carstatus": "02",
                            "creatuser": "13000000001",
                            "creattime": 1547196960000,
                            "updateuser": "13000000001",
                            "updatetime": 1547436120000
                        }, {
                            "id": "41b83b4fca5541f18e02632b34825710",
                            "carid": "CAR_010",
                            "platenumber": "京A00010",
                            "brandmodelnumber": "ES200x",
                            "vehicletype": "小型普通客车",
                            "vin": "LFMAPE2C7A0185410",
                            "enginenumber": "F000010",
                            "natureofuse": "02",
                            "registrationdate": "20170101",
                            "displacement": "2.0L",
                            "color": "超音速钛银色",
                            "longitude": "116.30718",
                            "latitude": "39.98226",
                            "carstatus": "02",
                            "creatuser": "13000000001",
                            "creattime": 1547196960000,
                            "updateuser": "13000000001",
                            "updatetime": 1547436120000
                        }
                    ]
                }
            }
            apis.resFun(resolve, reject, {
                "MESSAGE": "正常终了",
                "CODE": "011000",
                "SUCCESS": true,
                "JSONResult": {
                    "CarInfoList": response.JSONResult.CarInfoList.slice(currPage - 1, 10)
                }
            });
        });
        return p;
    },
    //获取用车列表接口
    getBorrowCarListByUserId({ UserId, currPage = 1 }) {
        var p = new Promise(function (resolve, reject) {
            const par = { UserId: UserId, currPage: currPage };
            //js_user_register
            window.console.log(par, 'fun:', "js_borrowCar_getBorrowCarListByUserId");
            let response = {
                "MESSAGE": "正常终了",
                "CODE": "011000",
                "SUCCESS": true,
                "JSONResult": {
                    "BorrowCarRecordList": [
                        {
                            "carId": "CAR_001",
                            "fromUserId": "13000000001",
                            "toUserId": "13000000002",
                            "borrowFromTime": 1547709032000,
                            "borrowToTime": 1547723441000,
                            "borrowStatus": "02",
                            "electronicToken": "",
                            "electronicKey": "",
                            "plateNumber": "京A00001",
                            "brandModelNumber": "雷克萨斯ES200x",
                            "vehicleType": "小型普通客车",
                            "vin": "LFMAPE2C7A0185481",
                            "engineNumber": "F000001",
                            "natureOfUse": "01",
                            "registrationDate": "20170101",
                            "longitude": "116.30710",
                            "latitude": "39.98220",
                            "carStatus": "03",
                            "fromNickName": "001",
                            "fromActualName": "",
                            "toNickName": "002",
                            "toActualName": "",
                            "id": "41b83b4fca5541f18e02632b34825710"
                        }
                    ]
                }
            }
            apis.resFun(resolve, reject, response);
        });
        return p;
    },
    //存储 数据到 app
    saveValueToLoacl(params) {
        var p = new Promise(function (resolve, reject) {
            const par = params;
            //js_user_register
            window.console.log(par, 'fun:', "js_app_saveValueToLoacl");
            let response = {
                "MESSAGE": "保存成功",
                "SUCCESS": true
            }
            window.$cache.setUser(JSON.parse(par.user));
            apis.resFun(resolve, reject, response);
        });
        return p;
    },
    //从app 获取数据
    getValueFromLocal(key) {
        var p = new Promise(function (resolve, reject) {
            const par = key;
            window.console.log(par, 'fun:', "js_app_getValueFromLocal");
            let response = {
                "MESSAGE": "读取成功",
                "SUCCESS": true,
                "RESULT": "彭辉"
            }
            response.RESULT = window.$cache.getUser();
            apis.resFun(resolve, reject, response);
        });
        return p;
    },
    //获取好友列表
    getFriendList({ UserId, currPage }) {
        var p = new Promise(function (resolve, reject) {
            const par = { UserId: UserId, currPage: currPage };
            window.console.log(par, 'fun:', "js_friends_getFriendList");
            let response = {
                "MESSAGE": "正常终了",
                "CODE": "011000",
                "SUCCESS": true,
                "JSONResult": {
                    "FriendRelationList": [
                        {
                            "id": "9727be85916a4aebb7b08bae0edfda72",
                            "userid": "13000000004",
                            "u_nickname": "004",
                            "u_actualname": "",
                            "u_gender": "",
                            "u_phonenumber": "13000000004",
                            "u_avatarurl": "",
                            "friendUserid": "13000000001",
                            "uf_nickname": "001",
                            "uf_actualname": "",
                            "uf_gender": "",
                            "uf_phonenumber": "13000000001",
                            "uf_avatarurl": "",
                            "status": "1"
                        },
                        {
                            "id": "ec32616bb8e64feda2fc81e770be8609",
                            "userid": "13000000001",
                            "u_nickname": "001",
                            "u_actualname": "",
                            "u_gender": "",
                            "u_phonenumber": "13000000001",
                            "u_avatarurl": "",
                            "friendUserid": "13000000003",
                            "uf_nickname": "003",
                            "uf_actualname": "",
                            "uf_gender": "",
                            "uf_phonenumber": "13000000003",
                            "uf_avatarurl": "",
                            "status": "2"
                        },
                        {
                            "id": "0800434e3d654281b3c915d4332ac3dc",
                            "userid": "13000000001",
                            "u_nickname": "001",
                            "u_actualname": "",
                            "u_gender": "",
                            "u_phonenumber": "13000000001",
                            "u_avatarurl": "",
                            "friendUserid": "13000000002",
                            "uf_nickname": "002",
                            "uf_actualname": "",
                            "uf_gender": "",
                            "uf_phonenumber": "13000000002",
                            "uf_avatarurl": "",
                            "status": "2"
                        }
                    ]
                }
            }
            response.RESULT = window.$cache.getUser();
            apis.resFun(resolve, reject, response);
        });
        return p;
    },
    //跳转到车辆详情
    jumpToCarDetail({ carId }) {
        //唤醒loadding
        window.showLoading();
        var p = new Promise(function (resolve, reject) {
            const par = { carId: carId };
            window.console.log(par, 'fun:', "js_app_jumpToCarDetail");
            let response = {
                "MESSAGE": "调用成功",
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