<template>
  <div class="app-my">
    <app-header :title="title" :fixed="fixed"></app-header>
    <div class="app-mine"></div>
    <div class="app-cardcase">
      <img src="../../assets/icon_pwd.png" alt>
      <div class="app-cardcase-p">
        <p class="name">董晨晨</p>
        <p class="phone">15099703555</p>
      </div>
      <!-- <button><i class="my-icon icon-edit"></button> -->
      <button>修改</button>
    </div>
    <div class="mine-list">
      <div class="mine-list-item">
        <i class="my-icon icon-mycode"></i> 我的二维码
      </div>
      <div class="mine-list-item">
        <i class="my-icon icon-set"></i> 设置
      </div>
      <div class="mine-list-item">
        <i class="my-icon icon-out"></i> 登出
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from "@c/vehicle-header";
export default {
  components: {
    appHeader
  },
  data() {
    return {
      title: "我的",
      fixed: false
    };
  }
};
</script>

<style lang="less" scoped>
.app-my {
  position: relative;
}
.app-mine {
  height: 128px;
  background-color: #383b41;
}
.app-cardcase {
  height: 240px;
  width: 690px;
  position: absolute;
  top: 118px;
  left: 30px;
  background-color: #ffffff;
  background: #ffffff;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  display: flex;
  align-items: center;
  > img {
    border: 1px solid #c1c7d0;
    border-radius: 5px;
    margin-left: 30px;
    width: 120px;
    height: 120px;
  }
  &-p {
    margin-left: 20px;
    > .name {
      font-size: 32px;
      color: #000000;
    }
    > .phone {
      margin-top: 12.1px;
      font-size: 28px;
      color: #7f8389;
      text-align: center;
    }
  }
  > button {
    margin-left: 204px;
    width: 138px;
    height: 66px;
    border-radius: 48px 0px 0px 48px !important;
    background-image: linear-gradient(-180deg, #f5e9c8 0%, #e7ce97 100%);
    font-family: PingFangSC-Regular;
    font-size: 28px;
    color: #ca8b00;
    text-align: center;
  }
}
.mine-list {
  height: 301px;
  background-color: #ffffff;
  margin-top: 171.5px;
  display: flex;
  flex-direction: column;
  &-item {
    height: 100px;
    border-bottom: 1px solid #e3e3e3;
    font-size: 30px;
    color: #000000;
    padding-left: 60px;
    display: flex;
    align-items: center;
    > i {
      margin-right: 21px;
    }
  }
}
</style>

