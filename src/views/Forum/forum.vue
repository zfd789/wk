<!--  -->
<template>
  <div class="wid-w1240">
    <div class="content">
      <div class="left">
        <!-- 搜索框 -->
        <div class="search">
          <div class="search_wrap">
            <el-input placeholder="搜一下，总有一个人知道你想搜索的答案" v-model="input2">
              <template slot="append">搜索答案</template>
            </el-input>
          </div>
          <div>
            <el-button type="danger" @click="publishQ">我要提问</el-button>
          </div>
        </div>
        <el-tabs type="border-card">
          <el-tab-pane label="最新提问">
            <div class="main">
              <div class="main_left">1 回答</div>
              <div class="main_right">
                <h2 class="title">苏州展厅公司哪家好？</h2>
                <div class="info_wrap">
                  <div>
                    <div class="block">
                      <router-link to="/home">
                        <el-avatar :size="25" :src="circleUrl"></el-avatar>
                        <span>花花</span>
                      </router-link>

                      <span>VR渲染</span>
                    </div>
                  </div>
                  <div>
                    <span>回答问题可得2级分</span>
                    <el-button @click="anser">我要回答</el-button>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="热门回答">配置管理</el-tab-pane>
          <el-tab-pane label="等待回答">角色管理</el-tab-pane>
        </el-tabs>
      </div>
      <div class="right">
        <img src="../../assets/images/wdtj.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input2: "",
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    };
  },
  methods: {
    anser() {
      this.$router.push({
        path: "/Forum/anser"
      });
    },
    publishQ() {
      this.$router.push({
        path: "/Forum/publishQuestions"
      });
    }
  }
};
</script>
<style lang='scss'>
.content {
  display: flex;
  justify-content: space-between;
  .left {
    width: 74%;
    .search {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 88px;
      background: url("../../assets/images/search_bac.jpgu42.jpg");
      margin: 20px 0px;
      .el-button {
        height: 52px;
        width: 120px;
      }
      .search_wrap {
        width: 600px;
        .el-input-group__append,
        .el-input-group__prepend {
          background: #f95959;
          color: #fff;

          outline: none;
        }
        .el-input__inner {
          border: 1px solid #fff;
          height: 52px;
        }
      }
    }
    .main {
      width: 100%;
      height: 60px;
      display: flex;
      .main_left {
        width: 45px;
        height: 40px;
      }
      .main_right {
        width: 100%;
        h2 {
          text-align: left;
        }
        .info_wrap {
          display: flex;
          justify-content: space-between;
          padding: 10px 0px;
          font-size: 14px;
          a:hover {
            color: #333;
          }
          .el-button {
            border-radius: 20px;
          }
          span {
            padding: 10px;
          }
        }
      }
    }
  }
  .right {
    width: 270px;
  }
}
</style>