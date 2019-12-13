<template>
  <div class="home">
    <Banner></Banner>
    <Superlier></Superlier>
    <Buyer></Buyer>
    <!-- 设计师 -->
    <div class="wid-w1240 color_bac">
      <div class="title">
        <h1>全国高端设计师</h1>
        <p @click="godesignerlist">查看更多></p>
      </div>
      <div class="designer_wrap">
        <div v-for="(item,index) in props" :key="index">
          <Designer :props="item"></Designer>
        </div>
        <!-- <Designer ></Designer> -->
      </div>
    </div>

    <!-- 成功案例 -->
    <div class="wid-w1240 color_bac">
      <h1>成功案例</h1>
      <div class="case">
        <div v-for="(item, index) in caselist" :key="index" class="mask_wrap" id="my_mask">
          <img :src="item.pic" alt />
          <p class="mask_inner">
            <span>xxx公司logo设计</span>
            <el-button type="danger">点击查看详情</el-button>
          </p>
        </div>
      </div>
    </div>

    <!-- <Designer></Designer> -->

    <!-- 社区热门 -->
    <ForumHot></ForumHot>
  </div>
</template>

<script>
// @ is an alias to /src
// import Header from '@/public/Header'
// import API from "../../api/home";

import Banner from "@/components/index/Banner.vue";
import Superlier from "@/components/index/Superlier.vue";
import Buyer from "@/components/index/Buyer.vue";
import Designer from "@/components/index/Designer.vue";
import ForumHot from "@/components/index/ForumHot.vue";
// import Footer from '@/components/Footer.vue'

import API from "../api/home";
export default {
  name: "home",
  data() {
    return {
      props: [],
      designers: [],
      item: {}, // 传给子组件的设计师列表
      caselist: []
    };
  },
  components: {
    // Header,
    Banner,
    Superlier,
    Buyer,
    Designer,
    ForumHot
    // ,
    // Footer
  },
  methods: {
    records() {
      API.record().then(res => {
        this.props = res.data.designer;
        console.log(res.data.designer);
        console.log(this.designers);
      });
    },
    // designerlist(){
    //   let params = {
    //     page:1
    //   }
    //     API.designers(params).then(res=>{
    //       console.log(res)
    //     })
    // },
    godesignerlist() {
      this.$router.push({
        path: "Designers/designerlist"
      });
    }
  },
  mounted() {
    this.records();
    // this.designerlist()
    // this.designer = [
    //   {
    //     pic:
    //       "http://192.168.2.32/uploads/designer/20191205/f7542df6ac6dc972019db62a4341ce7c.jpg",
    //     title: "苏州耐斯特展览有限公司",
    //     name: "设计师姓名"
    //   },
    //   {
    //     pic:
    //       "http://192.168.2.32/uploads/designer/20191205/f7542df6ac6dc972019db62a4341ce7c.jpg",
    //     title: "苏州耐斯特展览有限公司",
    //     name: "设计师姓名"
    //   },
    //   {
    //     pic:
    //       "http://192.168.2.32/uploads/designer/20191205/f7542df6ac6dc972019db62a4341ce7c.jpg",
    //     title: "苏州耐斯特展览有限公司",
    //     name: "设计师姓名"
    //   },
    //   {
    //     pic:
    //       "http://192.168.2.32/uploads/designer/20191205/f7542df6ac6dc972019db62a4341ce7c.jpg",
    //     title: "苏州耐斯特展览有限公司",
    //     name: "设计师姓名"
    //   },
    //   {
    //     pic:
    //       "http://192.168.2.32/uploads/designer/20191205/f7542df6ac6dc972019db62a4341ce7c.jpg",
    //     title: "苏州耐斯特展览有限公司",
    //     name: "设计师姓名"
    //   }
    // ];
    this.caselist = [
      {
        pic:
          "http://192.168.2.32/uploads/banner/20191213/8a32893b35080d5c7a4fb150623e4598.jpg"
      },
      {
        pic:
          "http://192.168.2.32/uploads/banner/20191213/8a32893b35080d5c7a4fb150623e4598.jpg"
      },
      {
        pic:
          "http://192.168.2.32/uploads/banner/20191213/8a32893b35080d5c7a4fb150623e4598.jpg"
      },
      {
        pic:
          "http://192.168.2.32/uploads/banner/20191213/8a32893b35080d5c7a4fb150623e4598.jpg"
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
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.designer_wrap {
  display: flex;
  justify-content: space-between;
  .designer {
    // width: 19%;
    // height: 280px;;
    background: #fff;
    div {
      padding: 10px;
    }
    img {
      display: block;
      width: 100%;
    }
    .info {
      display: flex;
      justify-content: space-between;
      .zixun {
        background: #f95959;
        color: #fff;
        border-radius: 2px;
        padding: 3px;
        cursor: pointer;
      }
    }
  }
}
.case {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  // background: #f95959;
  #my_mask {
    width: 285px;
    height: 214px;
  }
  #my_mask .mask_inner {
    background: rgba(0, 0, 0, 0.6);
  }
  .mask_wrap {
    position: relative;
    overflow: hidden;
  }
  .mask_inner {
    position: absolute;
    left: 0px;
    top: 100%;
    width: 100%;
    height: 100%;
    -moz-transition: top ease 200ms;
    -o-transition: top ease 200ms;
    -webkit-transition: top ease 200ms;
    transition: top ease 200ms;
    color: #fff;
     text-align: center;
    span{
      display: block;
      font-size: 16px;
      height: 80px;
      line-height: 80px;;
    }

  }
  .mask_wrap:hover .mask_inner {
    top: 0;
  }
  // .img_div {
  //   width: 285px;
  //   height: 214px;
  //   position: relative;
  // }
  // .mask {
  //   position: absolute;
  //   top: 0px;
  //   left: 0px;
  //   width: 285px;
  //   height: 214px;
  //   background: rgba(101, 101, 101, 0.6);
  //   color: #ffffff;
  //   // z-index: 11;
  // }
  img {
    display: block;
    margin: 5px;
    // width: 24%;
  }
}
</style>

