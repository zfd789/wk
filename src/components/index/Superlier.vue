<!--  -->
<template>
  <div class="wid-w1240 color_bac">
    <h1>优质供应商</h1>
    <div class="superlier_wrap">
      <div class="superlier" v-for="(item,index)  in high_supplier" :key="index">
        <div class="superlier_left">
          <h2>| {{item.class_name}}</h2>
          <div>{{item.describe}}</div>
        </div>
        <div class="superlier_right" v-for="tern in item.children" :key="tern.id">
          <h2></h2>
          <div class="content" v-show="tern.shop_pic == tern.shop_pic">
            <!-- <img src="../../assets/images/home/banner0.jpg" alt /> -->

            <p>{{tern.title}}</p>
            <p>{{tern.shop_pic}}</p>
            <div>
              <h3>{{tern.shop_name}}</h3>
              <div class="business">
                <h6>{{tern.shop_name}}</h6>
                <p>{{tern.title}}</p>
                <p>{{tern.shop_pic}}</p>
              </div>
            </div>
          </div>
        </div>
        <div v-for="(tt,index) in item.shop_pics" :key="index">
          <div class="business_logo" >
            <!-- <p>{{aa.pic}} ----------</p> -->
            {{tt}}
          </div>
        </div>
      </div>
      <!-- <div class="superlier">
        <div class="superlier_left">
          <h2>| 设计服务</h2>
          <div>企业展厅、科技展厅,企业展厅、科技展厅,企业展厅、科技展厅</div>
        </div>
        <div class="superlier_right">
          <h2>工业设计</h2>
          <div class="content">
            <img src="../../assets/images/home/banner0.jpg" alt />

            <div>
              <h3>工业设计-3套服务方案</h3>
              <div class="business">
                <h6>苏州**品牌设计有限公司</h6>
                <p>竹有七德，“正直、奋进,竹有七德，“正直、奋进,竹有七德，“正直、奋进...</p>
              </div>
            </div>
          </div>
          <div class="business_logo">
            <img src="../../assets/images/home/business.jpg" alt />
            <img src="../../assets/images/home/business.jpg" alt />
            <img src="../../assets/images/home/business.jpg" alt />
            <img src="../../assets/images/home/business.jpg" alt />
          </div>
        </div>
      </div>
      <div class="superlier">
        <div class="superlier_left">
          <h2>| 设计服务</h2>
          <div>企业展厅、科技展厅,企业展厅、科技展厅,企业展厅、科技展厅</div>
        </div>
        <div class="superlier_right">
          <h2>工业设计</h2>
          <div class="content">
            <img src="../../assets/images/home/banner0.jpg" alt />

            <div>
              <h3>工业设计-3套服务方案</h3>
              <div class="business">
                <h6>苏州**品牌设计有限公司</h6>
                <p>竹有七德，“正直、奋进,竹有七德，“正直、奋进,竹有七德，“正直、奋进...</p>
              </div>
            </div>
          </div>
          <div class="business_logo">
            <img src="../../assets/images/home/business.jpg" alt />
            <img src="../../assets/images/home/business.jpg" alt />
            <img src="../../assets/images/home/business.jpg" alt />
            <img src="../../assets/images/home/business.jpg" alt />
          </div>
        </div>
      </div>
      <div class="superlier">
        <div class="superlier_left">
          <h2>| 设计服务</h2>
          <div>企业展厅、科技展厅,企业展厅、科技展厅,企业展厅、科技展厅</div>
        </div>
        <div class="superlier_right">
          <h2>工业设计</h2>
          <div class="content">
            <img src="../../assets/images/home/banner0.jpg" alt />

            <div>
              <h3>工业设计-3套服务方案</h3>
              <div class="business">
                <h6>苏州**品牌设计有限公司</h6>
                <p>竹有七德，“正直、奋进,竹有七德，“正直、奋进,竹有七德，“正直、奋进...</p>
              </div>
            </div>
          </div>
          <div class="business_logo">
            <img src="../../assets/images/home/business.jpg" alt />
            <img src="../../assets/images/home/business.jpg" alt />
            <img src="../../assets/images/home/business.jpg" alt />
            <img src="../../assets/images/home/business.jpg" alt />
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Superlier",
  data() {
    return {
      high_supplier: []
      // shop_pics:[]
    };
  },
  mounted() {
    this.high_supplier = [
      {
        id: 1,
        class_name: "设计服务",
        describe: "设计服务设计服务设计服务设计服务",
        shop_pics: [
          {
            pic: "11"
          },
          {
            pic: "22"
          },
          {
            pic: "33"
          },
          {
            pic: "44"
          }
        ],
        children: [
          {
            id: 8,
            shop_id: 1,
            shop_name: "测试店铺",
            class_id: 1,
            add_time: "2019-12-11 14:58:45",
            status: 1,
            display: 1,
            sort: null,
            title: null,
            shop_pic: "11"
          },
          {
            id: 2,
            shop_id: 1,
            shop_name: "测试店铺",
            class_id: 1,
            add_time: "2019-12-11 14:58:45",
            status: 1,
            display: 1,
            sort: null,
            title: null,
            shop_pic: "22"
          },
          {
            id: 3,
            shop_id: 1,
            shop_name: "测试店铺",
            class_id: 1,
            add_time: "2019-12-11 14:58:45",
            status: 1,
            display: 1,
            sort: null,
            title: null,
            shop_pic: "33"
          },
          {
            id: 4,
            shop_id: 1,
            shop_name: "测试店铺",
            class_id: 1,
            add_time: "2019-12-11 14:58:45",
            status: 1,
            display: 1,
            sort: null,
            title: null,
            shop_pic: "44"
          }
        ]
      },
      {
        id: 1,
        class_name: "投影设备",
        describe: "设计服务设计服务设计服务设计服务",
        children: [
          {
            id: 8,
            shop_id: 1,
            shop_name: "测试店铺",
            class_id: 1,
            add_time: "2019-12-11 14:58:45",
            status: 1,
            display: 1,
            sort: null,
            title: null,
            shop_pic: "2"
          }
        ]
      },
      {
        id: 1,
        class_name: "互动软件",
        describe: "设计服务设计服务设计服务设计服务",
        children: [
          {
            id: 8,
            shop_id: 1,
            shop_name: "测试店铺",
            class_id: 1,
            add_time: "2019-12-11 14:58:45",
            status: 1,
            display: 1,
            sort: null,
            title: null,
            shop_pic: "1111111111111"
          }
        ]
      },
      {
        id: 1,
        class_name: "动画制作",
        describe: "设计服务设计服务设计服务设计服务",
        children: [
          {
            id: 8,
            shop_id: 1,
            shop_name: "测试店铺",
            class_id: 1,
            add_time: "2019-12-11 14:58:45",
            status: 1,
            display: 1,
            sort: null,
            title: null,
            shop_pic: "1111111111111"
          }
        ]
      }
    ];
  }
};
</script>
<style lang='scss' scoped>
.superlier_wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .superlier {
    display: flex;
    height: 380px;
    margin: 1px;
    width: 500px;
    // background: red;
    .superlier_left {
      width: 160px;
      height: 380px;
      text-align: left;
      background-color: rgba(116, 235, 213, 1);
      color: #fff;
      h2 {
        height: 50px;
        line-height: 50px;
        padding-left: 10px;
        margin-top: 50px;
      }
      div {
        height: 100px;
        width: 140px;
        margin: 0 auto;
      }
    }
    .superlier_right {
      width: 430px;
      text-align: left;
      background: #f9f9f9;
      h2 {
        height: 50px;
        line-height: 50px;
        padding-left: 10px;
        margin-top: 50px;
      }
      .content {
        display: flex;
        padding-left: 10px;
        h3 {
          font-size: 16px;
          height: 30px;
          line-height: 30px;
        }
        .business {
          width: 130px;
          h6 {
            height: 20px;
            line-height: 20px;
          }
          p {
            color: #999;
          }
        }

        img {
          width: 134px;
          height: 134px;
          display: block;
          padding: 0px 10px 0px;
        }
      }
      .business_logo {
        display: flex;
        justify-content: space-around;
        color: #333;
        // img {
        //   display: block;
        //   width: 80px;
        //   height: 80px;
        // }
      }
    }
  }
}
</style>