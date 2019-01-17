<template>
  <div class="his-use">
    <app-header :title="title" :leftArrow="leftArrow"></app-header>
    <div class="had">
      <van-swipe :autoplay="0" indicator-color="white" ref="$swipe">
        <van-swipe-item>
          <div class="itme-con">
            <div class="item-con-body">
              <div class="img">
                <img
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547738124514&di=4b687965b2093ebf359efd1bf7ee477d&imgtype=0&src=http%3A%2F%2F06imgmini.eastday.com%2Fmobile%2F20180918%2F20180918093135_d41d8cd98f00b204e9800998ecf8427e_5.png"
                  alt
                >
              </div>
              <div class="item-con-text">
                <p class="name">雷克萨斯 NX</p>
                <p class="chepai">车牌：京A·2396V</p>
              </div>
            </div>
            <div class="item-con-car">
              <p>型号: NX 300H &nbsp;&nbsp;|&nbsp;&nbsp;排量: 2.5L&nbsp;&nbsp;|&nbsp;&nbsp; 颜色: 银灰</p>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        <div class="custom-indicator" slot="indicator">
          <i class="my-icon icon-prev" @click="switchSwipe(false)"></i>
          <i class="my-icon icon-next1" @click="switchSwipe(true)"></i>
        </div>
      </van-swipe>
    </div>
    <div class="filter">
      <ul>
        <li>
          借出车辆
          <i class="my-icon icon-down"></i>
        </li>
        <li>
          用车中
          <i class="my-icon icon-down"></i>
        </li>
      </ul>
    </div>
    <div class="his-use-list">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <div class="his-use-list-item" v-for="item in arr" :key="item.id">
            <p class="jieche">
              <i class="my-icon icon-jieche"></i>
              <span>借车人：张三</span>
            </p>
            <p class="endtiem">
              <i class="my-icon icon-endtime"></i>
              <span>结束用车：18/12/30 20:00</span>
            </p>
          </div>
        </van-list>
      </van-pull-refresh>
      <!-- <van-popup v-model="ispicker" position="bottom" :overlay="true" @click-overlay="clickOverlay">
        <van-picker
          show-toolbar
          title
          :columns="columns"
          @change="onChange"
          @confirm="onPickerConfirm"
          @cancel="onPickerCancel"
        />
      </van-popup>-->
    </div>
  </div>
</template>

<script>
import appHeader from "@c/vehicle-header";
export default {
  components: {
    appHeader
  },
  data() {
    return {
      ispicker: false,
      title: "历史用车",
      leftArrow: true,
      arr: [],
      isLoading: false,
      loading: false,
      finished: false,
      par: {
        pageIndex: 0,
        pageSize: 20
      }
    };
  },
  methods: {
    clickOverlay() {
      this.$toastFull.isBack = false;
      this.ispicker = false;
      window.console.log(this.$toastFull.isBack);
    },
    setArr() {
      let count = 0,
        par = this.par,
        i = this.arr.length;
      if (par.pageIndex == 1) {
        this.arr = [];
        i = 0;
      }
      count = par.pageIndex * par.pageSize;
      for (; i < count; i++) {
        this.arr.push({ id: i, status: i % 3 });
      }
    },
    switchSwipe(flag) {
      /* eslint-disable */
      console.log(this.$refs.$swipe, flag);
      let swipe = this.$refs.$swipe,
        index = swipe.active;
      if (flag) {
        index++;
      } else {
        index--;
      }
      swipe.swipeTo(index);
    },
    onRefresh() {
      setTimeout(() => {
        this.par.pageIndex = 1;
        this.setArr();
        this.isLoading = false;
      }, 500);
    },
    onLoad() {
      setTimeout(() => {
        this.par.pageIndex++;
        this.setArr();
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

<style lang="less">
.his-use {
  &-list {
    &-item {
      height: 98px;
      border-bottom: 1px solid #cbcdd0;
      display: flex;
      justify-content: space-around;
      //   align-items: center;
      line-height: 98px;
      &:nth-of-type(even) {
        background: rgba(203, 205, 208, 0.1);
        // opacity: 0.1;
      }
      i {
        width: 32px;
        height: 32px;
        margin-right: 5px;
        background-size: 100%;
      }
    }
  }
  .van-swipe {
    .itme-con {
      width: ceil(317.5px + 294px) !important;
      .item-con-body {
        display: flex;
        align-items: center;
        widows: 611px;
        > .img {
          width: 277.5px;
          height: 160px;
          padding: 40px;
          background-color: transparent;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .item-con-car {
        width: 100%;

        text-align: center;
        p {
          font-size: 24px;
          color: #a5adbb;
          line-height: 35px;
        }
      }
    }
  }
  .item-con-text {
    width: 294px;
    > .name {
      font-size: 36px;
      color: #414246;
      letter-spacing: 0;
    }
    > .chepai {
      font-size: 28px;
      color: #383b41;
      letter-spacing: 1.17px;
    }
  }
  .van-swipe-item {
    display: flex;
    height: 335px !important;
    justify-content: center;
    background: white;
  }
  //   .my-indicator {
  //     position: absolute;
  .icon-prev {
    left: 20px;
  }
  .icon-next1 {
    left: 685px;
  }
  .icon-prev,
  .icon-next1 {
    position: absolute;
    z-index: 2;
    top: 50px;
  }
  .filter {
    height: 88px;
    top: 1.17333rem;
    left: 0px;
    width: 100%;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: #d9dde4;
    > ul {
      display: flex;
      height: 100%;
      justify-content: space-around;
      align-items: center;
      li {
        font-size: 32px;
        flex: 1 auto;
        text-align: center;
        font-size: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px solid #d9dde4;
        background-color: #fbfbfc !important;
        > i {
          margin-left: 20px;
          margin-top: 2px;
        }
        &:last-child {
          border-right: 0px;
        }
      }
    }
  }
  .icon-endtime,
  .icon-jieche {
    width: 32px;
    height: 32px;
  }
  //   }
}
</style>
