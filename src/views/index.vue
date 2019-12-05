<!--  -->
<template>
  <div class="index-con">
    <Header></Header>
    <Menu></Menu>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/public/Footer";
import Header from '@/public/Header';
import Menu from '@/components/index/menu'

export default {
  components: {
    Footer,
    Header,
    Menu
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