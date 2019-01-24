<template>
  <div class="f-fun z-f">
    <div class="po">
      <span class="triangle-up"></span>
      <div class="f-fun-body">
        <div @click="searchFriend">
          <i class="my-icon icon-search"></i> 搜索好友
        </div>
        <div @click="qrCode">
          <i class="my-icon icon-qrcode"></i>扫描二维码
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    qrCode() {
      this.$emit("qrCodeClick");
    },
    searchFriend() {
      this.$emit("search");
    }
  }
};
</script>

<style lang="less" scoped>
.f-fun {
  .po {
    position: relative;
  }
  position: fixed;
  top: 70px;
  right: 20px;
  &-body {
    border-radius: 10px;
    height: ceil(96px * 2);
    width: 278px;
    background-color: #fff;
    > div {
      //   width: 300px;
      text-align: left;
      line-height: 96px;
      height: 96px;
      margin-left: 32px;
      > i {
        margin-right: 20px;
      }
    }
  }
}
.triangle-up {
  width: 0;
  height: 0;
  position: absolute;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 30px solid #fff;
  top: -15px;
  right: 2px;
}
</style>
