<!--  -->
<template>
  <div>
    <h2>我收藏的店铺</h2>
    <div class="time">
      <h3>店铺类型</h3>
      <p>全部</p>
      <p>个人店铺</p>
      <p>企业店铺</p>
    </div>
    <div class="search">
      <el-form :inline="true" :model="Query" class="form-inline">
        <el-form-item>
          <el-input placeholder="店铺名称" v-model="Query.goods_name" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="addGoods">发布采购信息</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 表格 -->
    <div>
      <el-table :data="tableData" stripe border style="width: 100%">
        <el-table-column  label="店铺头像" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.goods_imgs" class="avatar" style="width:50px;height:50px;" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="店铺名称" align="center"></el-table-column>
        <el-table-column prop="name" label="所在地区" sortable align="center"></el-table-column>
        <el-table-column prop="name" label="店铺类型" sortable align="center"></el-table-column>
        <el-table-column prop="name" label="收藏时间" sortable align="center"></el-table-column>
        <el-table-column label="操作" align="center" width="300px">
          <el-button size="small" type="primary" plain>查看</el-button>
          <el-button size="small" type="warning" plain>取消收藏</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "花花",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "花花",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      Query: {
        goods_name: ""
      }
    };
  },
  methods: {
    goodsList() {},
    addGoods() {}
  }
};
</script>
<style lang='scss' scoped>
.search {
  margin: 20px 0px;
}
.time {
  display: flex;
  font-size: 14px;
  align-items: center;
  h3 {
    margin: 20px 10px;
  }
  p {
    margin: 10px;
  }
}
</style>