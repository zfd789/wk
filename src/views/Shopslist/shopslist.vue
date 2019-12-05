<!--  -->
<template>
  <div class="wid-w1240 color_bac">
    <div class="container">
      <div class="container_l">
        <div class="brand_wrap">
          <div class="lable">
            <h3>擅长领域:</h3>
          </div>
          <div class="brand list">
            <span v-for="item in this.list" :key="item.id">{{item.class_name}}</span>
          </div>
        </div>
        <div class="brand_wrap">
          <div class="lable">
            <h3>团队类型:</h3>
          </div>
          <div class="brand">
            <p>企业</p>
            <p>个人</p>
          </div>
        </div>
        <div class="brand_wrap">
          <div class="lable">
            <h3>成立时间:</h3>
          </div>
          <div class="brand">
            <p>不限</p>
            <p>1-3年</p>
            <p>4-6年</p>
            <p>6年以上</p>
          </div>
        </div>
        <div class="brand_wrap">
          <div class="lable">
            <h3>企业资质:</h3>
          </div>
          <div class="brand">
            <p>不限</p>
            <p>展览设计施工一体化</p>
            <p>展览设计施工一体化</p>
            <p>展览设计施工一体化</p>
          </div>
        </div>
        <div class="brand_wrap">
          <div class="lable">
            <h3>资质等级:</h3>
          </div>
          <div class="brand">
            <p>不限</p>
            <p>一级资质标准</p>
            <p>二级资质标准</p>
            <p>三级资质标准</p>
          </div>
        </div>
        <div class="brand_wrap">
          <div class="lable">
            <h3>所在地区:</h3>
          </div>
          <div class="brand">
            <CityPicker></CityPicker>
          </div>
        </div>
        <div class="brand_wrap">
          <div class="lable">
            <h3>诚信承诺:</h3>
          </div>
          <div class="brand">
            <p>不限</p>
            <p>先设计后付款</p>
            <p>先订金后设计</p>
            <p>保证完成</p>
          </div>
        </div>
        <div class="brand_wrap">
          <div class="wrap">
            <div v-for="(item, index) in props" :key="index" class="list">
              <Shop :props="item" @todetail="getGoodsid" />
            </div>
          </div>
        </div>
      </div>
      <div class="container_r">
        <div v-for="(item, index) in props1" :key="index" class="hotshop">
          <Shop :props="item" />
        </div>
      </div>
    </div>

    <!-- 分页 -->
    <div class="pad_15 text_right">
      <el-pagination
        v-if="paginations.total > 0"
        @size-change="paginations.page_size"
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
import API from "@/api/Shoplist";
export default {
  components: {
    Shop,
    CityPicker,
    Brand
  },
  data() {
    return {
      // brands: [],
      class_type: "",
      list: [],
      props: [],
      props1: [],
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
      console.log(this.class_type);
      if (this.class_type == 2) {
        this.$router.replace({
          path: "/Shop/home",
          query: { id: id }
        });
      }
    },
    handleCurrentChange() {
      this.Shoplist();
    },
    Shoplist() {
      let params = {
        page: this.paginations.page,
        type: "",
        province_id: "",
        city_id: "",
        area_id: "",
        qualification_level: "",
        enterprise_qualification: "",
        sincerity_id: "",
        class_id: ""
      };
      API.Shoplist(params).then(res => {
        console.log(res);
        this.props = res.data.list;
        this.paginations.total = res.data.sum;
      });
    }
  },
  mounted() {
    this.Shoplist();
    this.list = this.$route.query.list;
    this.class_type = this.$route.query.info.class_type;
    console.log(this.class_type);
    // this.brand();
    this.props1 = [
      {
        goods_imgs:
          "http://192.168.2.32/uploads/goods/20191203/5473b084e5d4811de25413d67e44b5fe.jpg",
        goods_price: "99",
        volume: 10,
        goods_desc: "qqqqqqqqqqqqqqqqpppppp",
        province_name: "江苏",
        city_name: "苏州"
      },
      {
        goods_imgs:
          "http://192.168.2.32/uploads/goods/20191203/5473b084e5d4811de25413d67e44b5fe.jpg",
        goods_price: "99",
        volume: 10,
        goods_desc: "qqqqqqqqqqqqqqqq",
        province_name: "江苏",
        city_name: "苏州"
      },
      {
        goods_imgs:
          "http://192.168.2.32/uploads/goods/20191203/5473b084e5d4811de25413d67e44b5fe.jpg",
        goods_price: "99",
        volume: 10,
        goods_desc: "qqqqqqqqqqqqqqqq",
        province_name: "江苏",
        city_name: "苏州"
      }
    ];
  }
};
</script>
<style lang='scss' scoped>
.container {
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
  .container_l {
    width: 80%;
    // margin: 0 auto;
    .brand_wrap {
      display: flex;
      align-items: center;
      margin: 1px;
      .wrap {
        display: flex;
        flex-wrap: wrap;
        .list {
          width: 24%;
          margin: 10px 10px 10px 0px;
        }
      }

      // background:#fff;
      .hotshop {
        // margin-bottom: 20px;
        // margin: 10px;
      }
      .lable {
        width: 107px;
        background: #f8f8f8;
        height: 70px;
        line-height: 70px;
        h3 {
          // width: 107px;
          font-size: 16px;
          //  background: #f8f8f8;
        }
      }
      .brand {
        display: flex;
        background: #fff;
        width: 100%;
        height: 70px;
        align-items: center;
        border-bottom: rgba(244, 244, 244, 1);
        // line-height: 100px;
        p {
          height: 40px;
          line-height: 40px;
          font-size: 16px;
          margin: 0px 10px;
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
    width: 15%;
    display: flex;
    flex-wrap: wrap;
    .hotshop {
      // margin-bottom: 10px;
      // margin: 10px;
    }
  }
}
.left {
  display: flex;
  // justify-content: space-around;
  // text-align: left;
  // justify-content: space-between;
  // flex-direction:row-reverse ;

  flex-wrap: wrap;
  div {
    width: 220px;
    margin: 10px 10px 10px 0px;
  }
}
</style>