<template>
  <div class="v-header">
    <van-nav-bar
      :title="title"
      :left-text="leftText"
      :right-text="rightText"
      :left-arrow="leftArrow"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      :fixed="fixed"
      :border="false"
    >
      <van-icon v-if="$route.name=='goodfriend'" name="ellipsis" slot="right"/>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  props: {
    title: {},
    leftText: {},
    leftArrow: { type: Boolean, default: false },
    rightText: {},
    fixed: { type: Boolean, default: true },
    rigthSolt: {},
    clickLeft: {},
    clickRight: {}
  },
  methods: {
    onClickLeft() {
      //   Toast("返回");
      /* eslint-disable */
      // if (this.onClickLeft) {
      //   console.log("left");
      // }
      this.$router.go(-1);
    },
    onClickRight() {
      //   Toast("按钮");
      /* eslint-disable */
      if (this.clickRight) {
        this.clickRight();
        console.log("right");
      }
    }
  }
};
</script>

<style lang="less">
.v-header {
  .van-nav-bar {
    // height: 88px !important;
    // line-height: 88px !important;
    background-color: #383b41 !important;
    .van-nav-bar__title {
      // font-size: 32px !important;
      color: #f4f5f7 !important;
      letter-spacing: 0;
    }
    .van-nav-bar__text {
      // font-size: 28px !important;
      color: #f4f5f7 !important;
      &:active {
        background-color: transparent !important;
      }
    }
  }
}
</style>

