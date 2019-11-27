<!--  -->
<template>
  <div class="wid-w1240">
    <h1>优质供应商</h1>
    <div class="buyer">
      <div class="buyer_left">
        <div class="block">
          <el-carousel height="120px" indicator-position="none" arrow="never">
            <el-carousel-item v-for="item in 4" :key="item">
              <h1>{{ item }}</h1>
              <!-- <img src="../../assets/images/home/banner0.jpg" alt=""> -->
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="content_wrap">
          <div class="content" v-for="(item,index) in buyerList" :key="index">
            <dl>
              <dt>
                <h3>展厅服务的需求</h3>
                <p>查看更多></p>
              </dt>
              <!-- <dt>
                <div>
                  <span>￥1000</span>
                  <span>logo设计征集</span>
                </div>
                <div>
                  <span>5</span>
                  <span>人报价</span>
                </div>
              </dt> -->
            </dl>
          </div>
        </div>
      </div>
      <div class="buyer_right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buyer",
  data() {
    return {
      buyerList: []
    };
  },
  mounted() {
    this.buyerList = [
      {
        id: 1,
        title: "展厅服务的需求",
        chilren: [
          {
            price: "1000",
            label: "logo设计征集",
            num: "5"
          }
        ]
      },
      {
        id: 2,
        title: "展厅硬件的需求",
        chilren: [
          {
            price: "1000",
            label: "logo设计征集",
            num: "5"
          }
        ]
      },
      {
        id: 3,
        title: "软件定制的需求",
        chilren: [
          {
            price: "1000",
            label: "logo设计征集",
            num: "5"
          }
        ]
      },
      {
        id: 4,
        title: "空间设计的需求",
        chilren: [
          {
            price: "1000",
            label: "logo设计征集",
            num: "5"
          }
        ]
      },
      {
        id: 5,
        title: "平面设计的需求",
        chilren: [
          {
            id: 11,
            price: "1000",
            label: "logo设计征集",
            num: "5"
          }
        ]
      },
      {
        id: 6,
        title: "企业服务的需求",
        chilren: [
          {
            id: 11,
            price: "1000",
            label: "logo设计征集",
            num: "5"
          }
        ]
      }
    ];
  }
};
</script>
<style lang='scss' scoped>
.buyer {
  display: flex;
  height: 700px;

  .buyer_left {
    width: 790px;
    .content_wrap {
      display: flex;
      flex-wrap: wrap;

      .content {
        //  width: 395px;
        width: 393px;
        height: 183px;
        border: 1px solid #dddddd;
        dt {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
  .buyer_right {
    width: 380px;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>