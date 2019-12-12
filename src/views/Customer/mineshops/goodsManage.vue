<!--  -->
<template>
  <div>
    <h2>商品管理</h2>
    <div class="search">
      <el-form :inline="true" :model="Query" class="form-inline">
        <el-form-item>
          <el-input placeholder="商品名称" v-model="Query.goods_name" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="addGoods">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 表格 -->
    <div>
      <el-table :data="tableData" stripe border style="width: 100%">
        <el-table-column label="商品图片" width="80" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.goods_imgs" class="avatar" style="width:50px;height:50px;" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="商品名称" width="180" align="center"></el-table-column>
        <el-table-column prop="name" label="商品价格" sortable align="center"></el-table-column>
        <el-table-column prop="name" label="商品分类" align="center"></el-table-column>
        <el-table-column prop="name" label="状态" align="center"></el-table-column>
        <el-table-column label="操作" sortable align="center" width="300px">
          <el-button size="small" type="info" plain @click="Shelf">下架</el-button>
          <el-button size="small" type="primary" plain>编辑</el-button>
          <el-button size="small" type="danger" plain @click="del">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
 
<script>
import API from "@/api/customer";

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
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      Query: {
        goods_name: ""
      }
    };
  },
  methods: {
    goodsList() {
      let params = {
        page: 1
      };
      API.myGoods(params).then(res => {
        console.log(res);
      });
    },
    // 删除
    del() {
      let params = {
        id:1
      }
      API.delGoods(params).then(res => {
        console.log(res);
      });
    },
    // 商品上下架
    Shelf(){
      let params = {
        id:1,
        param:{
          lower_shelf:1 // 1是上架  2是下架
        }
      }
      API.changeShelf(params).then(res=>{
        console.log(res)
      })
    },
    addGoods() {
      this.$router.push({
        path: "/Customer/mineshops/addGood"
      });
    }
  },
  mounted() {
    this.goodsList();
  }
};
</script>
<style lang='scss' scoped>
.search {
  margin: 20px 0px;
}
</style>