<!--  -->
<template>
  <div class="flashBg">
    <div class="block">
      <el-carousel height="550px">
        <el-carousel-item v-for="(item, index) in this.banner" :key="index">
          <div class="wid-w1240">
            <ul class="menulist">
              <li v-for="(item, index) in menulist" :key="index">
                ———— {{item.class_name}} ————
                <div class="menu_item">
                  <p v-for="(children, index) in item.children" :key="index">{{children.class_name}}</p>
                </div>
                <div class="catynavlist" >
                     <div class="title" v-for="(children, index) in item.children" :key="index">
                       {{children.class_name}}
                      <p v-for="(children, index) in children.children" :key="index">{{children.class_name}}</p>
                     </div>
                     
                </div>
              </li>
            </ul>
            <div class="adv"></div>
          </div>

          <img :src="item.image_url" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import API from "../../api/home";
export default {
  name: "Banner",
  data() {
    return {
      menulist: [],
      banner: []
    };
  },
  methods: {
    bannerlist() {
      API.bannerlist().then(res => {
        this.banner = res.data[1].banners;
      });
    },
    clsssList() {
      API.classList().then(res => {
        this.menulist = res.data;
        console.log(res);
      });
    }
  },
  mounted() {
    this.bannerlist();
    this.clsssList();
  }
};
</script>
<style lang='scss' scoped>
.flashBg {
  width: 100%;
  height: 550px;

  .wid-w1240 {
    position: relative;

    .menulist {
      position: absolute;
      top: 0px;
      left: 0px;
      background-color: #fff;
      height: 550px;
      width: 220px;
      li {
        height: 15%;
        padding-top: 5%;
        position: relative;
        .menu_item {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
          p {
            width: 50px;
            margin: 5px;
          }
        }
        .catynavlist {
          position: absolute;
          width: 500px;
          height: 100%;
          background-color: pink;
          top: 0px;
          left: 220px;
          .title{
            color: #74e7eb;
            text-align: left;
            text-indent: 1em;
          }
        }
      }
      li:hover {
        background-color: #ff9a3c;
        color: #fff;
      }
    }
    .adv {
      width: 310px;
      height: 514px;
      position: absolute;
      top: 0px;
      right: 0px;
      background-color: #fff;
      margin-top: 18px;
    }
  }

  img {
    height: 550px;
    width: 100%;
  }
}

// .el-carousel__item h3 {
//   color: #475669;
//   font-size: 14px;
//   opacity: 0.75;
//   line-height: 150px;
//   margin: 0;
// }

// .el-carousel__item:nth-child(2n) {
//   background-color: #99a9bf;
// }

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }
</style>