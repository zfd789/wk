<!--  -->
<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="center">
      <el-breadcrumb-item v-for="(item) in pathList" :key="item.id">{{ item.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
    name:"Breadcrumd",
  data() {
    return {
              pathList: null,

    };
  },
  methods:{
          // 生成面包屑的方法
    getBreadcrumd() {
      let matched = this.$route.matched.filter(item => item.name);
      const first = matched[0];
      console.log(first.name);
      if (first && first.name !== "首页") {
        matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
        console.log(1);
      }
      this.pathList = matched;
    }
  },
  mounted(){
        this.getBreadcrumd();
  },
  watch: {
    $route(to, from) {
      this.getBreadcrumd();
    }
  }
};
</script>
<style lang='scss' scoped>
</style>