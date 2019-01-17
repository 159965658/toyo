<template>
  <div class="filter">
    <ul>
      <li>
        借出车辆
        <i class="my-icon icon-down"></i>
      </li>
      <li>
        用车中
        <i class="my-icon icon-down"></i>
      </li>
      <li>
        雷克萨斯轿车
        <i class="my-icon icon-down"></i>
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
  background-color: #fbfbfc;
  > ul {
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    li {
      font-size: 32px;
      flex: 1 auto;
      text-align: center;
      font-size: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      > i {
        margin-left: 20px;
        margin-top: 2px;
      }
      &:nth-of-type(even) {
        border-left: 1px solid #d9dde4;
        border-right: 1px solid #d9dde4;
      }
    }
  }
}
</style>
