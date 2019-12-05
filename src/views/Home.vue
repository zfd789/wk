<template>
  <div class="home">
    <Banner></Banner>
    <Superlier></Superlier>
    <Buyer></Buyer>
    <!-- 设计师 -->
    <Designer></Designer>
    <!-- 社区热门 -->
    <ForumHot></ForumHot>
  </div>
</template>

<script>
// @ is an alias to /src
// import Header from '@/public/Header'
import Banner from "@/components/index/Banner.vue";
import Superlier from "@/components/index/Superlier.vue";
import Buyer from "@/components/index/Buyer.vue";
import Designer from "@/components/index/Designer.vue";
import ForumHot from "@/components/index/ForumHot.vue";
// import Footer from '@/components/Footer.vue'

// import API from "../api/home";
export default {
  name: "home",
  components: {
    // Header,
    Banner,
    Superlier,
    Buyer,
    Designer,
    ForumHot
    // ,
    // Footer
  },
  methods: {},
  mounted() {
    // this.clsssList()
  }
};
</script>
