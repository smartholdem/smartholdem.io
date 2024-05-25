<template>
  <div>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <section-title title="Disclaimers and Limitation of Liability" subtitle=""/>
      <policy-area/>
    <Footer :style_2="true"/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderNineColor.vue";
import SectionTitle from '~~/components/policy-terms/SectionTitle.vue';
import PolicyArea from '~~/components/policy-terms/DisclaimersArea.vue';
import Footer from '~~/layouts/footers/FooterTwo.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    SectionTitle,
    PolicyArea,
    Footer,
    BackToTop,
  },
  setup() {
    useHead({
      title: "SmartHoldem Disclamers",
    });
  },
};
</script>
