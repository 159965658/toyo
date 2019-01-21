<template>
  <div class="register y-body">
    <app-head></app-head>
    <div class="login-form">
      <div class="login-form-input phone">
        <input type="text" name="phone" v-model="phone" :placeholder="placeholder.phone">
      </div>
      <div class="login-form-input password">
        <input type="password" name="pwd" v-model="setPwd" :placeholder="placeholder.setPwd">
      </div>
      <div class="login-form-input subpwd">
        <input type="password" name="pwd" v-model="subPwd" :placeholder="placeholder.subPwd">
      </div>
      <div class="verification" :class="{active:yanClick}">
        <input
          type="text"
          @focus="yanClick = true"
          @blur="yanClick = false"
          :placeholder="placeholder.verification"
          v-model="verification"
        >
        <span @click="getCode()">{{codeMsg}}</span>
      </div>
      <p class="error" v-show="msg != ''">
        <i class="my-icon icon-error"></i>
        <span>{{msg}}</span>
      </p>
      <div class="login-form-button">
        <button @click="register()">注册</button>
      </div>

      <p class="reg-bottom">服务条款</p>
    </div>
  </div>
</template>

<script>
import appHead from "./head";
import { register as regHolder } from "@dist/placeholder";
export default {
  components: {
    appHead
  },
  data() {
    return {
      placeholder: regHolder,
      yanClick: false,
      IsCodeMsg: false,
      setTiem: null,
      verification: "",
      phone: "",
      setPwd: "",
      subPwd: "",
      msg: "",
      codeMsg: "获取验证码",
      settimeInt: 60,
      resCode: ""
    };
  },
  methods: {
    getCode() {
      if (!this.phone) {
        this.msg = this.placeholder.phone;
        return;
      }
      if (!window.isPoneAvailable(this.phone)) {
        this.msg = this.placeholder.validPhone;
        return;
      }
      if (!this.IsCodeMsg) {
        //发送验证码
        this.IsCodeMsg = true;
        this.codeMsg = `发送成功(${this.settimeInt})`;
        //发送验证码
        this.getSmsCode();
        this.setTiem = setInterval(() => {
          if (this.settimeInt > 0) {
            this.settimeInt--;
            this.codeMsg = `发送成功(${this.settimeInt})`;
          } else {
            this.IsCodeMsg = false;
            this.codeMsg = "重新获取验证码";
            this.settimeInt = 60;
          }
        }, 1000);
      }
    },
    getSmsCode() {
      this.$native.getSmsCode({ phoneNumber: this.phone }).then(p => {
        this.resCode = p.JSONResult.verifyCode;
      });
    },
    register() {
      const placeholder = this.placeholder,
        code = this.verification,
        phone = this.phone,
        setPwd = this.setPwd,
        subPwd = this.subPwd;
      if (!phone) {
        this.msg = placeholder.phone;
      } else if (!window.isPoneAvailable(phone)) {
        this.msg = placeholder.validPhone;
      } else if (!setPwd) {
        this.msg = "请输入密码";
      } else if (!subPwd) {
        this.msg = "请输入确认密码";
      } else if (subPwd != setPwd) {
        this.msg = "两次密码输入不一致";
      } else if (!code) {
        this.msg = "请输入验证码";
      } else if (!this.resCode) {
        this.msg = "请先发送验证码";
      } else if (this.resCode != code) {
        this.msg = "输入验证码不正确";
      } else {
        this.msg = "";
        this.registerFun();
      }
    },
    registerFun() {
      this.$native
        .register({
          phoneNumber: this.phone,
          password: this.setPwd,
          code: this.verification
        })
        .then(() => {
          this.$toast.success("注册成功");
          setTimeout(() => {
            this.$router.replace("/login");
          }, 1);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.register {
  .login-header {
    margin: 0 auto;
  }
  .active {
    border: 1px solid @defaultColor !important;
  }
  .verification {
    border: 1px solid transparent;
    display: flex;
    justify-content: start;
    align-items: center;
    // background-color: @deaultInputBgColor;
    padding-left: 80px;
    background-color: #2f2f2f;
    > input {
      width: 420px;
      height: 88px;
      background-color: transparent;
      margin-left: 0px;
      color: #fff !important;
      // text-align: left;
    }
    > span {
      // padding-right: 40px;
      color: @defaultColor;
    }
  }
  .login-form-button {
    margin-top: 55px;
  }
  .reg-bottom {
    color: @defaultColor;
    text-align: center;
    margin-top: 34px;
  }
  .error {
    display: flex;
    align-items: center;
    margin-top: 30px;
  }
}
</style>

