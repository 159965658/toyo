<template>
  <div class="his-use">
    <app-header :title="title" :leftArrow="leftArrow"></app-header>
    <div class="had">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <div class="itme-con">
            <div class="item-con-body">
              <div class="img"></div>
            </div>
            <div class="item-con-car">
              <p>型号: NX 300H | 排量: 2.5L | 颜色: 银灰</p>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
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
      title: "历史用车",
      leftArrow: true
    };
  }
};
</script>

<style lang="less">
.his-use {
  .van-swipe {
    .itme-con {
      color: #a5adbb;
      .item-con-body {
        > .img {
          width: 317.5px;
          height: 200px;
        }
      }
      .item-con-car {
        p {
          font-size: 24px;
          color: #a5adbb;
          line-height: 35px;
        }
      }
    }
  }
}
</style>
