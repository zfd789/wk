<!--  -->
<template>
  <div class="index-con">
    <Header></Header>
    <CostomerMenu></CostomerMenu>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/public/Footer";
import Header from '@/public/Header'
import CostomerMenu from '@/components/index/CostomerMenu'

export default {
  components: {
    Footer,
    Header,
    CostomerMenu
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