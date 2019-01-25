<template>
  <div class="vehicle-list-body-status">
    <span v-if="status == '01'" class="free">申请中</span>
    <span v-if="status == '02'" class="busy">用车中</span>
    <span v-if="status == '03'" class="reserve">已还车</span>
    <span v-if="status == '04'" class="free">故障中</span>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String
    },
    styleArr: {
      type: Object
    }
  }
};
</script>

<style lang="less" scoped>
</style>
