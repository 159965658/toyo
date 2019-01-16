<template>
  <div class="register y-body">
    <app-head></app-head>
    <div class="login-form">
      <div class="login-form-input">
        <input type="text" name="phone" :placeholder="placeholder.phone">
      </div>
      <div class="login-form-input">
        <input type="password" name="pwd" :placeholder="placeholder.setPwd">
      </div>
      <div class="login-form-input">
        <input type="password" name="pwd" :placeholder="placeholder.subPwd">
      </div>
      <div class="verification" :class="{active:yanClick}">
        <input
          type="text"
          @focus="yanClick = true"
          @blur="yanClick = false"
          :placeholder="placeholder.verification"
        >
        <span>获取验证码</span>
      </div>
      <p class="error" v-show="error">
        <i class="my-icon icon-error"></i>
        <span>报错提示</span> 
      </p>
      <div class="login-form-button">
        <button>注册</button>
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
      error: true
    };
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
    background-color: @deaultInputBgColor;
    padding-left: 60px;
    > input {
      width: 420px;
      height: 88px;
      background-color: transparent;
      margin-left: 0px;
      // text-align: left;
    }
    > span {
      padding-right: 40px;
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

