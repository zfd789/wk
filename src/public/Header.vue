<!--  -->
<template>
  <div>
    <!-- 顶部fixd -->
    <Topfixd></Topfixd>
    <div style="height:20px"></div>
    <Nav></Nav>
    <!-- <Menu></Menu> -->
  </div>
</template>

<script>
import Topfixd from "@/components/index/Topfixd";
import Nav from "@/components/index/Nav";
// import Menu from '@/components/index/menu'
export default {
  name: "Header",
  components: {
    Topfixd,
    Nav,
    // Menu
  },
  data() {
    return {};
  }
};
</script>
<style lang='scss'>

</style>