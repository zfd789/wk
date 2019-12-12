<!--  -->
<template>
  <div class="wid-w1240 color_bac">
    <div>
      <!-- 筛选 -->
      <div class="wrap" v-for="(item,index) in this.list" :key="index">
        <div class="lable">
          <h3>{{item.label}}:</h3>
        </div>
        <ul class="content">
          <li v-for="tern in item.chilren" :key="tern.id">{{tern.type}}</li>
        </ul>
      </div>
      <div class="wrap">
        <div class="lable">
          <h3>地区：</h3>
        </div>
        <div class="content">
          <CityPicker></CityPicker>
        </div>
      </div>
      <!-- 表格 -->
      <div class="wrap">
        <div class="list">
          <!-- <ul v-for="(item,index) in orderlist" :key="index">
            <li>
              <p>{{item.price}}</p>
             <h4>{{item.title}}</h4>
            </li>
            <li>
                {{item.time}}{{item.volum}}
            </li>
          </ul>-->
          <el-table :data="orderlist" style="width: 100%">
            <el-table-column label="标题" align="center">
              <template slot-scope="scope">
                <h4>{{scope.row.title}}</h4>
              </template>
            </el-table-column>
            <el-table-column label="金额" sortable align="center">
              <template slot-scope="scope">
                <span class="price">{{scope.row.price}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="time" label="截止时间" align="center"></el-table-column>
            <el-table-column prop="volum" label="浏览量" align="center"></el-table-column>
          </el-table>
        </div>
        <div class="adv">
          <div class="advantage">
            <!-- <h3>我们的优势</h3> -->
            <!-- <img src="../../assets/images/youshi.png" alt /> -->
          </div>
          <div>
            <img src="../../assets/images/anli.png" alt />
          </div>
          <div>
            <!-- <img src="../../assets/images/renwu.png" alt /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CityPicker from "@/components/Shopslist/cityPicker";

export default {
  components: {
    CityPicker
  },
  data() {
    return {
      list: [],
      orderlist: []
    };
  },
  methods: {
    changename({ row, column, rowIndex, columnIndex }) {
      console.log(columnIndex);
      if ((columnIndex = 1)) {
        return "red";
      }
    }
  },
  mounted() {
    this.list = [
      {
        label: "服务范围",
        chilren: [
          {
            type: "不限"
          },
          {
            type: "设计服务"
          },
          {
            type: "多媒体硬件"
          },
          {
            type: "多媒体内容"
          },
          {
            type: "多媒体集成"
          },
          {
            type: "广告制作"
          }
        ]
      },
      {
        label: "价格",
        chilren: [
          {
            type: "不限"
          },
          {
            type: "100-1000"
          },
          {
            type: "1000-3000"
          },
          {
            type: "3000-5000"
          },
          {
            type: "5000以上"
          }
        ]
      }
    ];
    this.orderlist = [
      {
        price: "1000-3000",
        title: "公司展厅设计",
        time: "26天10小时后结束报价",
        volum: "446人浏览"
      },
      {
        price: "1000-3000",
        title: "公司展厅设计",
        time: "26天10小时后结束报价",
        volum: "446人浏览"
      },
      {
        price: "1000-3000",
        title: "公司展厅设计",
        time: "26天10小时后结束报价",
        volum: "446人浏览"
      },
      {
        price: "1000-3000",
        title: "公司展厅设计",
        time: "26天10小时后结束报价",
        volum: "446人浏览"
      },
      {
        price: "1000-3000",
        title: "公司展厅设计",
        time: "26天10小时后结束报价",
        volum: "446人浏览"
      },
      {
        price: "1000-3000",
        title: "公司展厅设计",
        time: "26天10小时后结束报价",
        volum: "446人浏览"
      },
      {
        price: "1000-3000",
        title: "公司展厅设计",
        time: "26天10小时后结束报价",
        volum: "446人浏览"
      },
      {
        price: "1000-3000",
        title: "公司展厅设计",
        time: "26天10小时后结束报价",
        volum: "446人浏览"
      },
      {
        price: "1000-3000",
        title: "公司展厅设计",
        time: "26天10小时后结束报价",
        volum: "446人浏览"
      },
      {
        price: "1000-3000",
        title: "公司展厅设计",
        time: "26天10小时后结束报价",
        volum: "446人浏览"
      },
      {
        price: "1000-3000",
        title: "公司展厅设计",
        time: "26天10小时后结束报价",
        volum: "446人浏览"
      }
    ];
  }
};
</script>
<style lang='scss' scoped>
.wrap {
  display: flex;
//   align-items: center;
  font-size: 14px;
  margin: 1px;
  //   background: pink;
  justify-content: space-between;
  .lable {
    width: 107px;
    background: #f8f8f8;
    height: 70px;
    line-height: 70px;
    text-align: center;
  }
  .content {
    display: flex;
    background: #fff;
    justify-content: flex-start;
    width: 100%;
    height: 70px;
    line-height: 70px;
    li {
      margin: 0px 10px;
    }
  }
  .list {
    width: 73%;
    //   background: chocolate;
    margin: 20px 0px;
    // ul {
    //   height: 70px;
    //   line-height: 70px;
    //   display: flex;
    //   justify-content: space-between;
    //   padding: 20px;
    //   li {
    //     display: flex;
    //     p {
    //       margin: 0px 60px;
    //     }
    //   }
    // }
    .price {
      color: red;
    }
  }
  .adv {
    width: 300px;
    margin: 20px 0px;;
    // 优势
    .advantage {
    }
  }
}
</style>