<template>
  <Layout>
    <architecture-banner/>
    <Partners/>
    <SectionCommunity/>
    <Manifest/>
    <!--
    <LawyerFunFact/>
    <LawyerHistory/>

    <lawyerVideo/>

    <LawyerServices/>
    <LawyerBlogs/>
    <LawyerTestimonial/>
    <LawyerTeams/>
    <LawyerCounter/>
    <LawyerContact/>
    -->
  </Layout>
</template>

<script setup>
import Layout from '~/layouts/LayoutTwo.vue';
//import Layout from "~/layouts/LayoutNine.vue";
import ArchitectureBanner from "~/components/hero-banner/ArchitectureBanner.vue";
//import LawyerBanner from '~/components/hero-banner/LawyerBanner.vue';
import Partners from '~/components/awards/SectionPartners.vue';
import SectionCommunity from '~/components/portfolios/SectionCommunity.vue';
import Manifest from '~/components/abouts/LawyerAbout.vue';

//import lawyerVideo from '~/components/video-area/LawyerVideo.vue';
/*
import LawyerFunFact from '~/components/fun-facts/LawyerFunFact.vue';
import LawyerHistory from '~/components/history/LawyerHistory.vue';

import LawyerServices from '~/components/services/LawyerServices.vue';
import LawyerBlogs from '~/components/blogs/LawyerBlogs.vue';
import LawyerTestimonial from '~/components/testimonials/LawyerTestimonial.vue';
import LawyerTeams from '~/components/teams/LawyerTeams.vue';
import LawyerCounter from '~~/components/counters/LawyerCounter.vue';
import LawyerContact from '~~/components/contact/LawyerContact.vue';
*/

useHead({
  title: "SmartHoldem Platform",
});

</script>
