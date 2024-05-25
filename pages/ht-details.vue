<template>
  <div>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true"/>
    <DetailsArea/>
    <DetailsAbout/>
    <!--<lawyer-blogs :style_2="true" />-->
    <footer-six :style_2="true"/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import DetailsArea from '~~/components/team-details/HtDetailsArea.vue';
import DetailsAbout from '~~/components/team-details/HtDetailsAbout.vue';
//import LawyerBlogs from '~~/components/blogs/LawyerBlogs.vue';
import FooterSix from "~~/layouts/footers/FooterSix.vue";
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
      title: this.$i18n.locale !== 'ru' ? "WEB3 Game on SmartHoldem Blockchain" : "WEB3 Игра на SmartHoldem Blockchain",
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          hid: 'description',
          name: 'description',
          content: this.$i18n.locale !== 'ru' ? 'Welcome to the «Heads or Tails» blockchain PvP game!' :
              '«Орел или Решка» — многопользовательская PvP-игра с мгновенными выплатами, встроенным кошельком, платформой обмена, игровой статистикой, чатом и партнерской программой.'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://smartholdem.io/preview/ht.png'
        }
      ],
    });
  },
};
</script>
