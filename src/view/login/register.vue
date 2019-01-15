<template>
  <div class="register y-body">
    <app-head></app-head>
    <form class="login-form">
      <div class="login-form-input">
        <input type="text" name="phone" :placeholder="placeholder.phone">
      </div>
      <div class="login-form-input">
        <input type="password" name="pwd" :placeholder="placeholder.setPwd">
      </div>
      <div class="login-form-input">
        <input type="password" name="pwd" :placeholder="placeholder.subPwd">
      </div>
      <div class="verification">
        <input type="text" :placeholder="placeholder.verification">
        <span>发送验证码</span>
      </div>
      <div class="login-form-button">
        <button>注册</button>
      </div>

      <p class="reg-bottom">服务条款</p>
    </form>
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
      placeholder: regHolder
    };
  }
};
</script>

<style lang="less" scoped>
.register {
  .login-header {
    margin: 0 auto;
  }
  .verification {
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: @deaultInputBgColor;
    padding-left: 30px;
    > input {
      width: 400px;
      height: 88px;
      background-color: transparent;
      margin-left: 0px;
      // text-align: left;
    }
    > span {
      padding-right: 40px;
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
}
</style>

