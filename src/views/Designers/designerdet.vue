<!--  -->
<template>
  <div class="wid-w1240 color_bac">
    <div class="designer_info">
      <div class="left">
        <img :src="designerinfo.designer_img" alt />
      </div>
      <div class="right">
        <h1>擅长风格：</h1>
        <p>{{designerinfo.good_at_style}}</p>
        <h1>自我介绍：</h1>
        <p>{{designerinfo.self_introduction}}</p>
        <h1>
          <el-button type="danger" @click="dialogTableVisible = true">找我设计</el-button>
        </h1>
      </div>
    </div>
    <div>
      <h1>擅长领域</h1>
      <ul class="goodfilds">
        <li class="goodfild">ui设计</li>
        <li class="goodfild">ui设计</li>
        <!-- <li>ui设计</li>
        <li>ui设计</li>
        <li>ui设计</li>-->
        <!-- <li>{{designerinfo.good_at_field}}</li> -->
      </ul>
      <h1>
        所在区域:
        <span>{{designerinfo.province_name}}{{designerinfo.city_name}}</span>
      </h1>
      <h1>作品展示：</h1>
      <ul class="goodfilds">
        <li class="work">
          <img src="../../assets/images/zuopin.jpg" alt class="image" />
        </li>
        <li class="work">
          <img src="../../assets/images/zuopin.jpg" alt class="image" />
        </li>
        <li class="work">
          <img src="../../assets/images/zuopin.jpg" alt class="image" />
        </li>
      </ul>
    </div>
    <!-- 弹窗 -->
    <el-dialog title="委托设计" :visible.sync="dialogTableVisible" width="35%">
      <el-form :model="form">
        <div class="form">
          <div class="left">
            <el-form-item >
              <el-input v-model="form.name" autocomplete="off" placeholder="设计需求"></el-input>
            </el-form-item>
            <el-form-item >
              <el-input v-model="form.name" autocomplete="off" placeholder="联系方式"></el-input>
            </el-form-item>
          </div>
          <div class="right">
            <el-button type="danger" @click="dialogFormVisible = false">找我设计</el-button>
          </div>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>-->
        <h1><span>不想等待？ 您也可以直接联系我们 </span>   400-881-02178</h1>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import API from "@/api/home";
export default {
  data() {
    return {
      dialogTableVisible: false, // 弹窗
      designerinfo: {},
      form: {}
    };
  },
  methods: {
    designersdetail() {
      let params = {
        id: 1
      };
      API.designersdet(params).then(res => {
        this.designerinfo = res.data;
        console.log(res);
      });
    }
  },
  mounted() {
    this.designersdetail();
  }
};
</script>
<style lang='scss' scoped>
.designer_info {
  margin: 20px 0px;
  display: flex;
  .left {
    width: 300px;
    height: 300px;
    background: #f2f2f2;

    img {
      width: 300px;
    }
  }
  .right {
    margin-left: 80px;
  }
}
.goodfilds {
  display: flex;
  .goodfild {
    padding: 10px 30px;
    margin: 10px;
    border-radius: 20px;
    border: 1px solid #ccc;
  }
  .work {
    width: 170px;
    height: 170px;
    margin: 10px;
    .image {
      display: block;
      width: 100%;
    }
  }
}
.form {
  display: flex;
  justify-content: space-around;
  .right{
    display: flex;
    align-items: center;
    // width: 300px;
    .el-button{
     
    }
  }
}
.dialog-footer {
  span{
    font-size: 16px;
    font-weight: normal;
  }
  h1 {
    text-align: center;
    background: #f2f2f2;
    padding: 15px 0px;
  }
}
</style>