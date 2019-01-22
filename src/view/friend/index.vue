<template>
  <div class="friend" ref="funVue">
    <app-header :title="title" :clickRight="clickRight"></app-header>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <friend-item v-for="item in friendArr" :user="user" :key="item.id" :item="item"></friend-item>
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
      user: {},
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
    this.initView();
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
    initView() {
      this.user = this.$cache.getUser();
    },
    getFriendList() {
      const user = this.user;
      this.$native
        .getFriendList({
          UserId: user.userid,
          currPage: this.par.pageIndex
        })
        .then(data => {
          this.setVehArr(data);
        });
    },
    setVehArr(data) {
      // 加载状态结束
      this.loading = false;
      this.isLoading = false;
      this.finished = false;
      const res = data.JSONResult.FriendRelationList;
      if (this.par.pageIndex == 1) {
        this.friendArr = res;
      } else {
        this.friendArr = this.friendArr.concat(res);
      }
      //到底了
      if (this.par.pageSize > res.length) this.finished = true;
    },
    onRefresh() {
      this.par.pageIndex = 1;
      this.getFriendList();
    },
    onLoad() {
      this.par.pageIndex++;
      this.getFriendList();
    }
  }
};
</script>
<style lang="less" scoped>
</style>
