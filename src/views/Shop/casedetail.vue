<!--  -->
<template>
  <div class="wid-w1240">
    <div class="content">
      <div class="left">
        <img src="../../assets/images/u35.png" alt="">
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
</template>

<script>
import API from '@/api/shop'

export default {
  data() {
    return {};
  },
  methods: {
    getcasedetail() {
      let params = {
        id: 1 //案例id
      };
      API.casedetail(params).then(res => {
        console.log(res);
      });
    }
  },
  mounted() {
    this.getcasedetail();
  }
};
</script>
<style lang='scss' scoped>
.content{
  display: flex;
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