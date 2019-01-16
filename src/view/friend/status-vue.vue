<template>
  <div class="vehicle-list-body-status">
    <span v-if="status == 1" class="busy">借入中</span>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: Number,  
      default: 0
    }
  }
};
</script>

<style lang="less" scoped>
</style>
