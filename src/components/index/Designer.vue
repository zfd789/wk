<!--  -->
<template>
  <div>
    <div class="wid-w1240">
      <div class="title">
        <h1>全国高端设计师</h1>
        <p>查看更多></p>
      </div>
      <div class="designer_wrap">
        <div class="designer" v-for="(item, index) in designer" :key="index">
          <img :src="item.pic" alt />
          <div class="title">{{item.title}}</div>
          <div class="info">
            <p>{{item.name}}</p>
            <p class="zixun">我要咨询</p>
          </div>
        </div>
      </div>
    </div>
    <div class="wid-w1240 color_bac">
      <h1> 成功案例 </h1>
      <div class="case">
         <p  v-for="(item, index) in caselist" :key="index">
              <img :src="item.pic" alt="">          
         </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      designer: [],
      caselist:[]
    };
  },
  mounted() {
    this.designer = [
      {
        pic:
          "http://192.168.2.32/uploads/designer/20191205/f7542df6ac6dc972019db62a4341ce7c.jpg",
        title: "苏州耐斯特展览有限公司",
        name: "设计师姓名"
      },
      {
        pic:
          "http://192.168.2.32/uploads/designer/20191205/f7542df6ac6dc972019db62a4341ce7c.jpg",
        title: "苏州耐斯特展览有限公司",
        name: "设计师姓名"
      },
      {
        pic:
          "http://192.168.2.32/uploads/designer/20191205/f7542df6ac6dc972019db62a4341ce7c.jpg",
        title: "苏州耐斯特展览有限公司",
        name: "设计师姓名"
      },
      {
        pic:
          "http://192.168.2.32/uploads/designer/20191205/f7542df6ac6dc972019db62a4341ce7c.jpg",
        title: "苏州耐斯特展览有限公司",
        name: "设计师姓名"
      },
      {
        pic:
          "http://192.168.2.32/uploads/designer/20191205/f7542df6ac6dc972019db62a4341ce7c.jpg",
        title: "苏州耐斯特展览有限公司",
        name: "设计师姓名"
      }
    ];
    this.caselist=[
        {
            pic:"http://192.168.2.32/uploads/designer/20191205/7fa9111cedaf722755ce71cf27b7f24f.jpg"
        },
        {
            pic:"http://192.168.2.32/uploads/designer/20191205/7fa9111cedaf722755ce71cf27b7f24f.jpg"
        },
        {
            pic:"http://192.168.2.32/uploads/designer/20191205/7fa9111cedaf722755ce71cf27b7f24f.jpg"
        },
        {
            pic:"http://192.168.2.32/uploads/designer/20191205/7fa9111cedaf722755ce71cf27b7f24f.jpg"
        },
        {
            pic:"http://192.168.2.32/uploads/designer/20191205/7fa9111cedaf722755ce71cf27b7f24f.jpg"
        },
        {
            pic:"http://192.168.2.32/uploads/designer/20191205/7fa9111cedaf722755ce71cf27b7f24f.jpg"
        },
        {
            pic:"http://192.168.2.32/uploads/designer/20191205/7fa9111cedaf722755ce71cf27b7f24f.jpg"
        },
        {
            pic:"http://192.168.2.32/uploads/designer/20191205/7fa9111cedaf722755ce71cf27b7f24f.jpg"
        },
    ]
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
    width: 19%;
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
.case{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    // background: #f95959;
    img{
        display:block;
        margin: 5px ;
        // width: 24%;
    }
}
</style>