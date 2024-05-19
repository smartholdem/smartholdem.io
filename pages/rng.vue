<template>
  <div>
    <header-one :header_solid="true" :commonOffcanvas="true" />
    <RngDetails />
    <Footer />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import RngDetails from "~~/components/blog-details/RngDetails.vue";
import Footer from "~~/layouts/footers/FooterTwo.vue";
import BackToTop from "~~/layouts/footers/component/BackToTop.vue";

//import ogImage from '@/assets/img/blog/rng2.png';
// https://gist.github.com/joepie91/7105003c3b26e65efcea63f3db82dfba
export default {
  components: { HeaderOne, Footer, BackToTop, RngDetails },
  setup() {
    useHead({
      title: "True Random Number Generator",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Real Blockchain True Random Number Generator RNG on SmartHoldem Platform'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://smartholdem.io/_nuxt/rng2.c5d3b9b4.jpg'
        }

      ],
    });
  },
};
</script>
