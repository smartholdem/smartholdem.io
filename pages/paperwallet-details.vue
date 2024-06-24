<template>
  <div>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <DetailsArea/>
    <DetailsAbout/>
    <!--<lawyer-blogs :style_2="true" />-->
    <footer-six :style_2="true" />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import DetailsArea from '~~/components/team-details/PaperWalletDetailsArea.vue';
import DetailsAbout from '~~/components/team-details/PaperWalletDetailsAbout.vue';
//import LawyerBlogs from '~~/components/blogs/LawyerBlogs.vue';
import FooterSix from "~~/layouts/footers/FooterTwo.vue";
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    DetailsArea,
    DetailsAbout,
    //LawyerBlogs,
    FooterSix,
    BackToTop,
  },
  setup() {
    useHead({
      title: "Paper Wallet Generator",
      /*
      title: this.$i18n.locale !== 'ru' ?
          "Paper Wallet Generator" :
          "Надёжный Генератор бумажных кошельков",

       */
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Universal Offline Open Source Client-Side Cryptocurrency Wallet Generator. Large selection of cryptocurrencies, functions, and paper wallet designs. Completely free and without ads!',
          /*
          content: this.$i18n.locale !== 'ru' ?
              'Universal Offline Open Source Client-Side Cryptocurrency Wallet Generator. Large selection of cryptocurrencies, functions, and paper wallet designs. Completely free and without ads!' :
              'Универсальный автономный генератор криптовалютных кошельков нового поколения на стороне клиента с открытым исходным кодом. Большой выбор криптовалют, дизайнов и функций. Полностью бесплатный и без рекламы.'

           */
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://smartholdem.io/preview/paper.png'
        }
      ],
    });
  },
};
</script>
