<!--  -->
<template>
  <div class="flashBg">
    <div class="block">
      <el-carousel height="550px">
        <el-carousel-item v-for="(item, index) in this.banner" :key="index">
          <div class="wid-w1240">
       
            <div class="adv">
              <div class="avatar_wrap">
                <img src="../../assets/images/home/banner0.jpg" alt />
                <div>
                  <p>hi, 欢迎来到凌灵威客</p>
                  <p>
                    <router-link to="/login">登录</router-link>
                    <span>/</span>
                    <router-link to="/register">注册</router-link>
                  </p>
                </div>
              </div>
              <div class="live_wrap">
                <p>我要入驻</p>
                <p>新人福利</p>
              </div>
              <div class="block">
                <el-carousel height="135px" indicator-position="outside" arrow="never">
                  <el-carousel-item v-for="item in 4" :key="item">
                    <h1>{{ item }}</h1>
                    <p>总交易量</p>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <!-- v-model="activeName" -->
              <el-tabs @tab-click="handleClick">
                <el-tab-pane label="公告" name="first">公告</el-tab-pane>
                <el-tab-pane label="报道" name="second">报道</el-tab-pane>
                <el-tab-pane label="咨询" name="third">咨询</el-tab-pane>
                <el-tab-pane label="规则" name="fourth">规则</el-tab-pane>
              </el-tabs>
            </div>
          </div>

          <img :src="item.image_url" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import API from "../../api/home";
export default {
  name: "Banner",
  data() {
    return {
      banner: [],
      tabPosition: "left",
    };
  },
  methods: {
    bannerlist() {
      API.bannerlist().then(res => {
        this.banner = res.data[1].banners;
      });
    },
   
    handleClick() {}
  },
  mounted() {
    this.bannerlist();
  }
};
</script>
<style lang='scss' scoped>
.flashBg {
  width: 100%;
  height: 550px;

  .wid-w1240 {
    position: relative;

  
    .adv {
      width: 310px;
      height: 500px;
      position: absolute;
      top: 0px;
      right: 0px;
      background-color: #fff;
      margin-top: 18px;
      padding: 10px 20px 10px;

      .avatar_wrap {
        display: flex;
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
        p {
          height: 30px;
          // line-height: 20px;;
        }
      }
      .live_wrap {
        display: flex;
        p {
          width: 112px;
          height: 35px;
          border-radius: 20px;
          cursor: pointer;
          background: #f95959;
          color: #fff;
          line-height: 35px;
          margin: 10px 0px 10px 10px;
        }
      }
      // .num_wrap {
      // }
      .el-tabs__nav-wrap::after {
        background-color: #fff;
      }
    }
  }

  img {
    height: 550px;
    width: 100%;
  }
  .el-carousel__item h1 {
    height: 90px;
    line-height: 90px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>