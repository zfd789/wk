<!--  -->
<template>
  <div>案例详情</div>
</template>

<script>
import API from '@/api/shop'

export default {
  data() {
    return {};
  },
  methods: {
    getcasedetail() {
      let params = {
        id: 1 //案例id
      };
      API.casedetail(params).then(res => {
        console.log(res);
      });
    }
  },
  mounted() {
    this.getcasedetail();
  }
};
</script>
<style lang='scss' scoped>
</style>