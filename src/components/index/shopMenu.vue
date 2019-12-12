<!--  -->
<template>
  <div class="menu">
    <div class="menu-con">

      <div class="midle">
        <router-link to="/Shop/home">首页</router-link>
        <router-link to="/Shop/cases">案例展示</router-link>
        <router-link to="/Shop/goodsCenter">产品中心</router-link>
        <router-link to="/Shop/aboutUs">关于我们</router-link>
      </div>

    </div>
  </div>
</template>

<script>
import API from "../../api/home";

export default {
  name: "shopMenu",
  data() {
    return {

    };
  },
  methods: {

  },
  mounted() {
  }
};
</script>
<style lang='scss' scoped>
.menu {
  width: 100%;
  background: #333;
  .menu-con {
    width: 1240px;
    // width: 80%;
    display: flex;
    margin: 0 auto;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    .midle {
      width: 65%;
      display: flex;
      justify-content: space-around;

      a {
        display: block;
        color: #fff;
        padding: 0px 10px 0px;
      }
      a:hover {
        background: #ff9a3c;
      }
    }
  }
}
</style>