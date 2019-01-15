<template>
  <div class="vehicle-list">
    <div class="vehicle-list-body">
      <div class="vehicle-list-body-img">
        <img src="../../assets/img/ES.png" alt srcset>
      </div>
      <div class="vehicle-list-body-con">
        <p class="name">{{item.id}}</p>
        <p class="idcode">京NB1234</p>
      </div>
      <div class="vehicle-list-body-status">
        <span v-if="item.status == 1" class="free">空闲中</span>
        <span v-else-if="item.status == 2" class="busy">使用中</span>
        <span v-else>有预定</span>
      </div>
      <div class="vehicle-list-body-next">
        <i class="my-icon icon-next"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style lang="less" scoped>
.vehicle-list {
  height: 180px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  &-body {
    height: 120px;
    width: 690px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &-con,
    &-img {
      height: 120px;
    }
    &-img {
      width: 120px;
      border: 1px solid #d8d8d8;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      > img {
        width: 107px;

        height: 41px;
      }
    }
    &-con {
      margin-left: 20px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 386px;
      > .name {
        font-size: 34px;
        color: #222222;
      }
      > .idcode {
        font-size: 28px;
        color: #7b7b7b;
        margin-top: 8px;
      }
    }
    &-status {
      > span {
        display: block;
        width: 120px;
        height: 44px;
        font-size: 28px;
        border-radius: 22px;
        text-align: center;
        background-color: #fff4e6;
        color: #fdc27a;
      }
      > .free {
        background-color: #def7f7;
        color: #40d1d2;
      }
      > .busy {
        background-color: #ffe2e7;
        color: #ff5f77;
      }
    }

    &-next {
      margin-left: 23px;
    }
  }
}
</style>

