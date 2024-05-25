<template>
  <div>
    <Header :top_bar="false" :commonOffcanvas="true" />
    <team-breadcrumb
      :title="$t('all_projects')"
      subtitle="SmartHoldem"
    />
    <team-area />

    <CreateSth/>

    <footer-two :style_2="true" />
    <back-to-top />
  </div>
</template>

<script>
import Header from "~~/layouts/headers/HeaderNineColor.vue"; //HeaderOne.vue
import TeamBreadcrumb from "~~/components/breadcrumb/CommonBreadcrumb.vue";
import TeamArea from "~~/components/teams/TeamArea.vue";
import CreateSth from '~/components/job-position/CreateSth.vue';
import FooterTwo from "~~/layouts/footers/FooterTwo.vue";
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    Header,
    TeamBreadcrumb,
    TeamArea,
    FooterTwo,
    CreateSth,
    BackToTop,
  },
  setup() {
    useHead({
      title: "Projects Build on SmartHoldem",
      /*
      title: this.$i18n.locale !== 'ru' ?
          "Projects Build on SmartHoldem" :
          "Проекты построенные на SmartHoldem",

       */
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Blockchain Poker, Heads or Tails, Paper Wallet, Smart2FA TOTP, Hasher, Lottery, Decentralized Chess, Horse Racing'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://smartholdem.io/preview/projects.png'
        }
      ],
    });
  },
};
</script>
