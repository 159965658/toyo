<template>
  <div class="vehicle-list-body-status">
    <span v-if="status == 1" class="free">空闲中</span>
    <span v-else-if="status == 2" class="busy">借出中</span>
    <span v-else class="reserve">借入中</span>
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
