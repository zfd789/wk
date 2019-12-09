<!--  -->
<template>
  <div class="menu">
    <div class="menu-con">
      <div class="midle">
        <a href="#" class="usercenter">用户中心</a>
        <div @click="one">
          <router-link to="/Customer/customer">
            个人中心
            <p v-show="isshow==1"></p>
          </router-link>
        </div>
        <div @click="two">
          <router-link to="/Customer/mineshop">
            我的店铺
            <p v-show="isshow==2"></p>
          </router-link>
        </div>
        <div @click="three">
          <router-link to="/Customer/setting" @click="three">
            账号设置
            <p v-show="isshow==3"></p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CostomerMenu",
  data() {
    return {
      isshow: 1
    };
  },
  methods: {
    one() {
      this.isshow = 1;
    },
    two() {
      this.isshow = 2;
    },
    three() {
      this.isshow = 3;
    }
  },
  mounted() {}
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
      // justify-content: space-around;
      justify-content: space-between;
      .usercenter {
        background: #5b5b5b;
        //  padding: 0px 20px;
        width: 200px;
      }
      a {
        display: block;
        color: #fff;
        padding: 0px 10px 0px;
        // background: #ff9a3c;
        position: relative;
        p {
          border-style: solid;
          border-width: 7px;
          border-color: transparent transparent #fff transparent;
          width: 0px;
          height: 0px;
          position: absolute;
          bottom: 0px;
          left: 30px;
          // margin-left: 20px;
          // margin-top: 10px;
          // text-align: center;
          // border-top: 10px solid transparent;
          // border-right: 10px solid red;
          // border-bottom: 10px solid transparent;
          // border-left: 10px solid transparent;
        }
      }
      // a:hover {
      //   background: #ff9a3c;
      // }
    }
  }
}
</style>