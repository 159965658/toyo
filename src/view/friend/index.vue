<template>
  <div class="friend" ref="funVue">
    <app-header :title="title" :clickRight="clickRight"></app-header>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <friend-item v-for="item in friendArr" :key="item.id" :item="item"></friend-item>
      </van-list>
    </van-pull-refresh>
    <fun-vue v-show="isfunVue"></fun-vue>
  </div>
</template>

<script>
import appHeader from "@c/vehicle-header";
import friendItem from "./friend-item";
import funVue from "./function-vue";
export default {
  components: {
    appHeader,
    friendItem,
    funVue
  },
  data() {
    return {
      title: "好友",
      friendArr: [],
      isLoading: false,
      loading: false,
      finished: false,
      isfunVue: false,
      clickRight: this.clickRightFun,
      par: {
        pageIndex: 0,
        pageSize: 10
      }
    };
  },
  beforeDestroy() {
    window.$vm.$off(this.$route.meta.overlay, this.closeFull);
  },
  mounted() {
    setTimeout(() => {
      this.addChecked(); //开启监控事件
    }, 1);
  },
  methods: {
    addChecked() {
      //监控全局事件
      window.$vm.$on(this.$route.meta.overlay, this.closeFull);
    },
    closeFull() {
      //关闭
      this.isfunVue = false;
    },
    clickRightFun() {
      //开启 检测
      this.$toastFull();
      this.isfunVue = true;
    },
    setfriArr() {
      let count = 0,
        par = this.par,
        i = this.friendArr.length;
      if (par.pageIndex == 1) {
        this.friendArr = [];
        i = 0;
      }
      count = par.pageIndex * par.pageSize;
      for (; i < count; i++) {
        this.friendArr.push({ id: i, status: i % 3 });
      }
    },
    onRefresh() {
      setTimeout(() => {
        this.par.pageIndex = 1;
        this.setfriArr();
        this.isLoading = false;
      }, 500);
    },
    onLoad() {
      setTimeout(() => {
        this.par.pageIndex++;
        this.setfriArr();
        // 加载状态结束
        this.loading = false;
        if (this.par.pageIndex > 4) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>
<style lang="less" scoped>
</style>
