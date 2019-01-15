<template>
  <div class="main-body">
    <router-view/>
    <vehicle-footer></vehicle-footer>
  </div>
</template>

<script>
import vehicleFooter from "@c/vehicle-footer";
export default {
  components: {
    vehicleFooter
  }
};
</script>

<style lang="less" scoped>
.main-body {
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  height: ceil(1344px-89px);
}
</style>

