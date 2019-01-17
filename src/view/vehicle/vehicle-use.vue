<template>
  <div class="v-use">
    <app-header :title="title" :rightText="rightText" :clickRight="clickRight"></app-header>
    <filter-vue></filter-vue>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <use-list v-for="item in useArr" :key="item.id" :item="item"></use-list>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import appHeader from "@c/vehicle-header";
import useList from "./use/use-list";
import filterVue from "./filter-vue";
export default {
  components: {
    appHeader,
    useList,
    filterVue
  },
  data() {
    return {
      title: "用车",
      rightText: "历史用车",
      useArr: [],
      isLoading: false,
      loading: false,
      finished: false,
      par: {
        pageIndex: 0,
        pageSize: 10
      },
      clickRight: this.clickRightFun
    };
  },
  methods: {
    clickRightFun() {
      //历史用车
      this.$router.push('/hisuser')
    },
    setUseArr() {
      let count = 0,
        par = this.par,
        i = this.useArr.length;
      if (par.pageIndex == 1) {
        this.useArr = [];
        i = 0;
      }
      count = par.pageIndex * par.pageSize;
      for (; i < count; i++) {
        this.useArr.push({ id: i, status: i % 3 });
      }
    },
    onRefresh() {
      setTimeout(() => {
        this.par.pageIndex = 1;
        this.setUseArr();
        this.isLoading = false;
      }, 500);
    },
    onLoad() {
      setTimeout(() => {
        this.par.pageIndex++;
        this.setUseArr();
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

