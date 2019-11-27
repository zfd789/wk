<!--  -->
<template>
  <div class="flashBg">
    <div class="block">
      <el-carousel height="550px">
        <el-carousel-item v-for="(item, index) in this.banner" :key="index">
          <div class="wid-w1240">
            <!-- 菜单栏 -->
            <ul class="menulist">
              <!-- 遍历第一级菜单  鼠标放上去时 cur = index 子菜单显示 鼠标离开 cur==999 子菜单隐藏 -->
              <li
                v-for="(item, index) in menulist"
                :key="index"
                @mouseover="cur=index"
                @mouseleave="cur=999"
              >
                ———— {{item.class_name}} ————
                <div class="menu_item">
                  <!-- 二级菜单 -->
                  <p v-for="(children, index) in item.children" :key="index">{{children.class_name}}</p>
                </div>
                <!-- 子菜单 -->
                <div class="catynavlist" v-show="cur==index">
                  <div class="title" v-for="(children, index) in item.children" :key="index">
                    {{children.class_name}}
                    <div class="plain_menu_item">
                      <p
                        v-for="(children, index) in children.children"
                        :key="index"
                      >{{children.class_name}}</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="adv">
              <div class="avatar_wrap">
                <img src="../../assets/images/home/banner0.jpg" alt />
                <div>
                  <p>hi, 欢迎来到凌灵威客</p>
                  <p>
                    <router-link to="/login">登录</router-link>
                    <span>/</span>
                    <router-link to="/register">注册</router-link>
                  </p>
                </div>
              </div>
              <div class="live_wrap">
                <p>我要入驻</p>
                <p>新人福利</p>
              </div>
              <div class="block">
                <el-carousel height="135px" indicator-position="outside" arrow="never">
                  <el-carousel-item v-for="item in 4" :key="item">
                    <h1>{{ item }}</h1>
                    <p>总交易量</p>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <!-- v-model="activeName" -->
              <el-tabs @tab-click="handleClick">
                <el-tab-pane label="公告" name="first">公告</el-tab-pane>
                <el-tab-pane label="报道" name="second">报道</el-tab-pane>
                <el-tab-pane label="咨询" name="third">咨询</el-tab-pane>
                <el-tab-pane label="规则" name="fourth">规则</el-tab-pane>
              </el-tabs>
            </div>
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
      banner: [],
      tabPosition: "left",
      cur: 999
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
    },
    handleClick() {}
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

        .menu_item {
          position: relative;
          display: flex;
          justify-content: space-around;
          // align-items: center;
          flex-wrap: wrap;
          p {
            width: 55px;
            padding: 5px;
          }
        }
        .catynavlist {
          position: absolute;
          width: 500px;
          height: 550px;
          background-color: #fff;
          top: 0px;
          left: 220px;
          padding: 20px;
          .title {
            color: #74e7eb;
            text-align: left;
            // height: 20px;
            // line-height: 20px
            // text-indent: 1em;
            // background-color: yellow;
            // height: 100%;
            .plain_menu_item {
              color: #333;
              display: flex;
              flex-wrap: wrap;
              p {
                height: 10px;
                width: 85px;
                padding: 8px;
                flex-wrap: wrap;
              }
            }
          }
        }
        .active {
          display: none;
        }
      }
      li:hover {
        background-color: #ff9a3c;
        display: block;
        // color: #fff;
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
      padding: 10px 20px 10px;

      .avatar_wrap {
        display: flex;
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
        p {
          height: 30px;
          // line-height: 20px;;
        }
      }
      .live_wrap {
        display: flex;
        p {
          width: 112px;
          height: 35px;
          border-radius: 20px;
          cursor: pointer;
          background: #f95959;
          color: #fff;
          line-height: 35px;
          margin: 10px 0px 10px 10px;
        }
      }
      // .num_wrap {
      // }
      .el-tabs__nav-wrap::after {
        background-color: #fff;
      }
    }
  }

  img {
    height: 550px;
    width: 100%;
  }
  .el-carousel__item h1 {
    height: 90px;
    line-height: 90px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>