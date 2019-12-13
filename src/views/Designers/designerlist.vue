<!--  -->
<template>
  <div class="wid-w1240 color_bac">
    <div>
      <!-- 筛选 -->
      <div class="wrap" v-for="(item,index) in this.list" :key="index">
        <div class="lable">
          <h3>{{item.label}}:</h3>
        </div>
        <ul class="content">
          <li v-for="tern in item.chilren" :key="tern.id">{{tern.type}}</li>
        </ul>
      </div>
      <div class="wrap">
        <div class="lable">
          <h3>地区：</h3>
        </div>
        <div class="content">
          <CityPicker></CityPicker>
        </div>
      </div>
      <!-- 表格 -->
      <ul class="wrap">
        <li class="list">
          <Designer
            :props="item"
            v-for="(item,index) in props"
            :key="index"
            class="item"
            
          ></Designer>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CityPicker from "@/components/Shopslist/cityPicker";
import Designer from "@/components/index/Designer.vue";
import API from "@/api/home";
export default {
  components: {
    CityPicker,
    Designer
  },
  data() {
    return {
      list: [],
      props: [],
      orderlist: [],
      designer: []
    };
  },
  methods: {
    // changename({ row, column, rowIndex, columnIndex }) {
    //   console.log(columnIndex);
    //   if ((columnIndex = 1)) {
    //     return "red";
    //   }
    // }
    // 详情页
    detail() {
      this.$router.push({
        path: "/Designers/designerdet"
      });
    },
    designers() {
      API.designers().then(res => {
        console.log(res);
      });
    }
  },
  mounted() {
    // this.designers()
    this.list = [
      {
        label: "擅长领域",
        chilren: [
          {
            type: "不限"
          },
          {
            type: "设计服务"
          },
          {
            type: "多媒体硬件"
          },
          {
            type: "多媒体内容"
          },
          {
            type: "多媒体集成"
          },
          {
            type: "广告制作"
          }
        ]
      },
      {
        label: "年限（年）",
        chilren: [
          {
            type: "不限"
          },
          {
            type: "0-1"
          },
          {
            type: "1-3"
          },
          {
            type: "3-5"
          },
          {
            type: "5年以上"
          }
        ]
      }
    ];
    this.props = [
      {
        designer_img:
          "http://192.168.2.32/uploads/designer/20191205/f7542df6ac6dc972019db62a4341ce7c.jpg",
        shop_name: "苏州耐斯特展览有限公司",
        designer_name: "设计师姓名"
      },
      {
        designer_img:
          "http://192.168.2.32/uploads/designer/20191205/f7542df6ac6dc972019db62a4341ce7c.jpg",
        shop_name: "苏州耐斯特展览有限公司",
        designer_name: "设计师姓名"
      },
      {
        designer_img:
          "http://192.168.2.32/uploads/designer/20191205/f7542df6ac6dc972019db62a4341ce7c.jpg",
        shop_name: "苏州耐斯特展览有限公司",
        designer_name: "设计师姓名"
      },
      {
        designer_img:
          "http://192.168.2.32/uploads/designer/20191205/f7542df6ac6dc972019db62a4341ce7c.jpg",
        shop_name: "苏州耐斯特展览有限公司",
        designer_name: "设计师姓名"
      },
      {
        designer_img:
          "http://192.168.2.32/uploads/designer/20191205/f7542df6ac6dc972019db62a4341ce7c.jpg",
        shop_name: "苏州耐斯特展览有限公司",
        designer_name: "设计师姓名"
      },
      {
        designer_img:
          "http://192.168.2.32/uploads/designer/20191205/f7542df6ac6dc972019db62a4341ce7c.jpg",
        shop_name: "苏州耐斯特展览有限公司",
        designer_name: "设计师姓名"
      }
    ];
  }
};
</script>
<style lang='scss' scoped>
.wrap {
  display: flex;

  //   align-items: center;
  font-size: 14px;
  margin: 1px;
  //   background: pink;
  justify-content: space-between;
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    // align-items: center;
    justify-content: space-between;
    .item {
      margin: 10px 0px;
    }
  }
  .lable {
    width: 107px;
    background: #f8f8f8;
    height: 70px;
    line-height: 70px;
    text-align: center;
  }
  .content {
    display: flex;
    background: #fff;
    justify-content: flex-start;
    width: 100%;
    height: 70px;
    line-height: 70px;
    li {
      margin: 0px 10px;
    }
  }
}
</style>