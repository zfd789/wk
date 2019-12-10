<!--  -->
<template>
  <div class="wrap">
    <div class="logo">
      <img src="../../assets/images/home/logo.png" alt />
    </div>
    <div class="login_wrap">
      <div class="login_type">
        <div :class="login " @click="logintabs" v-show="isshowTitle===1">登录</div>
        <div :class="register" @click="registertabs" v-show="isshowTitle===1">注册</div>
        <div class="findpwd" v-show="isshowTitle===2">找回密码</div>
      </div>
      <div class="form">
        <!-- rulefindpwd -->
        <el-form
          :model="registForm"
          ref="registForm"
          :rules="isShow==1?ruleLogin:(isShow==2?rules:rulefindpwd)"
        >
          <!-- 如果isshow==1||3 name 不显示 如果==2 显示 -->
          <el-form-item prop="name" v-show="isShow===2">
            <el-input
              v-model="registForm.name"
              placeholder="请输入用户名"
              prefix-icon="iconfont icon-account"
            ></el-input>
          </el-form-item>
          <el-form-item prop="mobile_email">
            <el-input
              v-model="registForm.mobile_email"
              placeholder="请输入手机号/邮箱"
              prefix-icon="el-icon-mobile-phone"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="registForm.password"
              placeholder="请输入密码"
              :type="pwd_type"
              maxlength="6"
              minlength="6"
              prefix-icon="iconfont icon-password"
            ></el-input>
            <i :class="icon" @click="openeye"></i>
          </el-form-item>
          <el-form-item prop="password" v-show="isShow===3">
            <el-input
              v-model="registForm.confirm_password"
              placeholder="请确认密码"
              :type="pwd_type"
              maxlength="6"
              minlength="6"
              prefix-icon="iconfont icon-password"
            ></el-input>
            <i :class="icon" @click="openeye"></i>
          </el-form-item>
          <el-form-item prop="code" v-show="isShow!==1">
            <el-input
              v-model="registForm.code"
              placeholder="请输入验证码"
              prefix-icon="iconfont icon-password"
            ></el-input>
            <el-button :disabled="disabled" class="code" @click="sendcode">{{btntxt}}</el-button>
          </el-form-item>
          <el-form-item prop="captcha" v-show="isShow===2">
            <div class="captcha">
              <div>
                <el-input
                  v-model="registForm.captcha"
                  placeholder="请输入图片验证码"
                  prefix-icon="iconfont icon-key"
                  style="width:170px"
                ></el-input>
              </div>
              <div>
                <img v-bind:src="'http://192.168.2.32/'+captcha" alt @click="getcaptcha" />
              </div>
            </div>
          </el-form-item>
          <el-form-item prop="radio" v-show="isShow===2">
            <el-checkbox v-model="registForm.radio">我已同意并接受《凌灵威客网注册协议》</el-checkbox>
          </el-form-item>
          <div class="menery">
            <p>使用验证码登录</p>
            <p v-show="isShow!==3" @click="findpwd">忘记密码</p>
            <p v-show="isShow===3" @click="logintabs">去登录</p>
          </div>
          <el-button
            type="primary"
            @click="submitForm('registForm')"
            :disabled="isdisabled"
            style="width:342px;margin-bottom:30px;"
          >{{loginbtn}}</el-button>
          <div v-show="isShow===1">
            <p>其他方式登录</p>
            <div class="platForm">
              <a href>
                <img src="../../assets/images/qq.png" alt />
              </a>
              <a href>
                <img src="../../assets/images/wx.png" alt />
              </a>
            </div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import API from "../../api/login";
export default {
  data() {
    // 添加手机号的正则
    let validcodetel = (rule, value, callback) => {
      if (value.includes("@")) {
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
      } else {
        let reg = /^1[345678]\d{9}$/;
        if (!reg.test(value)) {
          callback(new Error("请输入正确电话号码"));
        } else {
          this.code_true = 1;
          callback();
        }
      }
    };
    let radio = (rule, value, callback) => {
      if (value == false) {
        callback(new Error("接受即可注册"));
      } else {
        callback();
      }
    };
    return {
      registForm: { radio: true }, // 注册上传的参数
      btntxt: "验证码",
      time: 60,
      disabled: false, // 发送验证码的按钮是否可点
      isdisabled: false, // 提交按钮 是否可点
      code_true: 2, // 判断是否正确输入 手机号码  或者邮箱 1 true 2是false
      pwd_type: "password", // 密码的显示隐藏
      captcha: "api/captcha", // 图片验证码
      icon: "iconfont icon-eye1 eye", // 小眼睛是否睁开
      login: "login_b activ", // 是否有红色下划线
      register: "login_b",
      logintype: 1, // 1是登录 2 是注册 3 找回密码
      isShow: 1, // 1显示是登录特有内容 2 显示是注册特有内容 3 显示找回密码特有内内
      rulestype: 1, // 1是登录的验证规则 2 注册的验证规则 3
      iscode: "", // prop 是否需要code
      loginbtn: "登录",
      isshowTitle: 1, // 1 显示登录注册 标题 2 显示找回密码标题
      rulefindpwd: {
        mobile_email: [
          {
            required: true,
            message: "请输入正确的电话号/邮箱",
            trigger: "blur"
          },
          { validator: validcodetel, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入6位数密码", trigger: "blur" }
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      },
      ruleLogin: {
        mobile_email: [
          {
            required: true,
            message: "请输入正确的电话号/邮箱",
            trigger: "blur"
          },
          { validator: validcodetel, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入6位数密码", trigger: "blur" }
        ]
      },
      rules: {
        mobile_email: [
          {
            required: true,
            message: "请输入正确的电话号/邮箱",
            trigger: "blur"
          },
          { validator: validcodetel, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入6位数密码", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        captcha: [
          { required: true, message: "请输入图片验证码", trigger: "blur" }
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        radio: [
          { required: true, message: "接受即可注册", trigger: "blur" },
          { validator: radio, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //
    submitForm(formName) {
      // 设置定时器让按钮在1000毫秒内不可重复点击
      this.isdisabled = true;
      console.log(this.isShow);
      setTimeout(() => {
        this.isdisabled = false;
      }, 1000);

      if (this.logintype == 1) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.$refs[formName].validate(valid => {
              let params = {
                mobile_email: this.registForm.mobile_email,
                password: this.registForm.password
              };
              API.login(params).then(res => {
                this.message(res);
              });
            });
          }
          valid = false;
          console.log(valid);
        });
      } else if (this.logintype == 2) {
        this.$refs[formName].validate(valid => {
          console.log(valid);
          if (valid) {
            let params = {
              name: this.registForm.name,
              mobile_email: this.registForm.mobile_email,
              password: this.registForm.password,
              code: this.registForm.code,
              captcha: this.registForm.captcha
            };
            API.register(params).then(res => {
              this.message(res);
            });
          }
        });
      } else {
        this.$refs[formName].validate(valid => {
          if (valid) {
            let params = {
              mobile_email: this.registForm.mobile_email,
              password: this.registForm.password,
              confirm_password: this.registForm.confirm_password,
              code: this.registForm.code
            };
            API.resetPwd(params).then(res => {
              this.message(res);
            });
          }
        });
      }

      return;
    },
    //  登录的动作
    Gologin() {},
    Goregister() {},
    Gofindpwd() {},
    // 消息提示
    message(res) {
      if (res.code == 0) {
        console.log(res);
        //  注册成功
        this.$message({
          type: "success",
          message: res.msg
        });
        if (this.logintype == 1) {
          // localStorage.setItem('ISLogin',JSON.stringify)
          this.$router.push({
            path:'/'
          })

        } else {
          this.logintabs(res);
        }
      } else {
        this.$message({
          type: "warning",
          message: res.msg
        });
      }
    },
    //  注册的动作
    sendcode() {
      this.time = 60;
     this.$message({
       type:"warning",
       message:"验证码将在5分钟后过期"
     })
      if (this.code_true == 1) {
        //  如果手机号码验证正确 可发送验证码

        if (this.logintype == 2) {
          // 如果是注册
          let params = {
            mobile_email: this.registForm.mobile_email
          };
          API.sendCode(params).then(res => {
            console.log(res);
            if (res.code == 0) {
              this.timer();
            } else {
              this.$message({
                type: "warning",
                message: res.msg
              });
            }
          });
        } else {
          // 如果是找回密码
          let params = {
            mobile_email: this.registForm.mobile_email
          };
          API.forget(params).then(res => {
            console.log(res);
            if (res.code == 0) {
              this.timer();
            } else {
              this.$message({
                type: "warning",
                message: res.msg
              });
            }
          });
        }
      } else {
        this.$message({
          message: "请先输入手机号或者邮箱",
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
    },
    // captcha
    getcaptcha() {
      this.captcha = "api/captcha?" + Math.round(Math.random() * 100000);
    },
    logintabs() {
      this.login = "login_b activ";
      this.register = "login_b ";
      // this.isShow = false;
      this.logintype = 1;
      this.isShow = 1;
      this.isshowTitle = 1;
      this.loginbtn = "登录";
    },
    registertabs() {
      this.login = "login_b";
      this.register = "login_b activ";
      // this.isShow = true;
      this.logintype = 2;
      this.isShow = 2;
      this.loginbtn = "立即注册";
      this.iscode = "code";
    },
    // findpwd
    findpwd() {
      this.isshowTitle = 2;
      this.isShow = 3;
      this.loginbtn = "确定";
      this.logintype = 3;
    },
    openeye() {
      // this.pwdType === "password" ? "text" : "password";
      if (this.pwd_type === "password") {
        this.pwd_type = "text";
        this.icon = "iconfont  icon-eye eye";
      } else if (this.pwd_type === "text") {
        this.pwd_type = "password";
        this.icon = "iconfont icon-eye1 eye";
      }
    }
  },
  mounted() {
    this.getcaptcha();
  }
};
</script>
<style lang='scss' scoped>
.wrap {
  background-color: rgba(225, 225, 225, 1);
  height: 930px;
  .logo {
    padding-top: 30px;
  }
  .login_wrap {
    width: 402px;
    margin: 0 auto;
    background: #fff;
    margin-top: 60px;
    .login_type {
      display: flex;
      justify-content: space-around;
      .login_b {
        font-size: 20px;
        width: 50px;
        padding: 20px;
      }
      .activ {
        border-bottom: 2px solid #ce4444;
      }
      .findpwd {
        font-size: 20px;
        padding-top: 20px;
      }
    }
    .form {
      margin: 30px;
      .captcha {
        display: flex;
        div {
          width: 50%;
          img {
            height: 40px;
          }
        }
      }
      .code {
        position: absolute;
        display: block;
        top: 0px;
        right: 0px;
        color: #ce4444;
      }
      .eye {
        position: absolute;
        display: block;
        top: 0px;
        right: 10px;
      }
      .platForm {
        display: flex;
        justify-content: center;
        a {
          display: block;
          padding: 20px;
        }
      }
      .menery {
        display: flex;
        justify-content: space-between;
        p {
          margin-bottom: 10px;
          color: #409eff;
        }
      }
    }
  }
}
</style>