<template>
  <div class="vehicle-list-body-status" :style="styleArr">
    <span v-if="status == 1" class="free">空闲中</span>
    <span v-else-if="status == 2" class="busy">使用中</span>
    <span v-else class="reserve">有预定</span>
  </div>
</template>

<script> 
export default {
  props: {
    status: {
      type: Number,
      default: 0
    },
    styleArr: {
      type: Object
    }
  }
};
</script>

<style lang="less" scoped>

</style>
