<!--  -->
<template>
  <div>
    <h2>店铺基本设置</h2>
    <el-form :model="formData" ref="formData">
      <el-form-item label="商铺名称：" label-width="100px">
        <el-input placeholder="请输入商铺名称" style="width:220px;"></el-input>
      </el-form-item>
      <el-form-item label="商铺简介："  label-width="100px">
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="textarea"
          :rows="14"
          maxlength="300"
          show-word-limit
        ></el-input>
      </el-form-item>
      <el-button type="danger">提交</el-button>
    </el-form>
  </div>
</template>

<script>
import API from '@/api/customer'

export default {
  data() {
    return {
      textarea: "",
      formData:{}

    };
  },
  methods:{
    save(){
      API
    },
   shopInfo(){
     API.myShopBaseInfo().then(res=>{
       console.log(res)
     })
   }
  },
  mounted(){
    this.shopInfo()
  }
};
</script>
<style lang='scss' scoped>
h2{
    margin-bottom: 50px;
}
</style>