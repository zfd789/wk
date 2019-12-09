<!--  -->
<template>
  <div>
    <el-form :model="formData" ref="formData">
      <el-form-item label="昵称：" label-width="100px">
        <el-input v-model="formData.name" style="width:200px;"></el-input>
      </el-form-item>
      <el-form-item label="用户名：" label-width="100px">
        <el-input v-model="formData.name" style="width:200px;"></el-input>
      </el-form-item>
      <el-form-item label="性别：" label-width="100px">
        <el-radio v-model="formData.name" label="1">男</el-radio>
        <el-radio v-model="formData.name" label="2">女</el-radio>
      </el-form-item>
      <el-form-item label="企业名称：" label-width="100px">
        <el-input v-model="formData.name" style="width:200px;"></el-input>
      </el-form-item>

      <el-form-item label="手机号码：" label-width="100px">
        <el-input v-model="formData.name" style="width:200px;"></el-input>
      </el-form-item>

      <el-form-item label="电子邮箱：" label-width="100px">
        <el-input v-model="formData.name" style="width:200px;"></el-input>
      </el-form-item>
      <el-form-item label="所在地区：" label-width="100px">
        <CityPicker></CityPicker>
      </el-form-item>
      <el-form-item label="详细地址：" label-width="100px">
        <el-input v-model="formData.name" style="width:550px;"></el-input>
      </el-form-item>
      <el-form-item label="个人简介：" label-width="100px">
        <!-- <el-input v-model="formData.name"></el-input> -->
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="formData.name"
          maxlength="60"
          show-word-limit
          style="width:550px;"
        ></el-input>
      </el-form-item>
      <el-button type="danger">提交</el-button>
    </el-form>
  </div>
</template>

<script>
import CityPicker from "@/components/Shopslist/cityPicker";

export default {
    components:{
    CityPicker
    },
  data() {
    return {
         formData: {
             name:""
         }
    };
  }
};
</script>
<style lang='scss' scoped>
</style>