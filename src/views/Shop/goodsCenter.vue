<!--  -->
<template>
  <div class="wid-w1240 color_bac">
    <div >
      <h1>所有商品</h1>
      <div class="content">
        
        <div class="left" >
          <div v-for="(item,index) in Allgoods" :key="index">
            <Shop :props="item"></Shop>
          </div>
        </div>
        <div class="right">
          <div>

            <img src="../../assets/images/u239.jpg" alt />
            <div class="buttom">
              <el-button>收藏</el-button>
              <el-button type="danger">获取电话</el-button>
            </div>
          </div>
          <img src="../../assets/images/sheji.png" alt />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from "@/api/shop";
import Shop from "@/components/Shopslist/shop";
export default {
  components: {
    Shop
  },
  data() {
    return {
      Allgoods: []
    };
  },
  mounted() {
    this.goodslist();
  },

  methods: {
    goodslist() {
      let params = {
        id: 1,
        param: {
          page: 1
        }
      };
      API.Allgoods(params).then(res => {
        this.Allgoods = res.data.data;
        console.log(res);
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.content {
  display: flex;
  .left {
    width: 950px;
    display: flex;
    justify-content: space-between;
    div{
      width: 220px;
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
</style>