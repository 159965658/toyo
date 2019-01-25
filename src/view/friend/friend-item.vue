<template>
  <div class="friend-item" @click="itemClick(item)" v-if="item.status < 3">
    <div class="friend-item-fun" v-if="show" @click.stop="hrefCar(item)">
      <span class="triangle-up"></span>
      <p class="fun-p">借出车辆</p>
    </div>
    <div class="friend-item-info">
      <img v-if="item.status == 1" :src="item.u_avatarurl" alt srcset>
      <img v-else-if="item.status == 2" :src="item.uf_avatarurl" alt srcset>
      <div class="friend-item-info-p">
        <p class="name">{{item.status == 1 ? item.u_actualname : item.uf_actualname}}</p>
        <p class="phone">{{item.status == 1 ? item.u_phonenumber : item.uf_phonenumber}}</p>
      </div>
    </div>
    <status-vue :status="item.status"></status-vue>
  </div>
</template>
  
<script>
import statusVue from "./status-vue";
// status为2时使用friendUserid和uf_开头的字段进行显示和使用
export default {
  props: { item: {}, user: {}, show: { type: Boolean, default: false } },
  components: {
    statusVue
  },
  methods: {
    hrefCar(item) {
      this.$router.push(`/main/vehicle?UserId=${item.friendUserid}`);
    },
    itemClick(item) {
      if (item.status == 1) {
        //未同意添加好友
        this.confirmFriend(item);
        return;
      } else {
        this.show = !this.show;
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
            if (status == 2) {
              this.$toast.success("添加好友成功");
              item.status = "2";
            } else {
              this.$toast.success("拒绝好友成功");
              item.status = "3";
            }
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
</style>

