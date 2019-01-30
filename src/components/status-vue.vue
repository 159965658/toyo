<template>
  <div class="vehicle-list-body-status">
    <span v-if="status == '00'" class="free">订单已关闭</span>
    <span v-else-if="status == '01'" class="free">预约中</span>
    <span v-else-if="status == '02'" class="busy">用车中</span>
    <span v-else-if="status == '03'" class="reserve">车辆已归还</span>
    <span v-else-if="status == '04'" class="reserve">车辆故障</span>
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
