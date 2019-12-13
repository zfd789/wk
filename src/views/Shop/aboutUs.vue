<!--  -->
<template>
  <div class="wid-w1240">
    <div class="content">
      <div class="right">
        <div>
          <img src="../../assets/images/u239.jpg" alt />
          <div class="buttom">
            <el-button>收藏</el-button>
            <el-button type="danger">获取电话</el-button>
          </div>
        </div>
      </div>
      <div class="left">
        <h2>{{usinfo.shop_name}}</h2>
        <p>{{usinfo.shop_desc}}</p>
      </div>
    </div>
    <div class="goods">
      <h2>擅长技能</h2>
      <ul class="good">
        <li>app开发</li>
        <li>app开发</li>
        <li>app开发</li>
      </ul>
    </div>
      <div class="goods">
      <h2>营业执照</h2>
      <p>
        <img src="../../assets/images/u20.jpg" alt="">
      </p>
    </div>
  </div>
</template>

<script>
import API from "@/api/shop";
export default {
  data() {
    return {
      usinfo:{}
    };
  },
  mounted() {
    this.aboutUs();
  },

  methods: {
    aboutUs() {
      let params = {
        id: 1 //店铺id
      };
      API.aboutUs(params).then(res => {
        this.usinfo = res.data
        console.log(res);
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.content {
  display: flex;
  padding: 20px;
  .left {
    margin: 40px;
    p {
      margin-top: 20px;
      text-indent: 2em;
      line-height: 30px;
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
.goods {
  padding: 20px;
  .good {
    display: flex;

    li {
      padding: 10px 30px;
      margin: 10px;
      border-radius: 20px;
      border: 1px solid rgba(249, 89, 89, 1);
      background-color: rgba(255, 244, 244, 1);
    }
  }
}
</style>