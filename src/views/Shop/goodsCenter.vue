<!--  -->
<template>
  <div>center</div>
</template>

<script>
import API from "@/api/shop";
export default {
  data() {
    return {};
  },
  mounted() {
    this.goodslist();
  },

  methods: {
    goodslist() {
      let params = {
        id: 1,
        param: {
          page: 1
        }
      };
      API.Allgoods(params).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style lang='scss' scoped>
</style>