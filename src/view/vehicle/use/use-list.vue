<template>
  <div class="use-item">
    <div class="use-item-con">
      <p class="name">雷克萨斯 轿车</p>
      <p class="endtime">
        <i class="my-icon icon-endtime"></i>结束用车：18/12/30 20:00
      </p>
      <p class="idcode">
        <i class="my-icon icon-idcode"></i>车牌号：京A·2396V
      </p>
      <p class="useperson">
        <i class="my-icon icon-useperson"></i>借车人：龚佳
      </p>
    </div>
    <div class="use-item-car">
      <div class="img">
        <img
          src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1552723279,181900407&fm=26&gp=0.jpg"
          alt
        >
      </div>
      <status-vue :status="item.status" :styleArr="{width:'2.4rem'}"></status-vue>
    </div>
  </div>
</template>

<script>
import statusVue from "@c/status-vue";
export default {
  props: ["item"],
  components: {
    statusVue
  }
};
</script>

<style lang="less" scoped>
.use-item {
  background: #ffffff;
  border-top: 1px solid #cbcdd0;
  &:last-child {
    border-bottom: 1px solid #cbcdd0;
  }
  height: 224px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
  &-con {
    width: 470px;
    font-size: 24px;
    color: #383b41;
    > .name {
      font-size: 32px;
      color: #414246;
      letter-spacing: 0;
      line-height: 44px;
    }
    > .endtime,
    .idcode,
    .useperson {
      line-height: 33px;
      > i {
        margin-right: 2px;
      }
    }
  }
  &-car {
    > .img {
      width: 160px;
      height: 94px;
      padding: 10px;
      margin-bottom: 4px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    > .status {
      width: 180px;
    }
  }
}
</style>

