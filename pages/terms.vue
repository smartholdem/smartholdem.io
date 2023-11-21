<template>
  <div>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <section-title
      title="Terms and Conditions"
      subtitle="The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."
    />
    <terms-area />
    <footer-six :style_2="true" />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import SectionTitle from "~~/components/policy-terms/SectionTitle.vue";
import TermsArea from '~~/components/policy-terms/TermsArea.vue';
import FooterSix from "~~/layouts/footers/FooterSix.vue";
import BackToTop from "~~/layouts/footers/component/BackToTop.vue";

export default {
  components: {
    HeaderOne,
    SectionTitle,
    TermsArea,
    FooterSix,
    BackToTop,
  },
  setup() {
    useHead({
      title: "Terms - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>
