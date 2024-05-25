<template>
  <div>
    <Header :top_bar="true" :commonOffcanvas="true" />
    <decentralize-breadcrumb/>
    <about-decentralize-area/>
    <Footer :style_2="true"/>
    <back-to-top/>
  </div>
</template>

<script>
import Header from "~~/layouts/headers/HeaderOne.vue";
import DecentralizeBreadcrumb from '~~/components/breadcrumb/AboutDecentralizeBreadcrumb.vue';
import AboutDecentralizeArea from '~~/components/service-details/AboutDecentralizeArea.vue';
import Footer from '~~/layouts/footers/FooterTwo.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    Header,
    DecentralizeBreadcrumb,
    AboutDecentralizeArea,
    Footer,
    BackToTop,
  },
  setup() {
    useHead({
      title: this.$i18n.locale !== 'ru' ? "A Better Blockchain" : "Более совершенный блокчейн для создания игр и бизнеса",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.$i18n.locale !== 'ru' ?
              'SmartHoldem is an open-source hybrid blockchain platform utilizing a unique combination of Delegated Proof of Stake (DPoS) and Proof of SpaceTime (PoSt).' :
              'SmartHoldem - это гибридная блокчейн платформа нового поколения, с открытым исходным кодом, на основе первого в мире механизма консенсуса с уникальным сочетанием алгоритмов Delegated Proof of Stake (DPoS) и Proof of SpaceTime (PoSt).'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://smartholdem.io/preview/decentralize.png'
        }
      ],
    });
  },
};
</script>
