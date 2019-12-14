<!--  -->
<template>
  <div class="index-con">
    <Header></Header>
    <Menu></Menu>
   <!-- <Breadcrumd></Breadcrumd> -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/public/Footer";
import Header from '@/public/Header';
import Menu from '@/components/index/menu'
import Breadcrumd from '@/components/index/Breadcrumd'

export default {
  components: {
    Footer,
    Header,
    Menu,
    Breadcrumd
  },
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
.index-con {
  height: 100%;
}
</style>