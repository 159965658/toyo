<template>
  <div class="my-qrcode">
    <app-header :title="title" :leftArrow="leftArrow"></app-header>
    <div class="my-qrcode-code" id="qrcode">
      <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
    </div>

    <p class="remark">对方可通过“好友-添加-扫描二维码”向您发出申请</p>
  </div>
</template>

<script>
import appHeader from "@c/vehicle-header";
import QrcodeVue from "qrcode.vue";
export default {
  components: {
    QrcodeVue,
    appHeader
  },
  data() {
    return {
      user: {},
      value: "",
      size: 300,
      title: "我的二维码",
      leftArrow: true
    };
  },
  mounted() {
    const user = (this.user = this.$cache.getUser());
    this.value = JSON.stringify({
      userId: user.userid,
      friendPhoneNumber: user.phonenumber,
      friendActualName: user.actualname
    });
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.my-qrcode {
  height: 100%;
  .my-qrcode-code {
    padding-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
  }
  .remark {
    color: @defaultColor;
    text-align: center;
  }
}
</style>

