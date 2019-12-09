<!--  -->
<template>
  <div>
    <div class="title">
      <div :class="isShow==1 ? active : '' " @click="personnal">个人认证</div>
      <div :class="isShow==2 ? active : '' " @click="business">企业认证</div>
    </div>
    <div v-show="isShow==1">
      <el-form :model="formPerson" ref="formPerson">
        <el-form-item label="真实姓名：" label-width="100px">
          <el-input placeholder="请输入真实姓名" style="width:220px;"></el-input>
        </el-form-item>
        <el-form-item label="证件类型：" label-width="100px">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="身份证号码：" label-width="100px">
          <el-input placeholder="请输入身份证号码" style="width:220px;"></el-input>
        </el-form-item>
        <!--  v-show="!businessInfo.card_back_dside" -->
        <el-form-item label="身份证人像面：">
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
        </el-form-item>
        <el-button type="danger" style="width:100px;">保存</el-button>
      </el-form>
    </div>
    <div v-show="isShow==2">
      <el-form :model="formBusniess" ref="formPerson">
        <el-form-item label="企业全名：" label-width="150px">
          <el-input placeholder="请输入企业全名" style="width:220px;"></el-input>
        </el-form-item>
        <el-form-item label="统一社会信用代码：" label-width="150px">
          <el-input placeholder="请输入统一社会信用代码" style="width:220px;"></el-input>
        </el-form-item>
        <el-form-item label="法人姓名：" label-width="150px">
          <el-input placeholder="请输入法人姓名" style="width:220px;"></el-input>
        </el-form-item>
        <el-form-item label="法人证件号码：" label-width="150px">
          <el-input placeholder="请输入证件号码" style="width:220px;"></el-input>
        </el-form-item>
        <el-form-item label="证件类型：" label-width="150px">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <!--  v-show="!businessInfo.card_back_dside" -->
        <el-form-item label="营业执照照片：">
          <img src="http://via.placeholder.com/280x160" alt />
          <img src="../../../assets/images/iden_01.jpg" alt />
        </el-form-item>
        <el-form-item label="身份证人像面：">
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
        </el-form-item>
        <el-button type="danger" style="width:100px;">保存</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    personnal() {
      this.isShow = 1;
    },
    business() {
      this.isShow = 2;
    }
  }
};
</script>
<style lang='scss' scoped>
.title {
  width: 300px;
  margin: 0 auto;
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