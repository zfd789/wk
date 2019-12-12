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
              全国
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="clearfix">地址</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="topfixd-r">
          <p @click="toLogin" >{{username || "登录"}}</p>
          <p v-show="username==false" @click="register">免费注册</p>
          <!-- 
          <router-link class="color_ju" to="/login" >{{username || "登录"}}</router-link>
          <router-link class="color_ju" to="/login">免费注册</router-link>-->
          <!-- <router-link to="/Customer/customer">用户中心</router-link> -->
          <p @click="Tocostomer">用户中心</p>
          <router-link to="/login">帮助中心</router-link>
          <!-- <p >帮助中心</p> -->
          <p @click="loginout">退出</p>

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
import API from "@/api/login";
export default {
  name: "Topfixd",
  data() {
    return {
      username: "",
      active:"active"
    };
  },
  methods: {
    register(){
      this.$router.push({
        path:"/login",
        query:{
          reg_id:1
        }
      })
    },
    toLogin() {
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
    Tocostomer() {
      this.$router.push({
        path: "/Customer/customer"
      });
    },
    loginout() {
      this.$confirm("是否确认退出登录", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          API.loginOut().then(res => {
            console.log(res);
            localStorage.removeItem("islogin");
            localStorage.removeItem("username");
            this.$router.push({
              path:"/login"
            })
            // this.username = "登录"
          });
        })
        .catch(() => {
          // this.$message({
          //   type: "info",
          //   message: "已取消"
          // });
        });
    },
    islogin() {
      API.islogin().then(res => {
        if (res.code == 0) {
          // 已登录
          // console.log(res)
          // localStorage.setItem('islogin',0)
        } else {
          // 未登录
          // console.log(res)
          //  localStorage.setItem('islogin',1)
        }
      });
    }
  },
  mounted() {
    // this.islogin();
    // localStorage.setItem("username", JSON.stringify(res.data));
    this.username = JSON.parse(localStorage.getItem("username"));
    console.log(this.username);
    // to.matched.some(res => res.meta.requireAuth)
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
      .active{
        display: block;
      }
      a:hover {
        color: rgb(255, 154, 60);
      }
      .color_ju {
        color: rgb(255, 154, 60);
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