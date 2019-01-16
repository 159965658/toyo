<template>
  <div class="main-body">
    <div class="footer-height">
      <router-view/>
    </div>
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
  background: #fafbfc; 
  display: flex;
  height: 100%;
  flex-direction: column; 
}
</style>

