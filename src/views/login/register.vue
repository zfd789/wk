<!--  -->
<template>
  <div class="wrap">
    <div class="logo">
      <img src="../../assets/images/home/logo.png" alt />
    </div>
    <div class="login_wrap">
      <div class="login_type">
        <div>登录</div>
        <div>注册</div>
        <!-- <el-form :model="loginForm">
          <el-form-item >
              <el-input placeholder="请输入手机号"></el-input>
          </el-form-item>
        </el-form> -->
      </div>
    </div>
  </div>
</template>

<script>
import API from "@/api/login";
export default {
  data() {
    return {};
  }

};
</script>
<style lang='scss' scoped>
.wrap {
  background-color: rgba(225, 225, 225, 1);
  height: 930px;
  .logo {
    padding-top: 60px;
  }
  .login_wrap {
    width: 402px;
    height: 470px;
    margin: 0 auto;
    background: #fff;
    margin-top: 60px;
    .login_type {
      display: flex;
      justify-content: space-around;
      font-size: 20px;
    //   padding-top: 20px;
      div {
        width: 50px;
        border-bottom: 2px solid #ce4444;
        padding: 20px;
      }
    }
  }
}
</style>