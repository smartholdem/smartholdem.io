<template>
  <div>
    <header-one :header_solid="true" :commonOffcanvas="true" />
    <DelegatesDetails />
    <Footer />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import DelegatesDetails from "~~/components/blog-details/DelegatesDetails.vue";
import Footer from "~~/layouts/footers/FooterTwo.vue";
import BackToTop from "~~/layouts/footers/component/BackToTop.vue";

//import ogImage from '@/assets/img/blog/rng2.png';
// https://gist.github.com/joepie91/7105003c3b26e65efcea63f3db82dfba
export default {
  components: { HeaderOne, Footer, BackToTop, DelegatesDetails },
  setup() {
    useHead({
      title: "Run a SmartHoldem node and earn STH rewards",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'The delegate who signs the block receives ALL NETWORK FEES for the transactions that the block includes.',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://smartholdem.io/delegate/delegate01.png'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://smartholdem.io/delegate/delegate01.png'
        }

      ],
    });
  },
};
</script>
