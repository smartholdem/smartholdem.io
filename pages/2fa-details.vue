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
import DetailsArea from '~~/components/team-details/2faDetailsArea.vue';
import DetailsAbout from '~~/components/team-details/2faDetailsAbout.vue';
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
      title: "SMART 2FA",
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          hid: 'description',
          name: 'description',
          content:
              'Smart2FA is a free, secure, open-source, cross-platform app that enables you to protect your accounts by adding 2-factor authentication (2FA).'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://smartholdem.io/preview/2fa.png'
        }
      ],
    });
  },
};
</script>
