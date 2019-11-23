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
              定位
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="clearfix">地址</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="topfixd-r">
          <p>请登录</p>
          <p>免费注册</p>

          <el-dropdown trigger="hover">
            <span class="el-dropdown-link">
              <a>商铺管理</a>
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="clearfix">商铺管理</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-dropdown trigger="hover">
            <span class="el-dropdown-link">
              采购管理
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="clearfix">采购管理</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown trigger="hover">
            <span class="el-dropdown-link">
              帮助中心
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="clearfix">帮助中心</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <p class="hot_line">服务热线：400-120-6688</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  .topfixd-contan {
    width: 1240px;
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