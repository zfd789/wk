<!--  -->
<template>
  <div class="wid-w1240">
    <div class="content">
      <h1>选择商铺性质</h1>
      <div class="title">
        <div :class="isShow==1 ? active : '' " @click="personnal">个人认证</div>
        <div :class="isShow==2 ? active : '' " @click="business">企业认证</div>
      </div>
      <div>
        <el-form :model="formPerson" ref="formPerson">
          <el-form-item label="店铺LOGO" label-width="100px">
            <div class="block">
              <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
            </div>
          </el-form-item>
          <el-form-item label="店铺名称：" label-width="100px">
            <el-input placeholder="请输入真实姓名" style="width:220px;"></el-input>
          </el-form-item>
          <el-form-item label="经营类型：" label-width="100px">
            <el-select v-model="formPerson.class_name" placeholder="请选择">
              <el-option
                v-for="item in menulist"
                :key="item.id"
                :label="item.class_name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="联系人姓名：" label-width="100px">
            <el-input placeholder="请输入身份证号码" style="width:220px;"></el-input>
          </el-form-item>
          <el-form-item label="联系号码：" label-width="100px">
            <el-input placeholder="请输入身份证号码" style="width:220px;"></el-input>
          </el-form-item>
          <el-form-item label="所在区域：" label-width="100px">
            <el-input placeholder="请输入身份证号码" style="width:220px;"></el-input>
          </el-form-item>
          <el-form-item label="店铺简介：" label-width="100px">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea"
              style="width:220px;"
            ></el-input>
          </el-form-item>
          <!--  v-show="!businessInfo.card_back_dside" -->
          <!-- <el-form-item label="身份证人像面：">
          <img src="http://via.placeholder.com/280x160" alt />
          <img src="../../../assets/images/iden_01.jpg" alt />
        </el-form-item>
        <el-form-item label="身份证国徽面：">
          <img src="http://via.placeholder.com/280x160" alt />
          <img src="../../../assets/images/iden_01.jpg" alt />
        </el-form-item>
        <el-form-item label="手持证件照：">
          <img src="http://via.placeholder.com/280x160" alt />
          <img src="../../../assets/images/iden_01.jpg" alt />
          </el-form-item>-->
          <el-button type="danger" style="width:100px;">保存</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import API from "../../api/home";

export default {
  data() {
    return {
        menulist:[], 
        textarea:"",
        formPerson:{},
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",

      options: [
        {
          value: "1",
          label: "中国大陆居民身份证"
        },
        {
          value: "2",
          label: "港澳地区"
        },
        {
          value: "3",
          label: "台湾地区"
        },
        {
          value: "4",
          label: "海外地区"
        }
      ],
      value: "1",
      formBusniess: {},
      formPerson: {
        label: ""
      },
      active: "active",
      isShow: 1
    };
  },
  methods: {
    //   一进来 判断是否已认证 
    //   一级菜单
    classList(){
          API.classList().then(res => {
              console.log(res)
        this.menulist = res.data;
      });
    },
    personnal() {
      this.isShow = 1;
    },
    business() {
      this.isShow = 2;
    }
  },
  mounted(){
      this.classList()
  }
};
</script>
<style lang='scss' scoped>
.content {
  padding: 20px;
}
.title {
  width: 300px;
  //   margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
  div {
    border: 1px solid #f2f2f2;
    padding: 10px 30px;
    border-radius: 5px;
    cursor: pointer;
  }
  .active {
    border: 1px solid #f95959;
    color: #f95959;
  }
}
img {
  margin: 10px;
}
</style>