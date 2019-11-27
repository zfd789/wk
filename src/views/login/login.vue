<!--  -->
<template>
  <div class="wrap">
    <div class="logo">
      <img src="../../assets/images/home/logo.png" alt />
    </div>
    <div class="login_wrap">
      
      <div class="login_type">
        <div class="login_b">登录</div>
        <div class="login_b">注册</div>
       
      </div>
      <div>
        <el-form :model="registForm">
          <el-form-item prop="mobile">
            <el-input
              v-model="registForm.mobile"
              placeholder="请输入手机号"
              prefix-icon="el-icon-mobile-phone"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="registForm.password"
              placeholder="请输入手机号"
              prefix-icon="el-icon-mobile-phone"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import API from "../../api/login";
export default {
  data() {
    return {
      registForm: {}
    };
  },
  methods: {
    login() {
      const params = {
        username: "测试用户",
        password: "123456"
      };
      API.login(params).then(res => {
        console.log(res);
      });
    }
  },
  mounted() {
    // this.login();
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
      .login_b {
        font-size: 20px;
        width: 50px;
        border-bottom: 2px solid #ce4444;
        padding: 20px;
      }
    }
  }
}
</style>