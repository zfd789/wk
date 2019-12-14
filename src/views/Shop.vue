<!--  -->
<template>
  <div class="index-con">
    <Header></Header>
    <shopMenu></shopMenu>
    <!-- <el-breadcrumb separator-class="el-icon-arrow-right" class="center">
      <el-breadcrumb-item v-for="(item) in pathList" :key="item.id">{{ item.name }}</el-breadcrumb-item>
    </el-breadcrumb> -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/public/Footer";
import Header from "@/public/Header";
import shopMenu from "@/components/index/shopMenu";

export default {
  components: {
    Footer,
    Header,
    shopMenu
  },
  data() {
    return {
      // pathList:null
    };
  },
  methods:{
     // 生成面包屑的方法
    // getBreadcrumd() {
    //   let matched = this.$route.matched.filter(item => item.name);
    //   const first = matched[0];
    //   console.log(first.name);
    //   if (first && first.name !== "首页") {
    //     matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
    //     console.log(1);
    //   }
    //   this.pathList = matched;
    // }
  },
  mounted(){
    // this.getBreadcrumd();
  },
  //   watch: {
  //   $route(to, from) {
  //     this.getBreadcrumd();
  //   }
  // }
};
</script>
<style lang='scss' scoped>
.index-con {
  height: 100%;
}
</style>