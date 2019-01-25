<template>
  <img :src="src" alt srcset>
</template>

<script>
export default {
  props: {
    url: {
      default: "ES"
    }
  },
  data() {
    return {
      imgUrl: this.url,
      src: ""
    };
  },
  created() {
    // console.log(this.imgUrl.substring(0, 2));
    const type = this.url.substring(0, 2).toLowerCase();
    this.src = require(`../assets/car/${type}.png`);
  }
};
</script>

<style>
</style>
