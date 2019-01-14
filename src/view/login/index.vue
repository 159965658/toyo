<template>
  <div class="login">
    <div class="logo">
      <img src="../../assets/img/logo.jpg" alt class="logo-img">
      <app-hr></app-hr>
      <p class="logo-text">
        <span>智</span>
        <span>能</span>
        <span>钥</span>
        <span>匙</span>
      </p>
    </div>
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
import appHr from "@c/app-hr";
export default {
  components: {
    appHr
  },
  data() {
    return {
      placeholder: {
        phone: "请输入您常用的手机号",
        pwd: "请输入密码"
      }
    };
  }
};
</script>

<style lang="less" scoped>
.login {
  background-color: #2a2838;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  .logo {
    margin-top: 218px;
    width: 380px;
    &-img {
      width: 100%;
    }
    &-text {
      width: 310px;
      display: flex;
      justify-content: space-between;
      color: @defaultColor;
      font-size: 40px;
      margin-top: 12px;
    }
  }
  &-form {
    height: 440px;
    margin-bottom: 84px;

    color: @defaultTextColor;
    font-size: 28px;
    &-input {
      > input {
        width: 630px;
        height: 88px;
        outline: none;
        border: none;
        border-radius: 5px;
        padding-left: 30px;

        color: @defaultTextColor;
        background-color: rgba(248, 248, 248, 10%);
      }
    }
    > .password {
      margin-top: 30px;
      margin-bottom: 60px;
    }
    &-button {
      height: 88px;
      > button {
        outline: none;
        background: linear-gradient(#f5e9c8, #e7ce97);
        color: #52320d;
        width: 100%;
        text-indent: 10px;
        letter-spacing: 10px;
        height: 100%;
      }
    }
    &-register {
      margin-top: 46px;
      text-align: center;
      a {
        color: @defaultColor;
      }
    }
  }
}
</style>

