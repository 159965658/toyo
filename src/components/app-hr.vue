<template>
  <div class="app-hr" v-bind:style="hrStyle"></div>
</template>

<script>
export default {
  props: {
    $color: {
      type: String,
      default: "#707070"
    },
    $width: {
      type: String,
      default: "100%"
    },
    $height: {
      type: String,
      default: "1px"
    }
  },
  data() {
    return {
      hrStyle: {
        'background-color': this.$color,
        width: this.$width,
        height: this.$height
      }
    };
  }
};
</script>

<style lang="less" scoped>
</style>

