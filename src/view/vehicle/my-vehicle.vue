<template>
  <div class="my-vehicle">
    <vehicle-list v-for="item in vehicleArr" :key="item.id" :item="item"></vehicle-list>
  </div>
</template>

<script>
import vehicleList from "./vehicle-list.vue";
export default {
  components: {
    vehicleList
  },
  data() {
    return {
      vehicleArr: []
    };
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.vehicleArr.push({ id: i++, status: i % 3 });
    }
  }
};
</script>

<style lang="less" scoped>
.my-vehicle {
  width: 100%;
}
</style>

