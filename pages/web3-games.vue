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
      title: this.$i18n.locale !== 'ru' ?
          "Web3 Blockchain Games" :
          "Блокчейн - Игры WEB3",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.$i18n.locale !== 'ru' ?
              'Decentralized Web3 games on SmartHoldem Platform' :
              'Децентрализованные Web3 игры на платформе SmartHoldem'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://smartholdem.io/preview/web3.png'
        }

      ],
    });
  },
};
</script>
