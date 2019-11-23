<!--  -->
<template>
  <div>
    <!-- 顶部fixd -->
    <Topfixd></Topfixd>
    <a href="http://zt.epwk.com/1910chengxin/">
      <img src="../../assets/images/home/top.jpg" alt />
    </a>
    <Nav></Nav>
    <Menu></Menu>
  </div>
</template>

<script>
import Topfixd from "@/components/index/Topfixd";
import Nav from "@/components/index/Nav";
import Menu from '@/components/index/menu'
export default {
  name: "Header",
  components: {
    Topfixd,
    Nav,
    Menu
  },
  data() {
    return {};
  }
};
</script>
<style lang='scss'>

</style>