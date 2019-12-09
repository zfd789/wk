<!--  -->
<template>
  <div class="wid-w1240 color_bac">
    <div class="content">
      <div class="content_l">
        <div class="main_img">
          <img src="../../assets/images/good.jpg" alt />
        </div>
        <div class="child_img">
          <img src="../../assets/images/good1.jpg" alt />
          <img src="../../assets/images/good.jpg" alt />
        </div>
      </div>
      <div class="content_r">
        <h1>BW550C松下投影机 陕西投影机总代理</h1>
        <div class="special">
          <p>
            价格(元)：
            <span>112</span>
          </p>
          <p>起订量(个)：1</p>
        </div>
        <div class>
          数量：
          <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        </div>
        <div>
          <el-button type="danger" @click="toOrder">立即询价</el-button>
          <el-button type="danger">获取号码</el-button>
        </div>
      </div>
    </div>
    <div class="content1">
      <div class="content1_l">
        <h1>店铺信息</h1>
        <div class="shop">
          <h2>西安本心科技有限公司</h2>
          <p>联系人： 源泉</p>
          <p>所在地区： 陕西-西安市</p>
          <p>
            服务： 已通过执照认证
            <br />
            <span>已通过真实姓名认证</span>
          </p>
          <div class="button">
            <el-button type="danger" plain>查看店铺</el-button>
          </div>
        </div>
        <!-- shop  @todetail="getGoodsid" -->
        <h1>店内热销</h1>
        <div v-for="(item, index) in props1" :key="index" class="hotshop">
          <Shop :props="item" />
        </div>
      </div>
      <div class="content1_r">
        <h1>产品详情</h1>
        <div class="params">
          <ul >
            <li>亮度：4000流明</li>
            <li>亮度：4000流明</li>
            <li>亮度：4000流明</li>
            <li>亮度：4000流明</li>
            <li>亮度：4000流明</li>
            <li>亮度：4000流明</li>
          </ul>
          <div>
            <img src="../../assets/images/fuwenben.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from "@/api/Shoplist";
import Shop from "@/components/Shopslist/shop";
//  GoodsInfo
export default {
  components: {
    Shop
  },
  data() {
    return {
      good_id: "",
      num: 1,
      props1: []
    };
  },
  methods: {
    // 区 去询价
    toOrder(){
      console.log('----------------')
      this.$router.push({
        path:'/Shopslist/enquiry',
        query:{id:this.good_id}
      })
    },
    getGoodsid(id) {
      console.log(id);
      this.$router.replace({
        path: "/Shopslist/Goodsdetail",
        query: { id: id }
      });
    },
    handleChange(value) {
      console.log(value);
    },
    GoodsInfo() {
      let param = {
        id: this.good_id
      };
      API.GoodsInfo(param).then(res => {
        console.log(res);
      });
    }
  },
  mounted() {
    this.good_id = this.$route.query.id;
    this.GoodsInfo();
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
      }
    ];
  }
};
</script>
<style lang='scss' scoped>
.content {
  display: flex;
  height: 586px;
  font-size: 14px;
  .content_l {
    margin: 20px 0px;
    width: 400px;
    height: 400px;
    //part1
    img {
      width: 400px;
    }
    .child_img {
      display: flex;
      img {
        display: block;
        width: 77px;
        margin: 10px;
    border: 1px solid #f2f2f2;
      }
    }
  }
  .content_r {
    // background: pink;
    margin: 20px;
    text-align: left;
    div {
      margin: 20px 0px;
    }
    .special {
      background: #fff;

      text-align: left;
      text-indent: 1em;
      p {
        height: 40px;
        line-height: 40px;
      }
    }
  }
}
.content1 {
  display: flex;
  font-size: 14px;
  .content1_l {
    text-align: left;

    .shop {
      width: 220px;
      height: 260px;
      background: #fff;
      padding: 20px;
      margin: 20px 0px;
      p {
        margin: 20px 0px;
      }
      span {
        text-indent: 3em;
        display: inline-block;
      }
      .button {
        margin: 30px 0px;
        text-align: center;
      }
    }
    .hotshop {
      margin: 20px 0px;
    }
  }
  .content1_r {
    margin:0px 40px;
    text-align: left;
    width: 70%;
    .params{
      margin: 40px;
      ul{
        display: flex;
        flex-wrap: wrap;
        li{
          width: 200px;
          height: 40px;
          line-height: 40px;
        }
      }
    }
  }
}
</style>