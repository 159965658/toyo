<template>
  <div>
    <van-popup
      v-model="isShow"
      @click-overlay="clickOverlay"
      :close-on-click-overlay="isClickOverlay"
    ></van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      isClickOverlay: false
    };
  },
  methods: {
    clickOverlay() {
      this.$closeFull();
    }
  }
};
</script>

<style>
/* .van-overlay {
  opacity: 0.48;
  background: #000000;
} */
</style>
