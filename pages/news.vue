<template>
  <div>
    <header-one :header_solid="true" :commonOffcanvas="true" />
    <blog-masonry-breadcrumb/>
    <blog-masonry-area/>
    <Footer />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import BlogMasonryBreadcrumb from '~~/components/breadcrumb/BlogMasonryBreadcrumb.vue';
import BlogMasonryArea from '~~/components/blogs/BlogMasonryArea.vue';
import Footer from "~~/layouts/footers/FooterTwo.vue";
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: { HeaderOne, Footer, BlogMasonryBreadcrumb, BlogMasonryArea, BackToTop },
  setup() {
    useHead({
      title: "SmartHoldem News",
    });
  },
};
</script>
