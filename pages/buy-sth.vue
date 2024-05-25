<template>
  <div>
    <Header :top_bar="true" :commonOffcanvas="true"/>
    <Breadcrumb/>
    <Area/>
    <BuySth/>
    <Footer :style_2="true"/>
    <back-to-top/>
  </div>
</template>

<script>
import Header from "~~/layouts/headers/HeaderOne.vue";
import Breadcrumb from '~~/components/breadcrumb/BuyBreadcrumb.vue';
import Area from '~~/components/service-details/BuyArea.vue';
import BuySth from '~/components/job-position/BuySth.vue';
import Footer from '~~/layouts/footers/FooterTwo.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    Header,
    Breadcrumb,
    Area,
    BuySth,
    Footer,
    BackToTop,
  },
  setup() {
    useHead({
      title: "How to buy/sell/trade SmartHoldem STH",
      /*
      title: this.$i18n.locale !== 'ru' ?
          "How to buy/sell/trade SmartHoldem STH" :
          "Как купить/продать/обменять SmartHoldem STH",

       */
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          hid: 'description',
          name: 'description',
          content: 'Create a SmartHoldem Wallet. Log in to the exchange. Buy or Swap SmartHoldem STH. Deposit STH into your SmartHoldem wallet',
          /*
          content: this.$i18n.locale !== 'ru' ?
              'Create a SmartHoldem Wallet. Log in to the exchange. Buy or Swap SmartHoldem STH. Deposit STH into your SmartHoldem wallet' :
              'Создайте кошелек SmartHoldem. Авторизуйтесь на бирже. Купите или обменяйте SmartHoldem STH. Внесите STH в свой кошелек SmartHoldem'

           */
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://smartholdem.io/preview/buy.png'
        }
      ],
    });
  },
};
</script>
