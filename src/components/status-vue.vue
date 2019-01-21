<template>
  <div class="vehicle-list-body-status">
    <span v-if="status == '01'" class="free">闲置中</span>
    <span v-if="status == '02'" class="busy">预约外借中</span>
    <span v-if="status == '03'" class="reserve">外借中</span>
    <span v-if="status == '04'" class="free">车辆故障</span>
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
