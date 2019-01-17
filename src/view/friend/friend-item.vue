<template>
  <div class="friend-item">
    <div class="friend-item-info">
      <img src="../../assets/img/ES.png" alt srcset>
      <div class="friend-item-info-p">
        <p class="name">许威</p>
        <p class="phone">15000910314</p>
      </div>
    </div>
    <status-vue :status="item.status"></status-vue>
  </div>
</template>

<script>
import statusVue from "./status-vue";
export default {
  props: ["item"],
  components: {
    statusVue
  }
};
</script>
<style lang="less" scoped>
.friend-item {
  background: #ffffff;
  border-top: 1px solid #cbcdd0;
  height: 148px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  &:last-child {
    border-bottom: 1px solid #cbcdd0;
  }
  &-info {
    display: flex;
    align-items: center;
    > img {
      border: 1px solid rgba(0, 0, 0, 0.15);
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.13);
      border-radius: 4px;
      width: 88px;
      height: 88px;
      margin-right: 15px;
    }
    &-p {
      > .name {
        font-size: 32px;
        color: #414246;
        line-height: 45px;
      }
      > .phone {
        font-size: 28px;
        color: #7f8389;
        text-align: center;
      }
    }
  }
} 
</style>

