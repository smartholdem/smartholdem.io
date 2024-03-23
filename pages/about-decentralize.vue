<template>
  <div>
    <Header :top_bar="true" :commonOffcanvas="true" />
    <decentralize-breadcrumb/>
    <about-wallet-area/>
    <Footer :style_2="true"/>
    <back-to-top/>
  </div>
</template>

<script>
import Header from "~~/layouts/headers/HeaderOne.vue";
import DecentralizeBreadcrumb from '~~/components/breadcrumb/AboutDecentralizeBreadcrumb.vue';
import AboutWalletArea from '~~/components/service-details/AboutWalletArea.vue';
import Footer from '~~/layouts/footers/FooterTwo.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    Header,
    DecentralizeBreadcrumb,
    AboutWalletArea,
    Footer,
    BackToTop,
  },
  setup() {
    useHead({
      title: "Decentralized",
    });
  },
};
</script>
