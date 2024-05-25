<template>
  <div>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true"/>
    <DetailsArea/>
    <DetailsAbout/>
    <!--<lawyer-blogs :style_2="true" />-->
    <Footer :style_2="true"/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import DetailsArea from '~~/components/team-details/PokerDetailsArea.vue';
import DetailsAbout from '~~/components/team-details/PokerDetailsAbout.vue';
//import LawyerBlogs from '~~/components/blogs/LawyerBlogs.vue';
import Footer from "~~/layouts/footers/FooterTwo.vue";
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    DetailsArea,
    DetailsAbout,
    //LawyerBlogs,
    Footer,
    BackToTop,
  },
  setup() {
    useHead({
      title: this.$i18n.locale !== 'ru' ? "Blockchain Poker Club" : "Децентрализованный покер рум",
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          hid: 'description',
          name: 'description',
          content: this.$i18n.locale !== 'ru' ?
              'Decentralized Web3 Poker platform. Create tournaments and play No-Limit Texas Holdem cash games with friends on Blockchain Poker Club. No KYC. No Rake!' :
              'Децентрализованная Web3 платформа для игры в покер. Создавайте турниры и играйте в кэш-игры в безлимитный Texas Hold\'em с друзьями в Blockchain Poker Club. Нет KYC. Нет Рейка!'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://smartholdem.io/preview/poker.png'
        }
      ],
    });
  },
};
</script>
