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
import Breadcrumb from '~~/components/breadcrumb/AboutForgingBreadcrumb.vue';
import Area from '~~/components/service-details/AboutForgingArea.vue';
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
      title: this.$i18n.locale !== 'ru' ? "Cryptocurrency Mining and Forging on SmartHoldem Blockchain" : "Майнинг и форжинг криптовалюты на блокчейне SmartHoldem",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.$i18n.locale !== 'ru' ?
              'SmartHoldem is an open-source hybrid blockchain platform utilizing a unique combination of Delegated Proof of Stake (DPoS) and Proof of SpaceTime (PoSt).' :
              'Публичная сеть SmartHoldem Level 1 (DPoS) — это блокчейн с открытым исходным кодом, работающий на основе Delegated Proof of Stake (DPoS). SmartHoldem даёт возможность создавать и получать доступ к широкому спектру децентрализованных инструментов, приложений и экосистем.'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://smartholdem.io/preview/forging.png'
        }
      ],
    });
  },
};
</script>
