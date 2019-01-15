<template>
  <div class="login y-body">
    <app-head></app-head>
    <form class="login-form">
      <div class="login-form-input">
        <input type="text" name="phone" :placeholder="placeholder.phone">
      </div>
      <div class="login-form-input password">
        <input type="password" name="pwd" :placeholder="placeholder.pwd">
      </div>
      <div class="login-form-button">
        <button>登录</button>
      </div>
      <p class="login-form-register">
        还没有账号？
        <a href="#">去注册</a>
      </p>
    </form>
  </div>
</template>

<script>
import appHead from "./head";
import { login as loginholder } from "@dist/placeholder";
export default {
  components: {
    appHead
  },
  data() {
    return {
      placeholder: loginholder
    };
  }
};
</script>

<style lang="less" scoped>
</style>

