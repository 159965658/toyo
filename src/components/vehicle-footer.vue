<template>
  <ul class="vehicle-footer">
    <router-link to="/main/vehicle" tag="li" active-class="active">
      <i class="my-icon icon-footer icon-vehicle"></i> 车辆
    </router-link>
    <router-link to="/main/vehicleuse" tag="li" active-class="active">
      <i class="my-icon icon-footer icon-use"></i>用车
    </router-link>
    <router-link to="/main/goodfriend" tag="li" active-class="active">
      <i class="my-icon icon-footer icon-goodfriend"></i>好友
    </router-link>
    <li>
      <i class="my-icon icon-footer icon-my"></i>我的
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.vehicle-footer {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 89px;
  background: #383b41;
  font-size: 18px;
  color: #fff;
  > .active { 
    color: @defaultColor;
    // color: #090909;
  }
  > li {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>

