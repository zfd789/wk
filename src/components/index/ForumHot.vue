<!--  -->
<template>
  <div class="wid-w1240 forum">
    <div class="left">
      <div class="title">
        <h1>社区热门</h1>
        <h3 class="c_yellow">24h最热</h3>
        <h3>3D/VR交流</h3>
        <h3>精选资料打包</h3>
      </div>
      <div class="talklist" v-for="(item,index) in talklist" :key="index">
        <p>{{item.lable}}</p>
        <p class="info">
          <img :src="item.avater" alt />
          <span>{{item.name}}</span>
        </p>
      </div>
    </div>
    <div class="right">
      <h3>推荐教程</h3>
      <div>
        <img
          src="http://192.168.2.32/uploads/designer/20191205/1f16e6798860d6363e447730fa50164d.jpg"
          alt
        />
        <img
          src="http://192.168.2.32/uploads/designer/20191205/1f16e6798860d6363e447730fa50164d.jpg"
          alt
        />
        <img
          src="http://192.168.2.32/uploads/designer/20191205/1f16e6798860d6363e447730fa50164d.jpg"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForumHot",
  data() {
    return {
      talklist: []
    };
  },
  mounted() {
    this.talklist = [
      {
        lable: "# 话题讨论10期 # 亲爱的甲方，麻烦听我的！",
        avater:
          "http://192.168.2.32/uploads/avater/20191205/fd0d5e930a783c62726077e25aae159b.jpg",
        name: "苏晨"
      },
      {
        lable: "# 话题讨论10期 # 亲爱的甲方，麻烦听我的！",
        avater:
          "http://192.168.2.32/uploads/avater/20191205/fd0d5e930a783c62726077e25aae159b.jpg",
        name: "苏晨"
      },
      {
        lable: "# 话题讨论10期 # 亲爱的甲方，麻烦听我的！",
        avater:
          "http://192.168.2.32/uploads/avater/20191205/fd0d5e930a783c62726077e25aae159b.jpg",
        name: "苏晨"
      },
      {
        lable: "# 话题讨论10期 # 亲爱的甲方，麻烦听我的！",
        avater:
          "http://192.168.2.32/uploads/avater/20191205/fd0d5e930a783c62726077e25aae159b.jpg",
        name: "苏晨"
      },
      {
        lable: "# 话题讨论10期 # 亲爱的甲方，麻烦听我的！",
        avater:
          "http://192.168.2.32/uploads/avater/20191205/fd0d5e930a783c62726077e25aae159b.jpg",
        name: "苏晨"
      },
      {
        lable: "# 话题讨论10期 # 亲爱的甲方，麻烦听我的！",
        avater:
          "http://192.168.2.32/uploads/avater/20191205/fd0d5e930a783c62726077e25aae159b.jpg",
        name: "苏晨"
      },
      {
        lable: "# 话题讨论10期 # 亲爱的甲方，麻烦听我的！",
        avater:
          "http://192.168.2.32/uploads/avater/20191205/fd0d5e930a783c62726077e25aae159b.jpg",
        name: "苏晨"
      },
      {
        lable: "# 话题讨论10期 # 亲爱的甲方，麻烦听我的！",
        avater:
          "http://192.168.2.32/uploads/avater/20191205/fd0d5e930a783c62726077e25aae159b.jpg",
        name: "苏晨"
      },
      {
        lable: "# 话题讨论10期 # 亲爱的甲方，麻烦听我的！",
        avater:
          "http://192.168.2.32/uploads/avater/20191205/fd0d5e930a783c62726077e25aae159b.jpg",
        name: "苏晨"
      }
    ];
  }
};
</script>
<style lang='scss' scoped>
.forum {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  .left {
    width: 70%;
    .title {
      display: flex;
      align-items: center;
      h1 {
        font-size: 30px;
      }
      h3 {
        font-size: 20px;
        margin-left: 20px;
        font-weight: normal;
      }
    }
    .talklist {
      display: flex;
      justify-content: space-around;
      font-size: 14px;
      p {
        height: 68px;
        line-height: 68px;
      }
      .info {
        img {
          width: 48px;
          border-radius: 50%;
          margin: 10px;
        }
      }
    }
  }
  .right {
    width: 285px;
    // background: pink;
    height: 600px;
    h3 {
      font-size: 20px;
      font-weight: normal;
      margin: 30px 0px ;
    }
    img{
      margin: 10px 0px;
    }
  }
}
</style>