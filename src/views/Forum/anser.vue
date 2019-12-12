<!--  -->
<template>
  <div class="wid-w1240">
    <!-- <h2>苏州展厅装修找哪家公司做？</h2> -->
    <div class="main_right">
      <h1 class="title">苏州展厅公司哪家好？</h1>
      <div class="info_wrap">
        <div>
          <div class="block">
            <router-link to="/home">
              <el-avatar :size="25" :src="circleUrl"></el-avatar>
              <span>花花</span>
            </router-link>
          </div>
        </div>
        <div class="c_ccc">
          <span>回答9</span>
          <span>浏览1720</span>
          <span>2019-10-08</span>
        </div>
      </div>
      <p>想做一个企业展厅，苏州这边哪家公司做的比较专业呢？</p>
      <div class="title_w">
          <h2>我来帮他解答：</h2>
          <el-button plain type="primary">提交</el-button>
      </div>
      <el-card style="height: 510px;">
        <quill-editor
          v-model="content"
          ref="myQuillEditor"
          style="height: 500px;"
          :options="editorOption"
        ></quill-editor>
      </el-card>
      <p>已有1条回答</p>
      <div class="info_wrap">
        <div>
          <div class="block">
            <router-link to="/home">
              <el-avatar :size="25" :src="circleUrl"></el-avatar>
              <span>花花</span>
            </router-link>
          </div>
        </div>
        <div class="c_ccc">
          <span>1天前</span>
        </div>
      </div>
      <p>康师傅尽快哈科技打开了荆防颗粒代课老师荆防颗粒考虑到时间贷款洛杉矶观看</p>
    </div>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      editorOption: {},
      content: ""
    };
  }
};
</script>
<style lang='scss' scoped>
.main_right {
  width: 90%;
  padding: 20px;
  h2 {
    margin: 20px 0px;
  }
  p {
    margin: 15px 0px;
  }
  .title_w{
      display: flex;
      justify-content: space-between;
      .el-button{
  height: 40px;
      }
  }
  .info_wrap {
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    font-size: 14px;

    a:hover {
      color: #333;
    }
    .el-button {
      border-radius: 20px;
    }
    span {
      padding: 10px;
    }
  }
}
</style>