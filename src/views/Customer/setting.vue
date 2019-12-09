<!--  -->
<template>
  <el-container class="wid-w1240 color_bac">
    <div class="setting">
      <el-aside class="left" width="220px">
        <el-menu router>
          <template>
            <h3>账号设置</h3>
          </template>
          <el-menu-item index="/Customer/settings/baseInfo">基本设置</el-menu-item>
          <el-menu-item index="/Customer/settings/email">邮箱认证</el-menu-item>
          <el-menu-item index="/Customer/settings/phone">手机认证</el-menu-item>
          <el-menu-item index="/Customer/settings/reverse">实名认证</el-menu-item>
          <el-menu-item index="/Customer/settings/findpwd">修改密码</el-menu-item>
        </el-menu>
        <div class="proposal">
          <p>意见反馈</p>
          <el-input
            type="textarea"
            :rows="6"
            placeholder="有话您就说，我们在倾听"
            v-model="textarea"
            style="width:184px;"
          ></el-input>
          <p>
            <el-button type="danger" style="width:184px;">确认提交</el-button>
          </p>
        </div>
      </el-aside>
      <el-main class="right">
        <router-view></router-view>
      </el-main>
    </div>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      textarea: ""
    };
  }
};
</script>
<style lang='scss' scoped>
.setting {
  display: flex;
  width: 100%;
  //   height:865px;
  justify-content: space-around;
  .left {
    width: 180px;
    background: #fff;
    font-size: 16px;
    margin: 20px 0px;

    h3 {
      font-size: 18px;
      font-weight: bold;
      margin: 20px;
    }
    // p {
    //   padding: 30px;
    //   background: #ccc;
    //   margin: 1px;
    // }
    .proposal {
      padding: 20px;
      background: #fff;
      p {
        margin: 10px 0px;
      }
    }
  }
  .right {
    width: 70%;
    background: #fff;
    padding: 20px;
    margin: 20px;
  }
}
</style>