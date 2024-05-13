<template>
  <div>
    <Header :top_bar="true" :commonOffcanvas="true" />
    <Breadcrumb/>
    <Area/>
    <Footer :style_2="true"/>
    <back-to-top/>
  </div>
</template>

<script>
import Header from "~~/layouts/headers/HeaderOne.vue";
import Breadcrumb from '~~/components/breadcrumb/Web3Breadcrumb.vue';
import Area from '~~/components/service-details/Web3Area.vue';
import Footer from '~~/layouts/footers/FooterTwo.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    Header,
    Breadcrumb,
    Area,
    Footer,
    BackToTop,
  },
  setup() {
    useHead({
      title: "About Wallet & Assets",
    });
  },
};
</script>
