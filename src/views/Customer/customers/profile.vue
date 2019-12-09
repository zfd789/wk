<!--  -->
<template>
  <div>
    <div class="wrap">
      <div class="info">
        <p>
          <img src="../../../assets/images/sjspic.jpg" alt />
        </p>
        <div class="info_name">
          <h2>花花</h2>
          <ul>
            <li>实名</li>
            <li>手机</li>
            <li>邮箱</li>
          </ul>
        </div>
      </div>
      <div class="sign">
        <p>
          <router-link to="/Customer/setting">编辑</router-link>
        </p>

        <div class="signed">
          <el-button type="danger" style="width:140px;">签到</el-button>
          <p class="c_ccc">签到可领取10级分</p>
        </div>
      </div>

      <div>
        <div class="title">
          <h2>我收藏的店铺</h2>
          <p>查看所有></p>
        </div>
        <div class="shoplogo">
          <p v-for="(item, index) in caselist" :key="index">
            <img :src="item.pic" alt />
          </p>
        </div>
      </div>

      <div>
        <div class="title">
          <h2>我收藏的需求</h2>
          <p>查看所有></p>
        </div>
        <div class="shoplogo">
          <div class="price_wrap">
            <span>￥100-3000</span>
            <h4>公司展厅设计</h4>
          </div>
          <div class="galance">446人浏览</div>
        </div>
      </div>

      <!-- <div></div> -->

      <!-- <div>
        <div class="title">
          <h2>我收藏的需求</h2>
          <p>查看所有></p>
        </div>
        <div class="shoplogo">
         <div class="galance">5分钟前</div>
          <div class=" price_wrap">
            <span> 有人回答了你的问题 </span>
            <span> 苹果为什么这样红？ </span>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caselist: []
    };
  },
  mounted() {
    this.caselist = [
      {
        pic:
          "http://192.168.2.32/uploads/designer/20191205/7fa9111cedaf722755ce71cf27b7f24f.jpg"
      },
      {
        pic:
          "http://192.168.2.32/uploads/designer/20191205/7fa9111cedaf722755ce71cf27b7f24f.jpg"
      },
      {
        pic:
          "http://192.168.2.32/uploads/designer/20191205/7fa9111cedaf722755ce71cf27b7f24f.jpg"
      },
      {
        pic:
          "http://192.168.2.32/uploads/designer/20191205/7fa9111cedaf722755ce71cf27b7f24f.jpg"
      },
      {
        pic:
          "http://192.168.2.32/uploads/designer/20191205/7fa9111cedaf722755ce71cf27b7f24f.jpg"
      },
      {
        pic:
          "http://192.168.2.32/uploads/designer/20191205/7fa9111cedaf722755ce71cf27b7f24f.jpg"
      },
      {
        pic:
          "http://192.168.2.32/uploads/designer/20191205/7fa9111cedaf722755ce71cf27b7f24f.jpg"
      },
      {
        pic:
          "http://192.168.2.32/uploads/designer/20191205/7fa9111cedaf722755ce71cf27b7f24f.jpg"
      },
      {
        pic:
          "http://192.168.2.32/uploads/designer/20191205/7fa9111cedaf722755ce71cf27b7f24f.jpg"
      },
      {
        pic:
          "http://192.168.2.32/uploads/designer/20191205/7fa9111cedaf722755ce71cf27b7f24f.jpg"
      }
    ];
  }
};
</script>
<style lang='scss' scoped>
.wrap {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  flex-wrap: wrap;
  height: 600px;
  div {
    width: 400px;
    height: 242px;
    // background: #f4f4f4;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      line-height: 50px;
      // border-bottom: 1px solid #f2f2f2;
      border-bottom: 1px solid rgb(240, 234, 234);
      margin-bottom: 20px;
      width: 100%;
      p {
        cursor: pointer;
      }
    }
    .shoplogo {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      p {
        width: 70px;
        height: 70px;
        img {
          width: 70px;
          height: 70px;
          display: block;
        }
      }
      // 我收藏的需求
      .price_wrap {
        display: flex;
        width: 300px;
        span {
          margin: 0px 7px;
        }
      }
      .galance {
        width: 100px;
      }
    }
  }
  .info {
    display: flex;
    .info_name {
      margin: 30px;
      ul {
        display: flex;
        margin-top: 70px;
        li {
          width: 40px;
          text-align: center;
          padding: 5px 10px;
          border: 1px solid #f2f2f2;

          margin-right: 10px;
        }
      }
    }
    p {
      width: 170px;
      height: 170px;
    }
  }
  .sign {
    text-align: right;
  
    .signed {
      margin-top: 100px;
      p {
        margin: 10px;
      }
    }
  }
}
</style>