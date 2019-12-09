<!--  -->
<template>
  <div>
    <h2>邮箱认证</h2>
    <el-form :model="form" ref="form" class="form">
      <el-form-item label="用户名:" label-width="70px">
        <span>huahua</span>
      </el-form-item>
      <el-form-item label="邮箱：" label-width="70px">
        <el-input v-model="form.email" placeholder="请输入邮箱地址" style="width:200px;"></el-input>
      </el-form-item>
      <el-form-item label="验证码：" label-width="70px">
        <el-input v-model="form.email" placeholder="请输入验证码" style="width:200px;"></el-input>
         <el-button :disabled="disabled" class="code" @click="sendcode">验证码</el-button>
      </el-form-item>
      <el-button type="danger">确认提交</el-button>
    </el-form>
    <div class="explain">
      <h3>认证说明</h3>
     <p>邮箱认证成功后您可享有以下服务</p>
      <p>1.邮箱地址登录：可以直接使用“邮箱地址”登录凌灵威客</p>
      <p>2.重要事件提醒：进行（支付/提现/选稿/中标）时，可及时收到邮件提醒</p>
      <p>3.找回账号密码：忘记密码时，可使用邮件找回密码。</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     disabled: false, // 发送验证码的按钮是否可点
      form: {}
    };
  },
  methods:{
      sendcode(){}
  }
};
</script>
<style lang='scss' scoped>
.form {
  margin: 20px;

 .code {
        position: absolute;
        display: block;
        top: 0px;
        right: 0px;
        color: #ce4444;
      }
}
h3 {
  margin: 10px;
}
p {
  margin: 10px;
}
</style>