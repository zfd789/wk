<!--  -->
<template>
  <div>
    报价列表
    <router-link to="/Customer/customers/ListQuotationsDetail">详情</router-link>
  </div>
</template>

<script>
import API from "@/api/customer";

export default {
  data() {
    return {};
  },
  methods: {
    ListQuotations() {
      let params = {
        id: 1
      };
      API.ListQuotations(params).then(res => {
        console.log(res);
      });
    }
  },
  mounted() {
    this.ListQuotations();
  }
};
</script>
<style lang='scss' scoped>
</style>