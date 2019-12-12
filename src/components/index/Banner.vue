<!--  -->
<template>
  <div class="flashBg">
    <div class="block">
      <el-carousel height="550px">
        <el-carousel-item v-for="(item, index) in this.banner" :key="index">
          <div class="wid-w1240">
       
            <div class="adv">
              <div class="avatar_wrap">
                <!-- <img src="../../assets/images/home/banner0.jpg" alt /> -->
                <el-avatar :size="50" :src="circleUrl"></el-avatar>
                <div>
                  <p>hi, 欢迎来到凌灵威客</p>
                  <p @click="tologin">
                    {{username || '登录/注册'}}
                  </p>
                </div>
              </div>
              <div class="live_wrap">
                <p>我要入驻</p>
                <p>新人福利</p>
              </div>
              <div class="block record">
                <el-carousel height="135px" indicator-position="outside" arrow="never">
                  <el-carousel-item v-for="item in recordlist" :key="item.id">
                    <h1>{{ item.value }}</h1>
                    <p>{{item.title}}</p>
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
      recordlist:[],
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      tabPosition: "left",
      username:""
    };
  },
  methods: {
    record(){
         API.record().then(res=>{
           this.recordlist = res.data.record
           console.log(res)
         })
    },
    tologin(){
         if (this.username) {
        this.$message({
          message: '您已登录',
          offset:50,
          type: 'warning'
        });
      } else {
        this.$router.push({
          path: "/login"
        });
      }
    },
    bannerlist() {
      API.bannerlist().then(res => {
        this.banner = res.data[1].banners;
      });
    },
   
    handleClick() {}
  },
  mounted() {
    this.bannerlist();
    this.record()
        this.username = JSON.parse(localStorage.getItem("username"));

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
      font-size: 14px;
      .avatar_wrap {
        display: flex;
        margin: 10px 0px;
        p {
          margin: 2px 10px;
        }
      }
      .live_wrap {
        display: flex;
        align-items: center;
        p {
          width: 112px;
          height: 35px;
          border-radius: 20px;
          cursor: pointer;
          background: #f95959;
          color: #fff;
          line-height: 35px;
          margin: 10px 0px 10px 10px;
          text-align: center;
        }
      }

      .el-tabs__nav-wrap::after {
        background-color: #fff;
      }
    }
  }

  img {
    height: 550px;
    width: 100%;
  }
  .el-carousel__item  {
    text-align: center;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #e4e4e1;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>