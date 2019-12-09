<!--  -->
<template>
  <div>
    <div class="topfixd">
      <div class="topfixd-contan">
        <div class="topfixd-l">
          <span>一站式服务</span>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="el-icon-location-outline" style="color:red;"></i>
              苏州
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="clearfix">地址</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="topfixd-r">
          <!-- <p>请登录</p>
          <p>免费注册</p>
          <p>用户中心</p>
          <p>帮助中心</p> -->
          <router-link class="color_ju" to="/login">请登录</router-link>
          <router-link class="color_ju" to="/login">免费注册</router-link>
          <router-link to="/Customer/customer">用户中心</router-link>
          <router-link to="/login">帮助中心</router-link>

          <!-- 
          <el-dropdown tyonghurigger="hover">
            <span class="el-dropdown-link">
              <a>yong'hu</a>
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="clearfix">商铺管理</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>-->
          <!-- 
          <el-dropdown trigger="hover">
            <span class="el-dropdown-link">
              采购管理
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="clearfix">采购管理</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>-->
          <!-- <el-dropdown trigger="hover">
            <span class="el-dropdown-link">
              帮助中心
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="clearfix">帮助中心</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>-->
          <p class="hot_line">服务热线：400-120-6688</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from '@/api/login'
export default {
  name: "Topfixd",
  data() {
    return {};
  }
};
</script>
<style lang='scss'>
// @import "../../assets/style/home.scss"

.topfixd {
  width: 100%;
  height: 40px;
  position: fixed;
  background: #f7f7f7;
  top: 0px;
  left: 0px;
  z-index: 9999;
  .topfixd-contan {
    width: 1240px;
    // width: 80%;
    display: flex;
    margin: 0 auto;
    line-height: 40px;

    justify-content: space-between;
    .topfixd-l {
      width: 50%;
      text-align: left;
      .clearfix {
        width: 600px;
        height: 40px;
        background: lightblue;
      }
    }

    .topfixd-r {
      width: 50%;
      display: flex;
      justify-content: space-between;
      a:hover{
                color:  rgb(255, 154, 60);

      }
       .color_ju{
        color:  rgb(255, 154, 60);
       }
      p {
        // width:100px;
        text-align: right;
      }
      .hot_line {
        width: 180px;
      }
      .el-dropdown {
        font-size: 12px;
      }
    }
  }
}
</style>