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
import Breadcrumb from '~~/components/breadcrumb/AboutCommunityBreadcrumb.vue';
import Area from '~~/components/service-details/AboutCommunityArea.vue';
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
      title: "Community SmartHoldem",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Welcome to the SmartHoldem community'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://smartholdem.io/preview/community.png'
        }
      ],
    });
  },
};
</script>
