<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <team-breadcrumb
      :title="$t('all_projects')"
      subtitle="SmartHoldem"
    />
    <team-area />

    <job-area/>

    <footer-two :style_2="true" />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import TeamBreadcrumb from "~~/components/breadcrumb/CommonBreadcrumb.vue";
import TeamArea from "~~/components/teams/TeamArea.vue";
import JobArea from '~~/components/job-position/JobArea.vue';
import FooterTwo from "~~/layouts/footers/FooterTwo.vue";
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    TeamBreadcrumb,
    TeamArea,
    FooterTwo,
    JobArea,
    BackToTop,
  },
  setup() {
    useHead({
      title: "Projects",
    });
  },
};
</script>
