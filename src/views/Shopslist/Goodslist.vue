<!--  -->
<template>
  <div class="wid-w1240">
    <div class="container">
      <div class="container_l">
        <div class="brand_wrap">
          <div class="lable">
            <h3>当前位置:</h3>
          </div>
          <div class="brand list">
            <span v-for="item in this.list" :key="item.id">{{item.class_name}}</span>
          </div>
        </div>
        <div class="brand_wrap">
          <div class="lable">
            <h3>经营范围:</h3>
          </div>
          <div class="brand list">
            <span v-for="item in this.list" :key="item.id">{{item.class_name}}</span>
          </div>
        </div>
        <div class="brand_wrap">
          <div class="lable">
            <h3>品牌:</h3>
          </div>
          <div class="brand">
            <Brand @Brandid="getBrandid" />
          </div>
        </div>
        <div class="brand_wrap">
          <div class="lable">
            <h3>价格:</h3>
          </div>
          <div class="brand list">
            <!-- <span v-for="item in this.list" :key="item.id">{{item.class_name}}</span> -->
            <p>0-29999</p>
            <p>30000-39999</p>
            <p>40000-59999</p>
            <p>600000以上</p>
          </div>
        </div>
        <div class="brand_wrap">
          <div class="lable">
            <h3>供货商地区:</h3>
          </div>
          <div class="brand">
            <CityPicker @province_id="province_id" />
          </div>
        </div>

        <div class="brand_wrap">
          <div class="lable">
            <h3>硬件高级筛选:</h3>
          </div>
          <div class="brand">
            <Parameter />
          </div>
        </div>
        <div class="left">
          <div v-for="(item, index) in props" :key="index">
            <Shop :props="item" @todetail="getGoodsid" />
          </div>
        </div>
      </div>
      <div class="container_r">
        <div v-for="(item, index) in props1" :key="index">
          <Shop :props="item" @todetail="getGoodsid" />
        </div>
      </div>
    </div>

    <!-- 分页 -->
    <div class="pad_15 text_right">
      <el-pagination
        v-if="paginations.total > 0"
        @current-change="handleCurrentChange"
        :current-page.sync="paginations.page"
        :page-size="paginations.page_size"
        :layout="paginations.layout"
        :total="paginations.total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import Shop from "@/components/Shopslist/shop";
import Brand from "@/components/Shopslist/Brand";
import CityPicker from "@/components/Shopslist/cityPicker";
import Parameter from "@/components/Shopslist/parameter";
import API from "@/api/Shoplist";
export default {
  components: {
    Shop,
    CityPicker,
    Brand,
    Parameter // 硬件高级筛选
  },
  data() {
    return {
      props: [],
      list: [], //三级菜单列表
      props1: [],
      // brands: [],
      brand_id: "",
      //需要给分页组件传的信息
      paginations: {
        page: 1, // 当前位于哪页
        total: 0, // 总数
        page_size: 10, // 1页显示多少条
        layout: "total, prev, pager, next" // 翻页属性
      }
    };
  },
  methods: {
    getGoodsid(id) {
      console.log(id);
      this.$router.replace({
        path: "/Shopslist/Goodsdetail",
        query: { id: id }
      });
    },
    province_id(id) {
      console.log(id);
    },
    handleCurrentChange(page) {
      this.Goodslist();
    },
    getBrandid(id) {
      console.log(99);
      this.brand_id = id;
      this.Goodslist();
    },
    Goodslist() {
      let params = {
        page: this.paginations.page,
        goods_name: "",
        shop_name: "",
        bus_class_id: "",
        brand_id: this.brand_id,
        goods_class_id: "",
        province: "",
        city: ""
      };
      API.Goodslist(params).then(res => {
        console.log(res);
        this.props = res.data.data;
        this.paginations.total = res.data.sum;
      });
    }
  },
  mounted() {
    this.Goodslist();
    this.list = this.$route.query.list;
    this.props1 = [
      {
        goods_imgs:
          "http://192.168.2.32/uploads/goods/20191120/3e44850c533914f1b4fb0a0d7d81ff72.jpg",
        goods_price: "99",
        volume: 10,
        goods_desc: "qqqqqqqqqqqqqqqqpppppp",
        province_name: "江苏",
        city_name: "苏州"
      },
      {
        goods_imgs:
          "http://192.168.2.32/uploads/goods/20191120/3e44850c533914f1b4fb0a0d7d81ff72.jpg",
        goods_price: "99",
        volume: 10,
        goods_desc: "qqqqqqqqqqqqqqqq",
        province_name: "江苏",
        city_name: "苏州"
      }
    ];
    // this.brand();
  }
};
</script>
<style lang='scss' scoped>
.container {
  display: flex;
  justify-content: space-between;
  .container_l {
    width: 80%;
    .brand_wrap {
      display: flex;
      align-items: center;
      margin: 10px;
      .lable {
        width: 107px;
        //  background: #f8f8f8;
        height: 100%;
        h3 {
          width: 107px;
          font-size: 16px;
          //  background: #f8f8f8;
        }
      }
      .brand{
        display: flex;
        p{
          height: 40px;
          line-height: 40px;
          font-size: 16px;
          margin: 0px 10px ;
        }

      }
      .list {
        span {
          display: inline-block;
          font-size: 14px;
          margin: 5px;
          cursor: pointer;
        }
      }
    }
  }
  .container_r {
    width: 20%;
    display: flex;
    flex-wrap: wrap;
  }
}
.left {
  // text-align: left;
  display: flex;
  // justify-content: space-around;
  // flex-direction:row-reverse ;

  flex-wrap: wrap;
  div {
    width: 220px;
    margin: 10px;
  }
}
</style>