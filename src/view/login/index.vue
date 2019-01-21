<template>
  <div class="login y-body">
    <app-head></app-head>
    <div class="login-form">
      <div class="login-form-input phone">
        <!-- <i class="my-icon login-icon"></i> -->
        <input type="text" name="phone" v-model="phone" :placeholder="placeholder.phone">
      </div>
      <div class="login-form-input password">
        <input type="password" name="pwd" v-model="pwd" :placeholder="placeholder.pwd">
      </div>
      <div class="login-form-button">
        <button @click="login">登录</button>
      </div>
      <p class="login-form-register">还没有账号？
        <router-link to="/register">去注册</router-link>
      </p>
    </div>
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
      placeholder: loginholder,
      phone: "",
      pwd: ""
    };
  },
  methods: {
    login() {
      const phone = this.phone,
        pwd = this.pwd,
        pl = this.placeholder;
      //手机号
      if (!phone) {
        this.$toast(pl.phone);
        return;
      }
      if (!window.isPoneAvailable(phone)) {
        this.$toast(pl.validPhone);
        return;
      }
      //密码
      if (!pwd) {
        this.$toast(pl.pwd);
        return;
      }

      // this.$router.replace("/main/vehicle");
    }
  }
};
</script>

<style lang="less" scoped>
.login-header {
  margin: 0 auto;
}
</style>

