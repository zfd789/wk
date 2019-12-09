<!--  -->
<template>
  <div>
    <h2>修改密码</h2>
    <el-form :model="form" ref="form" class="form">
      <el-form-item label="当前密码:" label-width="80px">
         <el-input v-model="form.email" placeholder="请输入当前密码" style="width:200px;"></el-input>
      </el-form-item>
      <el-form-item label="新密码：" label-width="80px">
        <el-input v-model="form.email" placeholder="请输入新密码" style="width:200px;"></el-input>
      </el-form-item>
      <el-form-item label="确认密码:" label-width="80px">
        <el-input v-model="form.email" placeholder="请确认密码" style="width:200px;"></el-input>
      </el-form-item>
      <el-form-item label="验证码：" label-width="80px">
        <el-input v-model="form.email" placeholder="请输入验证码" style="width:200px;"></el-input>
         <el-button :disabled="disabled" class="code" @click="sendcode">验证码</el-button>
      </el-form-item>
      <el-button type="danger">确认提交</el-button>
    </el-form>
    <div class="explain">
      <h3>友情提示</h3>
     <p>网站密码用于用户登录，请妥善保管密码。00威客工作人员不会以任何理由向您索取密码</p>
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