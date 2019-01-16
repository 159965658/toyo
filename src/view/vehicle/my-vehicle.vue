<template>
  <div class="my-vehicle">
    <app-header :title="title"></app-header>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <vehicle-list v-for="item in vehicleArr" :key="item.id" :item="item"></vehicle-list>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import vehicleList from "./vehicle-list.vue"; 
import appHeader from "@c/vehicle-header";
export default {
  components: {
    vehicleList,
    appHeader
  },
  data() {
    return {
      title: "车辆",
      vehicleArr: [],
      isLoading: false,
      loading: false,
      finished: false,
      par: {
        pageIndex: 0,
        pageSize: 10
      }
    };
  },
  mounted() {
    // this.setVehArr();
  },
  methods: {
    initView() {},
    setVehArr() {
      let count = 0,
        par = this.par,
        i = this.vehicleArr.length;
      if (par.pageIndex == 1) {
        this.vehicleArr = [];
        i = 0;
      }
      count = par.pageIndex * par.pageSize;
      for (; i < count; i++) {
        this.vehicleArr.push({ id: i, status: i % 3 });
      }
    },
    onRefresh() {
      setTimeout(() => {
        this.par.pageIndex = 1;
        this.setVehArr();
        this.isLoading = false;
      }, 500);
    },
    onLoad() {
      setTimeout(() => {
        this.par.pageIndex++;
        this.setVehArr();
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
.my-vehicle {
  width: 100%;

}
</style>

