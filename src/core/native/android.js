

export default {
    //发送验证码
    doSendMessage(phoneNumber, { s, f }) {
        window.console.log(phoneNumber);
        //注册验证码回调成功失败函数
        window.doSendMessageSuccess = s;
        window.doSendMessageError = f;
        return {}
    },
}