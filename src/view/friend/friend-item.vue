<template>
  <van-swipe-cell
    :right-width="65"
    :left-width="0"
    v-if="item.status < 3"
    :disabled="item.status == 1"
    :onClose="onClose"
  >
    <!-- @click.stop="itemClick(item)" -->
    <div class="friend-item" @click.prevent="itemClick(item)">
      <div class="friend-item-fun" v-if="item.show" @click.stop="hrefCar(item)">
        <span class="triangle-up"></span>
        <p class="fun-p">借出车辆</p>
      </div>
      <div class="friend-item-info">
        <img
          v-if="item.status == 1 && item.u_avatarurl"
          :src="item.u_avatarurl"
          :onerror="defaultImg"
        >
        <img v-else-if="item.status == 2 && item.u_avatarurl" :src="item.uf_avatarurl">
        <img v-else src="http://img2.imgtn.bdimg.com/it/u=3846895839,2711067435&fm=26&gp=0.jpg" alt>
        <div class="friend-item-info-p">
          <p class="name">{{item.status == 1 ? item.u_actualname : item.uf_actualname}}</p>
          <p class="phone">{{item.status == 1 ? item.u_phonenumber : item.uf_phonenumber}}</p>
        </div>
      </div>
      <status-vue :status="item.status"></status-vue>
    </div>
    <span slot="right">删除</span>
  </van-swipe-cell>
</template>

<script>
import statusVue from "./status-vue";
// status为2时使用friendUserid和uf_开头的字段进行显示和使用
export default {
  props: {
    item: {},
    user: {},
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      defaultImg:
        "http://img2.imgtn.bdimg.com/it/u=3846895839,2711067435&fm=26&gp=0.jpg"
    };
  },
  components: {
    statusVue
  },
  methods: {
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case "cell":
        case "left":
        case "outside":
          instance.close();
          this.item.show = false;
          break;
        case "right":
          this.$dialog
            .confirm({
              message: "确定删除吗？"
            })
            .then(() => {
              instance.close();
              this.$native
                .relievingFriend({
                  userId: this.item.userid,
                  friendUserId: this.item.friendUserid
                })
                .then(() => {
                  this.$toast.success("删除好友成功");
                  this.item.status = 5;
                });
            });
          break;
      }
    },
    hrefCar(item) {
      this.$router.push(`/main/vehicle?UserId=${item.userid}`);
    },
    itemClick(item) {
      if (item.status == 1) {
        //未同意添加好友
        this.confirmFriend(item);
        return;
      } else {
        this.$emit("itemClick", item);
      }
    },
    confirmFriend(item) {
      this.$dialog
        .confirm({
          title: "添加好友",
          message: `是否添加该好友？`,
          confirmButtonText: "添加",
          cancelButtonText: "拒绝",
          closeOnClickOverlay: true
        })
        .then(() => {
          this.confirmAddFriend(item);
        })
        .catch(() => {
          this.confirmAddFriend(item, 1);
        });
    },
    confirmAddFriend(item, status = 2) {
      this.$native
        .confirmAddFriend({
          userId: this.user.userid,
          friendId: item.userid,
          status: status
        })
        .then(() => {
          setTimeout(() => {
            this.$emit("opFriend", status);
          }, 1);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.friend-item {
  background: #ffffff;
  border-top: 1px solid #cbcdd0;
  height: 148px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  position: relative;

  &-fun {
    width: 170px;
    height: 68px;
    background: #c1c7d0;
    position: absolute;
    right: 243px;

    > .fun-p {
      font-size: 28px;
      color: #383b41;
      letter-spacing: 0.47px;
      text-align: center;
      line-height: 68px;
    }
  }

  &:last-child {
    border-bottom: 1px solid #cbcdd0;
  }

  &-info {
    display: flex;
    align-items: center;

    > img {
      border: 1px solid rgba(0, 0, 0, 0.15);
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.13);
      border-radius: 4px;
      width: 88px;
      height: 88px;
      margin-right: 15px;
    }

    &-p {
      > .name {
        font-size: 32px;
        color: #414246;
        line-height: 45px;
      }

      > .phone {
        font-size: 28px;
        color: #7f8389;
        text-align: center;
      }
    }
  }
}

.triangle-up {
  width: 0;
  height: 0;
  position: absolute;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-right: 30px solid #c1c7d0;
  left: -15px;
  top: 4px;
}
</style><style lang="less">
.van-swipe-cell {
  &__left,
  &__right {
    color: #fff;
    font-size: 15px;
    width: 65px;
    height: 100%;
    display: inline-block;
    text-align: center;
    // line-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f44;
  }
}
</style>
