<!--  -->
<template>
  <div class="wid-w1240 color_bac">
    <el-form :model="form" ref="form">
      <h1>发布问题</h1>
      <el-form-item label="标题" label-width="100px">
        <el-input v-model="form.user" style="width:220px;"></el-input>
      </el-form-item>
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
      <el-form-item label="问题描述" label-width="100px"></el-form-item>
      <el-form-item>
        <el-card style="height: 510px;">
          <quill-editor
            v-model="content"
            ref="myQuillEditor"
            style="height: 500px;"
            :options="editorOption"
          ></quill-editor>
        </el-card>
      </el-form-item>
      <el-button type="danger">提交</el-button>
    </el-form>
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
      content: "",

      form: {
        user: ""
      }
    };
  }
};
</script>
<style lang='scss' scoped>
.el-button{
margin-bottom: 60px;
}
</style>