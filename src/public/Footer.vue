<!--  -->
<template>
  <div class="footer">
    <div class="wrap">
      <div v-for="item in linklist" :key="item.id">
        <h3>{{item.title}}</h3>
        <p v-for="(term, index) in item.chilren" :key="index">
          <a :href="term.path">{{term.label}}</a>
        </p>
      </div>
      <div>
        <h1>400-122-6688</h1>
        <div>
          <el-button type="primary" size="small">企业QQ</el-button>
          <el-button type="primary" size="small">智能客服</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      linklist: []
    };
  },
  mounted() {
    this.linklist = [
      {
        id: 1,
        title: "关于我们",
        chilren: [
          {
            path: "https://www.baidu.com/",
            label: "公司简介"
          },
          {
            path: "https://www.baidu.com/",
            label: "平台公告"
          },
          {
            path: "https://www.baidu.com/",
            label: "联系方式"
          }
        ]
      },
      {
        id: 2,
        title: "交易保障",
        chilren: [
          {
            path: "https://www.baidu.com/",
            label: "担保交易"
          },
          {
            path: "https://www.baidu.com/",
            label: "网站协议"
          }
        ]
      },
      {
        id: 3,
        title: "关注我们",
        chilren: [
          {
            path: "https://www.baidu.com/",
            label: "新浪微博"
          },
          {
            path: "https://www.baidu.com/",
            label: "腾讯微博"
          }
        ]
      },
      {
        id: 4,
        title: "我是供货商",
        chilren: [
          {
            path: "https://www.baidu.com/",
            label: "新浪微博"
          },
          {
            path: "https://www.baidu.com/",
            label: "腾讯微博"
          }
        ]
      },
      {
        id: 5,
        title: "我是采购商",
        chilren: [
          {
            path: "https://www.baidu.com/",
            label: "新浪微博"
          },
          {
            path: "https://www.baidu.com/",
            label: "腾讯微博"
          }
        ]
      },
      {
        id: 6,
        title: "友情链接",
        chilren: [
          {
            path: "https://www.baidu.com/",
            label: "新浪微博"
          },
          {
            path: "https://www.baidu.com/",
            label: "腾讯微博"
          }
        ]
      }
    ];
  }
};
</script>
<style lang='scss' scoped>
.footer {
  width: 100%;
  height: 222px;
  background: #292a33;

  .wrap {
    display: flex;
    margin: 0 auto;
    // width: 1240px;
    width: 80%;
    margin: 0 auto;
    justify-content: space-between;
    h1 {
      margin-top: 20px;
      height: 60px;
      line-height: 60px;
    }
    h3 {
      height: 30px;
      line-height: 30px;
      margin: 20px 0px 10px;
      border-bottom: 1px solid rgb(143, 140, 140);
    }
    a {
      color: #999;
      height: 20px;
      line-height: 20px;
    }
    div {
      color: #fff;
    }
  }
}
</style>