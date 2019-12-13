<!--  -->
<template>
  <div>
    <h2>邮箱认证</h2>
    <el-form :model="form" ref="form" class="form" :rules="rules">
      <el-form-item label="用户名:" label-width="100px">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="邮箱：" label-width="100px" prop="email">
        <el-input v-model="form.email" placeholder="请输入邮箱地址" style="width:200px;"></el-input>
      </el-form-item>
      <el-form-item label="验证码：" label-width="100px" prop="code">
        <el-input v-model="form.code" placeholder="请输入验证码" style="width:200px;"></el-input>
        <el-button :disabled="disabled" class="code" @click="sendcode">{{btntxt}}</el-button>
      </el-form-item>
      <el-button type="danger" @click="submit('form')">确认提交</el-button>
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
import API from "@/api/customer";
import APIlogin from "@/api/login";

export default {
  data() {
    let validcode = (rule, value, callback) => {
      if (
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
      ) {
        callback(new Error("请输入正确邮箱"));
      } else {
        this.code_true = 1;
        callback();
      }
    };
    return {
      disabled: false, // 发送验证码的按钮是否可点
      code_true: "",
      time: 5, // 短信倒计时
      btntxt:"验证码",
      form: {},
      rules: {
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { validator: validcode, trigger: "blur" }
        ],
        code:[
           { required: true, message: "请输入验证码", trigger: "blur" },
        ]
      }
    };
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate(valid => {
        console.log(valid);
        if (valid) {
          // 认证邮箱
          let params = {
            email:this.form.email,
            code:this.form.code
          }
        API.cheakEmail(params).then(res=>{
          console.log(res)
        })
          console.log(valid);
        } else {
          console.log(valid);
        }
      });
    },
    baseInfo() {
      API.UserInfo().then(res => {
        this.form = res.data;
        console.log(res);
      });
    },
    sendcode() {
      this.time = 5;
      if (this.code_true == 1) {
        let params = {
          email: this.form.email
        };
        API.sendmail(params).then(res => {
          console.log(res);
          if (res.code == 0) {
            this.timer();
          } else {
            this.$message({
              offset: 50,
              type: "warning",
              message: res.msg
            });
          }
        });
      } else {
        this.$message({
          offset: 50,
          message: "请先输入邮箱",
          type: "warning"
        });
      }
    },
    //   发送短信验证码倒计时
    timer() {
      if (this.time > 0) {
        this.disabled = true;
        this.time--;
        this.btntxt = this.time + "秒";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 0;
        this.btntxt = "验证码";
        this.disabled = false;
      }
    }
  },
  mounted() {
    this.baseInfo();
  }
};
</script>
<style lang='scss' scoped>
.form {
  margin: 20px;
  .code {
    width: 84px;
    position: absolute;
    display: block;
    top: 0px;
    left: 120px;
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