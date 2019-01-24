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
      src: "",
      urlTemp: `${process.env.BASE_URL}/car/`
    };
  },
  created() {
    // console.log(this.imgUrl.substring(0, 2));
    const type = this.imgUrl.substring(0, 2).toLowerCase();
    this.src = `${this.urlTemp}${type}.png`;
  }
};
</script>

<style>
</style>
