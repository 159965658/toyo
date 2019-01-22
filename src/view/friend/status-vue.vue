<template>
  <div class="vehicle-list-body-status">
    <span v-if="status == '1'" class="busy">未同意</span>
    <!-- <span v-if="status == 2" class="reserve">已同意</span> -->
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String
    }
  }
};
</script>

<style lang="less" scoped>
.vehicle-list-body-status {
  margin: 0 !important;
}
</style>
