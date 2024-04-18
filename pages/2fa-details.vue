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
      title: "Project Poker",
    });
  },
};
</script>
