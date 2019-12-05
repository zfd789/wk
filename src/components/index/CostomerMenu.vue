<!--  -->
<template>
  <div class="menu">
    <div class="menu-con">

      <div class="midle">
        <a href="#">用户中心</a>
        <router-link to="/Customer/customer"> 个人中心</router-link>
        <router-link to="/Customer/mineshop"> 我的店铺</router-link>
        <router-link to="/Customer/setting"> 账号设置</router-link>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "CostomerMenu",
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
    // width: 1240px;
    width: 80%;
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