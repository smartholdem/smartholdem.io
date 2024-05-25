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
import Breadcrumb from '~~/components/breadcrumb/InnovationsBreadcrumb.vue';
import Area from '~~/components/service-details/InnovationsArea.vue';
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
      title: "SmartHoldem Crypto Innovations",
      /*
      title: this.$i18n.locale !== 'ru' ? "Innovations" : "Инновации платформы SmartHoldem",

       */
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Blockchain SmartHoldem Platform Innovations',
          /*
          content: this.$i18n.locale !== 'ru' ? 'Blockchain SmartHoldem Platform Innovations':
              'Инновации блокчейн - платформы SmartHoldem'

           */
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://smartholdem.io/preview/innovation.png'
        }
      ],
    });
  },
};
</script>
