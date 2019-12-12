<!--  -->
<template>
  <div>
    <h2>我发布的需求</h2>
    <div class="time">
      <h3>任务状态</h3>
      <p>全部</p>
      <p>已通过</p>
      <p>待审核</p>
      <p>未通过</p>
    </div>
    <div class="search">
      <el-form :inline="true" :model="Query" class="form-inline">
        <el-form-item>
          <el-input placeholder="标题关键字" v-model="Query.goods_name" class="input-with-select">
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
        <el-table-column prop="name" label="订单编号" align="center"></el-table-column>
        <el-table-column prop="name" label="标题" align="center"></el-table-column>
        <el-table-column prop="name" label="任务金额" sortable align="center"></el-table-column>
        <el-table-column prop="name" label="任务状态"  align="center"></el-table-column>
        <el-table-column label="操作"  align="center" width="300px">
          <el-button size="small" type="primary" plain @click="cheak">查看</el-button>
          <el-button size="small" type="success" plain>一键发布</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import API from '@/api/customer'

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
    cheak(){
      this.$router.push({
        path:"/Customer/customers/ListQuotations"
      })
    },
    requirelist() {
      let params = {
        page:1,
        is_checked:1 // 1 通过  2 未通过 3 未审核
      }
      API.myOrder(params).then(res=>{
        console.log(res)
      })
    },
    addGoods() {}
  },
  mounted(){
    this.requirelist()
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