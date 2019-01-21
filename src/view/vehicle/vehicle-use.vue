<template>
  <div class="v-use">
    <app-header :title="title" :rightText="rightText" :clickRight="clickRight"></app-header>
    <filter-vue v-on:click="onFilter($event)"></filter-vue>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <use-list v-for="item in useArr" :key="item.id" :item="item"></use-list>
      </van-list>
    </van-pull-refresh>
    <van-popup v-model="ispicker" position="bottom" :overlay="true" @click-overlay="clickOverlay">
      <van-picker
        show-toolbar
        title
        :columns="columns"
        @change="onChange"
        @confirm="onPickerConfirm"
        @cancel="onPickerCancel"
      />
    </van-popup>
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
      columns: ["1", "2", "3", "4", "5"],
      title: "用车",
      rightText: "历史用车",
      ispicker: false,
      useArr: [],
      isLoading: false,
      loading: false,
      finished: false,
      par: {
        pageIndex: 0,
        pageSize: 10
      },
      clickRight: this.clickRightFun,
      user: {}
    };
  },
  mounted() {
    this.initView();
  },
  methods: {
    initView() {
      this.user = this.$cache.getUser();
    },
    clickOverlay() {
      this.$toastFull.isBack = false;
      this.ispicker = false;
      window.console.log(this.$toastFull.isBack);
    },
    onPickerConfirm(value, index) {
      window.console.log(`当前值：${value}, 当前索引：${index}`);
      this.clickOverlay();
    },
    onPickerCancel() {
      window.console.log("取消");
      this.clickOverlay();
    },
    onFilter(type) {
      this.$toastFull.isBack = true;
      window.console.log(type, this.$toastFull.isBack);

      this.ispicker = true;
    },
    onChange(picker, value, index) {
      window.console.log(`当前值：${value}, 当前索引：${index}`);
    },
    clickRightFun() {
      //历史用车
      this.$router.push("/hisuser");
    },
    getBorrowCarListByUserId() {
      const user = this.user;
      this.$native
        .getBorrowCarListByUserId({
          UserId: user.userid,
          currPage: this.par.pageIndex
        })
        .then(data => {
          this.setUseArr(data);
        });
    },
    setUseArr(data) {
      // 加载状态结束
      this.loading = false;
      this.isLoading = false;
      const res = data.JSONResult.BorrowCarRecordList;
      if (this.par.pageIndex == 1) {
        this.vehicleArr = res;
      } else {
        this.vehicleArr = this.vehicleArr.concat(res);
      }
      //到底了
      if (this.par.pageSize > res.length) this.finished = true;
    },
    onRefresh() {
      this.par.pageIndex = 1;
      this.getBorrowCarListByUserId();
    },
    onLoad() {
      this.par.pageIndex++;
      this.getBorrowCarListByUserId();
    }
  }
};
</script>
<style lang="less" scoped>
</style>

