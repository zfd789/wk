<!-- 硬件高级筛选 -->
<template>
  <div>
    <ul class="params">
      <li v-for="item in Paramelist" :key="item.id">
        <el-select v-model="item.param_name" placeholder="请选择">
          <el-option
            v-for="tern in item.children"
            :key="tern.id"
            :label="tern.param_name"
            :value="tern.id"
          ></el-option>
        </el-select>
      </li>
    </ul>
  </div>
</template>

<script>
import API from "@/api/Shoplist";

export default {
  name: "Parameter",
  data() {
    return {
      Paramelist: []
    };
  },
  methods: {
    Parameterlist() {
      let params = {
        class_id: 1
      };
      API.parameter(params).then(res => {
        this.Paramelist = res.data;
        console.log(res);
      });
    }
  },
  mounted() {
    this.Parameterlist();
  }
};
</script>
<style lang='scss' scoped>
.params {
  display: flex;

  li {
    padding: 10px;
  }
}
</style>