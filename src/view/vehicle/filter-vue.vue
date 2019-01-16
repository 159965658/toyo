<template>
  <div class="filter">
    <ul>
      <li>
        借出车辆
        <i class="my-icon icon-down"></i>
        <i class="my-icon icon-shuxian"></i>
      </li>
      <li>
        用车中
        <i class="my-icon icon-down"></i>
        <i class="my-icon icon-shuxian"></i>
      </li>
      <li>
        雷克萨斯轿车
        <i class="my-icon icon-down"></i>
        <i class="my-icon icon-shuxian"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.filter {
  height: 88px;
  position: fixed;
  top: 1.17333rem;
  left: 0px;
  width: 100%;
  > ul {
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    li {
      font-size: 32px;
      flex: 1 auto;
      text-align: center;
    }
  }
}
</style>
