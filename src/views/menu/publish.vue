<!--  -->
<template>
  <div class="wid-w1240 color_bac">
    <div class="form">
      <el-form :inline="true" :model="form">
        <h1>发布需求订单</h1>
        <el-form-item label="分类：" label-width="100px">
          <el-select v-model="form.user" placeholder="设计服务">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <span></span>
          <el-select v-model="form.user" placeholder="展厅设计">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <span></span>
          <el-select v-model="form.user" placeholder="企业展厅">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <br />
        <el-form-item label="单位：" label-width="100px">
          <el-select v-model="form.user" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="数量：" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <br />
        <el-form-item label="标题：" label-width="100px">
          <el-input placeholder="用一句话概括您需要什么"></el-input>
        </el-form-item>
        

        <el-form-item label="品牌：" label-width="100px">
          <el-select v-model="form.user" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <br />
        <el-form-item label="预算价格：" label-width="100px">
          <el-input v-model="form.user" placeholder="最低价" class="small"></el-input>至
          <el-input v-model="form.user" placeholder="最高价" class="small"></el-input>
        </el-form-item>
        <br />
        <el-form-item label="要求" label-width="100px">
          <el-input
            type="textarea"
            :autosize="{ minRows: 3, maxRows: 6}"
            placeholder="请描述您的需求"
            v-model="form.user"
          ></el-input>
          <!-- <el-input type="textarea" :rows="3" placeholder="请描述您的需求" v-model="form.user"></el-input> -->
        </el-form-item>
        <h1>联系方式</h1>
        <el-form-item label="联系人：" label-width="100px">
          <el-input placeholder="您的姓名" v-model="form.user"></el-input>
        </el-form-item>
        <el-form-item label="手机号：" label-width="100px">
          <el-input placeholder="您的手机号" v-model="form.user"></el-input>
        </el-form-item>
        <br>
        <el-form-item label="公司名称" label-width="100px">
          <el-input placeholder="请填写公司名称" v-model="form.user"></el-input>
        </el-form-item>
        <el-form-item label="E-mail" label-width="100px">
          <el-input placeholder="您的邮箱" v-model="form.user"></el-input>
        </el-form-item>
        <br>

        <el-form-item label="收货地址：" label-width="100px">
          <CityPicker></CityPicker>
        </el-form-item>
        <br>
        <el-form-item label="详细地址：" label-width="100px">
          <el-input placeholder="详细地址" v-model="form.user"></el-input>
        </el-form-item>
        <br />
        <el-button type="danger" @click="submit">提交订单</el-button>
        <el-button>返回</el-button>
      </el-form>
    </div>

    <div></div>
  </div>
</template>

<script>
import CityPicker from "@/components/Shopslist/cityPicker";

export default {
  components: {
    CityPicker
  },
  data() {
    return {
      form: {
        user: ""
      }
    };
  },
  methods: {
    submit() {
      this.$router.push({
        path: "/Shopslist/success"
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.form {
  text-align: left;
  //   width: 85%;
  margin-bottom: 60px;
  .small {
    width: 80px;
  }
  span {
    display: inline-block;
    width: 5px;
  }
  h1 {
    margin: 20px 0px;
  }
}
</style>