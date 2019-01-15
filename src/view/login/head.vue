<template>
  <div class="login-header">
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
  </div>
</template>

<script>
import appHr from "@c/app-hr";
export default {
    components:{
        appHr,
    }
};
</script>

<style lang="less" scoped>
.login-header {
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
}
</style>
