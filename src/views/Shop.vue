<!--  -->
<template>
  <div class="index-con">
    <Header></Header>
    <shopMenu></shopMenu>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/public/Footer";
import Header from '@/public/Header'
import shopMenu from '@/components/index/shopMenu'

export default {
  components: {
    Footer,
    Header,
    shopMenu
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