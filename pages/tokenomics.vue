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
import Breadcrumb from '~~/components/breadcrumb/TokenomicsBreadcrumb.vue';
import Area from '~~/components/service-details/TokenomicArea.vue';
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
          "Tokenomics SmartHoldem Platform" :
          "Токеномика платформы SmartHoldem",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.$i18n.locale !== 'ru' ?
              'STH is the native utility token of SmartHoldem blockchain. Deflationary model with limited emission' :
              'Предложение сокращается, ценность растёт. Дефляционная модель с Ограниченной эмиссией'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://smartholdem.io/preview/tokenomic.png'
        }
      ],
    });
  },
};
</script>
