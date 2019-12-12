<!--  -->
<template>
  <div class="wid-w1240 color_bac">
    <h1>优质采购商</h1>
    <div class="buyer">
      <div class="buyer_left">
        <div class="block">
          <el-carousel height="120px" indicator-position="none" arrow="never">
            <el-carousel-item v-for="(item,index) in buyerpic" :key="index">
              <img :src="item.pic" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="content_wrap">
          <div class="content" v-for="(item,index) in buyerList" :key="index">
            <div>
              <h2>{{item.title}}</h2>
              <p v-for="(tern,index ) in item.chilren" :key="index">
                <span>￥{{tern.price}}</span>
                {{tern.label}}
              </p>
            </div>
            <div @click="ordertaking">查看更多></div>
          </div>
        </div>
      </div>
      <div class="buyer_right">
        <img src="../../assets/images/biao.jpg" alt />
        <vue-seamless-scroll :data="listData" class="seamless-warp">
          <ul class="item">
            <li v-for="(item,index) in listData" :key="index" class="hot">
              <img src="../../assets/images/avtar.jpg" alt />
              <div class="business">
               
                <p>
                 <span class="price"> ￥{{item.price}}</span>
                  <span>{{item.type}}</span>
                </p>
                 <p class="title">
                  {{item.title}}
                  <span>成功中标了</span>
                </p>
              </div>
            </li>
          </ul>
        </vue-seamless-scroll>
      </div>
    </div>
    <div class="advert">
      <img src="../../assets/images/sjs.png" alt="">
      <img src="../../assets/images/sjs.png" alt="">
      <img src="../../assets/images/sjs.png" alt="">
    </div>
  </div>
</template>

<script>
import API from "../../api/home";
export default {
  name: "Buyer",
  data() {
    return {
      buyerList: [],
      listData: [],
      buyerpic:[]
    };
  },
  methods: {
    buyerLists(){
      API.record().then(res=>{
        // this.buyerList = res.data.high_supplier
        console.log(res)
      })
    },
    ordertaking(){
      this.$router.push({
        path:"/menu/orderTaking"
      })
    }
  },
  mounted() {
    this.buyerLists()
    this.listData = [
      {
        avater:
          "http://192.168.2.32/uploads/avater/20191205/fd0d5e930a783c62726077e25aae159b.jpg",
        title: "上海***文化公司",
        price: "12000",
        type: "企业小程序"
      },
      {
        avater:
          "http://192.168.2.32/uploads/avater/20191205/fd0d5e930a783c62726077e25aae159b.jpg",
        title: "上海***文化公司",
        price: "12000",

        type: "展厅设计"
      },
      {
        avater:
          "http://192.168.2.32/uploads/avater/20191205/fd0d5e930a783c62726077e25aae159b.jpg",

        title: "苏州***文化公司",
        price: "12000",

        type: "展厅设计"
      },
      {
        avater:
          "http://192.168.2.32/uploads/avater/20191205/fd0d5e930a783c62726077e25aae159b.jpg",
        price: "12000",

        title: "淮安***文化公司",
        type: "展厅设计"
      },
      {
        avater:
          "http://192.168.2.32/uploads/avater/20191205/fd0d5e930a783c62726077e25aae159b.jpg",
        price: "12000",

        title: "北京***文化公司",
        type: "展厅设计"
      },
      // {
      //   avater:
      //     "http://192.168.2.32/uploads/avater/20191205/fd0d5e930a783c62726077e25aae159b.jpg",
      //   price: "12000",

      //   title: "广东***文化公司",
      //   type: "展厅设计"
      // },
      // {
      //   avater:
      //     "http://192.168.2.32/uploads/avater/20191205/fd0d5e930a783c62726077e25aae159b.jpg",
      //   price: "12000",

      //   title: "无锡***文化公司",
      //   type: "展厅设计"
      // }
    ];
     this.buyerpic = [
       {
         pic:"http://192.168.2.32/uploads/banner/20191211/1d075af442fbe2c169c447c1039ad3cd.jpg"
       },
       {
         pic:"http://192.168.2.32/uploads/banner/20191211/a2d6ceb501677f78748004341a9267e6.jpg"
       }

     ]
    this.buyerList = [
      {
        id: 1,
        title: "展厅服务的需求",
        chilren: [
          {
            price: "1000",
            label: "logo设计征集",
            num: "5"
          },
          {
            price: "1000",
            label: "logo设计征集",
            num: "5"
          },
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
          },
          {
            price: "1000",
            label: "logo设计征集",
            num: "5"
          },
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
          },
          {
            price: "1000",
            label: "logo设计征集",
            num: "5"
          },
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
            price: "1000",
            label: "logo设计征集",
            num: "5"
          },
          {
            price: "1000",
            label: "logo设计征集",
            num: "5"
          },
          {
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
  justify-content: space-between;
  .buyer_left {
    width: 790px;
    .content_wrap {
      display: flex;
      flex-wrap: wrap;

      .content {
        width: 355px;
        // width: 45%;
        // height: 183px;
        border: 1px solid #f2f2f2;
        // border-bottom:1px solid #dddddd;
        // border-left: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        //  margin: 10px;
        padding: 18px;
        text-align: left;
        font-size: 14px;
        background: #fff;
        p {
          height: 40px;
          line-height: 40px;
       
        }
        span {
          color: #f42424;
        }
      }
    }
  }
  .buyer_right {
    width: 380px;
     height: 669px;
    background: #fff;
    .seamless-warp {
      height: 493px;
      overflow: hidden;
      .hot {
        display: flex;
        margin: 20px;
        .business {
          text-align: left;
          .title{
            font-size: 14px;
            font-weight: bold;
          }
          p {
            height: 40px;
            line-height: 40px;
            .price{
              color: #f42424;
              font-size: 14px;

            }
               span{
            font-weight: normal;
            color: #99a9bf;
          }
          }
        }
      }
    }
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
.advert{
  display: flex;
  justify-content: space-between;
  img{
    display: block;
    width: 32%;
  }
}
</style>