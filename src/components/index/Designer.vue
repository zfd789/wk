<!--  -->
<template>
   <div class="designer">
          <img :src="props.designer_img" alt />
          <div class="title">{{props.shop_name}}</div>
          <div class="info">
            <p>{{props.designer_name}}</p>
            <p class="zixun">我要咨询</p>
          </div>
        </div>
</template>

<script>
export default {
  name:"Designer",
  props: ["props"],
  data() {
    return {
      // designer: []
    };
  },
  mounted() {
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

  }
};
</script>
<style lang='scss' scoped>
  .designer {
    width:220px;;
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

</style>