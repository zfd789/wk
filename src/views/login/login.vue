<!--  -->
<template>
  <div>login</div>
</template>

<script>
// import API from '@/api/login'
import API from '../../api/login'
// import login from "../../api/login";
export default {
  data() {
    return {};
  },
  methods: {
    login() {
    const  params = {
        username: "测试用户",
        password: "123456"
      };
      API.login(params).then(res => {
        console.log(res);
      });
    }
  },
  mounted(){
      this.login()
  }
};
</script>
<style lang='scss' scoped>
</style>