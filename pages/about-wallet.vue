<template>
  <div>
    <Header :top_bar="true" :commonOffcanvas="true" />
    <wallet-breadcrumb/>
    <about-wallet-area/>
    <Footer :style_2="true"/>
    <back-to-top/>
  </div>
</template>

<script>
import Header from "~~/layouts/headers/HeaderOne.vue";
import WalletBreadcrumb from '~~/components/breadcrumb/AboutWalletBreadcrumb.vue';
import AboutWalletArea from '~~/components/service-details/AboutWalletArea.vue';
import Footer from '~~/layouts/footers/FooterTwo.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    Header,
    WalletBreadcrumb,
    AboutWalletArea,
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
