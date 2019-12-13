<!--  -->
<template>
  <div>
    <div class="block">
      <el-carousel height="960px">
        <el-carousel-item v-for="(item,index) in shopBanners" :key="index">
          <img :src="item.url" alt class="shopbanner" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="case">
      <h1>品牌案例展示</h1>
      <p>耐斯特展览，品牌营销展厅总体策划、设计、施工及运营；为企业客户提供整体解决方案。</p>
      <p>沉浸式科技创新应用、专注交互体验、传承历史文化等设计理念。</p>
      <p>好展厅，搞起来！</p>
    </div>
    <div class="case_pic">
      <img src="../../assets/images/anli1.jpg" alt />
      <img src="../../assets/images/anli2.jpg" alt />
      <img src="../../assets/images/anli1.jpg" alt />
      <img src="../../assets/images/anli2.jpg" alt />
      <img src="../../assets/images/anli1.jpg" alt />
      <img src="../../assets/images/anli2.jpg" alt />
    </div>
    <div class="wid-w1240 color_bac goods">
      <h1>推荐商品</h1>
      <div class="allgoods">
        <div class="left">
          <div v-for="(item, index) in props1" :key="index" class="list">
            <Shop :props="item" @todetail="getGoodsid" />
          </div>
          <div class="introduce">
            <h3>公司介绍</h3>
            <p>
              广州火鹰信息科技有限公司（简称火鹰科技）创始于2005年，是国内领先的「互联网+」技术服务商，国家高新技术企业，业务涉及商用高端
              广州火鹰信息科技有限公司（简称火鹰科技）创始于2005年，是国内领先的「互联网+」技术服务商，国家高新技术企业，业务涉及商用高端
              广州火鹰信息科技有限公司（简称火鹰科技）创始于2005年，是国内领先的「互联网+」技术服务商，国家高新技术企业，业务涉及商用高端
              广州火鹰信息科技有限公司（简称火鹰科技）创始于2005年，是国内领先的「互联网+」技术服务商，国家高新技术企业，业务涉及商用高端
              广州火鹰信息科技有限公司（简称火鹰科技）创始于2005年，是国内领先的「互联网+」技术服务商，国家高新技术企业，业务涉及商用高端
            </p>
          </div>
        </div>

        <div class="right">
          <div>
            <!-- <p >
              <img src="../../assets/images/u239.jpg" alt />
            </p>-->
            <img src="../../assets/images/u239.jpg" alt />
            <div class="buttom">
              <el-button>收藏</el-button>
              <el-button type="danger">获取电话</el-button>
            </div>
          </div>
          <img src="../../assets/images/sheji.png" alt />
          <!-- <div>
            <img src="../../assets/images/sheji.png" alt="">
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Shop from "@/components/Shopslist/shop";
import API from "@/api/shop";

export default {
  components: {
    Shop
  },
  data() {
    return {
      shopBanners: [],
      props1: []
    };
  },
  methods: {
    // 获取推荐商品列表
    Allgoods() {
      let params = {
        id: 2, // 店铺id  只要传店铺id可以自动匹配 是服务还是硬件
        param: {
          page: 1
        }
      };
      API.Allgoods(params).then(res => {
        console.log(res);
      });
    },
    getGoodsid(id) {
      console.log(id);
      console.log(this.class_type);
      if (this.class_type == 2) {
        this.$router.replace({
          path: "/Shop/home",
          query: { id: id }
        });
      }
    }
  },
  mounted() {
    this.Allgoods()
    this.shopBanners = [
      {
        url:
          "http://192.168.2.32/uploads/shopBanners/20191204/084bc876b6b084516a3e062c42f9212b.jpg"
      },
      {
        url:
          "http://192.168.2.32/uploads/banner/20191204/891b3eba1b2bcb761748d08f32343fc7.jpg"
      }
    ];
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
.shopbanner {
  height: 960px;
}
.case {
  h1 {
    padding: 50px;
    font-size: 32px;
    font-weight: bold;
  }
  p {
    padding: 10px;
    font-size: 14px;
  }
}
.case_pic {
  display: flex;
  flex-wrap: wrap;
  img {
    display: block;
    width: 33.33%;
  }
}
.goods {
  text-align: left;
  h1 {
    padding: 20px 0px;
  }
  .allgoods {
    display: flex;
    justify-content: space-between;
    .left {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .list {
        width: 24%;
        margin: 0px 5px 5px;
      }

      .introduce {
        width: 100%;
        h3 {
          font-size: 18px;
          margin: 20px 0px;
          height: 44px;
          line-height: 44px;
          background: #fff;
          text-indent: 10px;
        }
        p {
          font-size: 14px;
          text-indent: 2em;
        }
      }
    }
    .right {
      width: 220px;
      background: #fff;
      margin-left: 20px;
      img {
        width: 220px;
        display: block;
        margin: 0 auto;
      }
      .buttom {
        margin: 15px 0px;
        margin-bottom: 40px;
        display: flex;
        justify-content: space-around;
      }
    }
  }
}
</style>