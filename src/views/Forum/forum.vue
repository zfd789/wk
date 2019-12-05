<!--  -->
<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="最新提问">
        <div class="main">
          <div class="main_left">1 回答</div>
          <div class="main_right">
            <h2 class="title">title</h2>
            <div class="info_wrap">
              <div>
                <div class="block">
                  <router-link to="/home">
                    <el-avatar :size="25" :src="circleUrl"></el-avatar>
                    <span>name</span>
                  </router-link>

                  <span>VR渲染</span>
                </div>
              </div>
              <div>
                <span>回答问题可得2级分</span>
                <el-button>我要回答</el-button>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="热门回答">配置管理</el-tab-pane>
      <el-tab-pane label="等待回答">角色管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    };
  }
};
</script>
<style lang='scss' scoped>
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
      span{
        padding: 10px;
      }
    }
  }
}
</style>