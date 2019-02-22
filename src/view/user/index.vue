<template>
  <div class="app-my">
    <app-header :title="title" :fixed="fixed"></app-header>
    <div class="app-mine"></div>
    <div class="app-cardcase">
      <div class="app-cardcase-con">
        <div class="app-cardcase-con-dis">
          <img v-if="user.avatarurl" :src="user.avatarurl" alt>
          <img
            v-else
            src="http://img2.imgtn.bdimg.com/it/u=3846895839,2711067435&fm=26&gp=0.jpg"
            alt
          >
          <div class="app-cardcase-con-dis-p">
            <p class="name">{{user.actualname}}</p>
            <p class="phone">{{user.phonenumber}}</p>
          </div>
        </div>
        <!-- <button><i class="my-icon icon-edit"></button> -->
        <button @click="show=true">修改</button>
      </div>
    </div>
    <div class="mine-list">
      <div class="mine-list-item" @click="hrefCode">
        <i class="my-icon icon-mycode"></i> 我的二维码
      </div>
      <div class="mine-list-item">
        <i class="my-icon icon-set"></i> 设置
      </div>
      <div class="mine-list-item" @click="outClick">
        <i class="my-icon icon-out"></i> 登出
      </div>
    </div>
    <van-dialog v-model="show" show-cancel-button :before-close="beforeClose" :title="diaTitle">
      <van-cell-group :border="false">
        <van-field v-model="username" input-align="center" placeholder="请输入用户名" :error="error"/>
      </van-cell-group>
    </van-dialog>
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
      title: "我的",
      diaTitle: "修改用户名",
      fixed: false,
      user: {},
      show: false,
      username: "",
      error: false
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    beforeClose(action, done) {
      if (action === "confirm") {
        if (!this.username) {
          this.error = true;
          done(false);
        } else {
          // setTimeout(done, 1000);
          this.updata(done);
        }
      } else {
        done();
      }
    },
    hrefCode() {
      this.$router.push("/qrcode");
    },
    updata(done) {
      this.$native
        .updateUserInfo({
          phoneNumber: this.user.phonenumber,
          actualName: this.username
        })
        .then(() => {
          this.upAppData(done);
        });
    },
    upAppData(done) {
      let user = this.user;
      user.actualname = this.username;
      this.$native
        .saveValueToLoacl({
          user: JSON.stringify(user)
        })
        .then(() => {
          done();
        });
    },
    getUser() {
      this.$native.getValueFromLocal("user").then(data => {
        this.user = JSON.parse(data.RESULT);
      });
    },
    outClick() {
      this.$dialog
        .confirm({
          title: "退出登录",
          message: "确认要退出登录吗？"
        })
        .then(() => {
          this.$cache.removeAll();
          let th = this;
          this.$native
            .saveValueToLoacl({
              user: ""
            })
            .then(() => {
              th.$router.replace("/login");
            });
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>

<style lang="less">
.van-dialog__header {
  padding-bottom: 10px;
  padding-top: 10px;
}
.van-field {
  input {
    border-bottom: 1px solid #ebedf0 !important;
    border-radius: 0px !important;
    margin: 0 20px;
    padding: 10px 0px;
  }
}
</style>

<style lang="less" scoped>
.van-cell {
  padding: 20px 15px;
  // padding: 0px 10px;
}
.app-my {
  position: relative;
}

.app-mine {
  height: 128px;
  background-color: #383b41;
}

.app-cardcase {
  height: 240px;
  width: 690px;
  position: absolute;
  top: 118px;
  left: 30px;
  background-color: #ffffff;
  background: #ffffff;
  border: 1px solid #e3e3e3;
  border-radius: 5px;

  &-con {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;

    &-dis {
      display: flex;

      > img {
        border: 1px solid #c1c7d0;
        border-radius: 5px;
        margin-left: 30px;
        width: 120px;
        height: 120px;
      }

      &-p {
        margin-left: 20px;

        > .name {
          font-size: 32px;
          color: #000000;
        }

        > .phone {
          margin-top: 12.1px;
          font-size: 28px;
          color: #7f8389;
          text-align: center;
        }
      }
    }

    > button {
      // margin-left: 204px;
      width: 138px;
      height: 66px;
      border-radius: 48px 0px 0px 48px !important;
      background-image: linear-gradient(-180deg, #f5e9c8 0%, #e7ce97 100%);
      font-family: PingFangSC-Regular;
      font-size: 28px;
      color: #ca8b00;
      text-align: center;
    }
  }
}

.mine-list {
  height: 301px;
  background-color: #ffffff;
  margin-top: 171.5px;
  display: flex;
  flex-direction: column;

  &-item {
    height: 100px;
    border-bottom: 1px solid #e3e3e3;
    font-size: 30px;
    color: #000000;
    padding-left: 60px;
    display: flex;
    align-items: center;

    > i {
      margin-right: 21px;
    }
  }
}
</style>
