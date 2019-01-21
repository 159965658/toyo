export default {
    //发送验证码
    doSendMessage({ phoneNumber }, { s, f }) {
        window.console.log(phoneNumber);
        //注册验证码回调成功失败函数
        window.doSendMessageSuccess = s;
        window.doSendMessageError = f;
        setTimeout(() => {
            const res = JSON.parse(JSON.stringify({
                "MESSAGE": "正常终了",
                "CODE": "011000",
                "SUCCESS": true,
                "JSONResult": {
                    "verifyCode": "185849",
                    "createTime": 1547196991411
                }
            }))
            window.doSendMessageSuccess(res)
        }, 2000);
    },
}