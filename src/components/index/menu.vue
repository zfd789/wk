<!--  -->
<template>
  <div class="menu">
    <div class="menu-con">
      <div class="left" @mouseleave="leave" @mouseover="over">
        展厅一站式服务中心
        <img src="../../assets/images/home/line.svg" alt />
        <!-- 菜单栏 -->
        <ul class="menulist" v-show="seen">
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
                {{children.class_name}}--{{cur}}--{{children.class_type}}
                <div class="plain_menu_item">
                  <p
                    v-for="(children_1, index) in children.children"
                    :key="index"
                    @click="toshop(children,children_1)"
                  >{{children_1.class_name}}--{{index}}---{{children_1.class_type}}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="midle">
        <router-link to="/Shopslist/order">我要发布</router-link>
        <a href="#">我要接单</a>
        <a href="#">凌灵优选</a>
        <a href="#">展厅服务</a>
        <a href="#">资质认证</a>
        <router-link to="/Forum/forum">问答</router-link>
      </div>
      <div class="right">
        <!-- <img src="../../assets/images/home/rz.png" alt /> -->
      </div>
    </div>
  </div>
</template>

<script>
import API from "../../api/home";

export default {
  name: "Menu",
  data() {
    return {
      menulist: [],
      seen: false,
      class_type: "",
      cur: 999
    };
  },
  methods: {
    toshop(children,children_1) {
      
      //  localStorage.setItem("menuList",JSON.stringify(children.children));
      // 1是硬件 goods 2 是软件 shop
      this.class_type = children_1.class_type;
      // console.log( this.class_type)
      //  console.log( children_1)
      if (this.class_type === 1) {
         this.$router.replace({
          path: "/Shopslist/Goodslist",
          query: { id: children_1.id,list: children.children}
        });
      } else if (this.class_type === 2) {
        this.$router.replace({
          path: "/Shopslist/shopslist",
          query: { info: children_1,list: children.children }
        });
      }
    },
    clsssList() {
      API.classList().then(res => {
        this.menulist = res.data;
      });
    },
    over() {
      this.seen = true;
    },
    leave() {
      this.seen = false;
    }
  },
  mounted() {
    this.clsssList();
  }
};
</script>
<style lang='scss' scoped>
.menu {
  width: 100%;
  background: #333;
  .menu-con {
    width: 1240px;
    // width: 80%;
    display: flex;
    margin: 0 auto;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    .left {
      width: 220px;
      position: relative;
      // background: #ff9a3c;
      background: #5b5b5b;
      position: relative;


      .menulist {
        position: absolute;
        top: 40px;
        left: 0px;
        background-color: #fff;
        height: 550px;
        width: 220px;
        z-index: 999;
        color: #333;
        font-size: 12px;
        li {
          // padding: 5%;
          margin-top: 15px;
          .menu_item {
            position: relative;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            p {
              width: 60px;
              height: 30px;
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
              .plain_menu_item {
                color: #333;
                display: flex;
                flex-wrap: wrap;
                a {
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
          // background-color: #ff9a3c;
          background:rgba(244, 215, 138, 1); ;
          display: block;
          // color: #fff;
        }
      }
    }
    .right {
      width: 15%;
      img {
        height: 40px;
      }
    }
    .midle {
      width: 65%;
      display: flex;
      justify-content: space-around;

      a {
        display: block;
        color: #fff;
        padding: 0px 10px 0px;
      }
      a:hover {
        // background: #ff9a3c;
         background: #5b5b5b;
      }
    }
  }
}
</style>