<template>
  <div class="vehicle-list van-hairline--bottom" @click="hrefCar(item)">
    <div class="vehicle-list-body">
      <div class="vehicle-list-body-img">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547745317713&di=d0658cdb8ead6d922a0bfc1195f4b183&imgtype=0&src=http%3A%2F%2Fi2.hexunimg.cn%2F2015-11-04%2F180327880.jpg"
          alt
          srcset
        >
      </div>
      <div class="vehicle-list-body-con">
        <p class="name">{{item.carid}}</p>
        <p class="idcode">车牌：{{item.platenumber}}</p>
      </div>
      <status-vue :status="item.carstatus"></status-vue>
      <!-- <div class="vehicle-list-body-next">
        <i class="my-icon icon-next"></i>
      </div>-->
    </div>
  </div>
</template>

<script>
import statusVue from "@c/status-vue";
export default {
  props: ["item"],
  components: {
    statusVue
  },
  methods: {
    hrefCar(item) {
      //跳转车辆详情
      this.$native.jumpToCarDetail({ carId: item.carid }).then(() => {});
    }
  }
};
</script>

<style lang="less" scoped>
.vehicle-list {
  height: 239px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  border-bottom: 1px solid #cbcdd0;
  &-body {
    // height: 239px;
    width: 690px;
    display: flex;
    justify-content: start;
    align-items: center;
    &-img {
      width: 224px;
      height: 140px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    &-con {
      margin-left: 20px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 270px;
      > .name {
        font-size: 36px;
        color: #414246;
      }
      > .idcode {
        font-size: 28px;
        color: #383b41;
        letter-spacing: 1.17px;
      }
    }

    &-next {
      margin-left: 23px;
    }
  }
}
</style>

