<template>
  <Layout>
    <SliderHome/>

    <Transform/>

    <LawyerFunFact/>
    <FunFactB/>



    <LawyerHistory/>

    <Video/>

    <LawyerServices/>
    <SectionCommunity/>

    <!--<LawyerBlogs/>-->

    <Manifest/>

    <Projects/>
    <Counter/>
    <LawyerTestimonial/>
    <Partners/>
    <!--
    <LawyerContact/>
-->

  </Layout>
</template>

<script setup>
import Layout from '~/layouts/LayoutTwo.vue';
//import Layout from "~/layouts/LayoutNine.vue";
import SliderHome from "~/components/hero-banner/SliderHome.vue";
//import LawyerBanner from '~/components/hero-banner/LawyerBanner.vue';
import Partners from '~/components/awards/SectionPartners.vue';
import SectionCommunity from '~/components/portfolios/SectionCommunity.vue';
import Manifest from '~/components/abouts/Manifesto.vue';
import Transform from '~/components/abouts/Transform.vue';

import Video from '~/components/video-area/LawyerVideo.vue';
import LawyerFunFact from '~/components/fun-facts/LawyerFunFact.vue';
import FunFactB from '~/components/fun-facts/FunFactB.vue';

import LawyerHistory from '~/components/history/LawyerHistory.vue';
import LawyerServices from '~/components/services/LawyerServices.vue';
import LawyerBlogs from '~/components/blogs/LawyerBlogs.vue';
import LawyerTestimonial from '~/components/testimonials/LawyerTestimonial.vue';
import Projects from '~/components/teams/LawyerTeams.vue';
import Counter from '~~/components/counters/Counter.vue';
//import LawyerContact from '~~/components/contact/LawyerContact.vue';


useHead({
  title: "SmartHoldem Platform",
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'Decentralized gaming platform SmartHoldem on Blockchain'
    },
    {
      hid: 'og:image',
      name: 'og:image',
      content: 'https://smartholdem.io/_nuxt/slider-1.e74227fc.jpg'
    }

  ],
});

</script>
