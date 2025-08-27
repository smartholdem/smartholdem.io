<template>
  <Layout>
    <SliderHome/>
    <Transform/>
    <FunFact/>
    <FunFactB/>
    <RoadMap/>
    <Video/>
    <About/>
    <SectionCommunity/>
    <!--<Blogs/>-->
    <Manifest/>
    <Projects/>
    <Counter/>
    <SmartHoldemNotes/>
    <Partners/>
  </Layout>
</template>

<script setup>
import Layout from '~/layouts/LayoutTwo.vue';
//import Layout from "~/layouts/LayoutNine.vue";
import SliderHome from "~/components/hero-banner/SliderHome.vue";
//import Banner from '~/components/hero-banner/LawyerBanner.vue';
import Partners from '~/components/awards/SectionPartners.vue';
import SectionCommunity from '~/components/portfolios/SectionCommunity.vue';
import Manifest from '~/components/abouts/Manifesto.vue';
import Transform from '~/components/abouts/Transform.vue';
import Video from '~/components/video-area/LawyerVideo.vue';
import FunFact from '~/components/fun-facts/LawyerFunFact.vue';
import FunFactB from '~/components/fun-facts/FunFactB.vue';
import RoadMap from '~/components/history/RoadMap.vue';
import About from '~/components/services/About.vue';
//import Blogs from '~/components/blogs/LawyerBlogs.vue';
import SmartHoldemNotes from '~/components/testimonials/SmartHoldemNotes.vue';
import Projects from '~/components/teams/LawyerTeams.vue';
import Counter from '~~/components/counters/Counter.vue';


useHead({
  title: "SmartHoldem Platform",
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'Decentralized gaming platform SmartHoldem on Blockchain with True RNG'
    },
    {
      hid: 'og:image',
      name: 'og:image',
      content: 'https://smartholdem.io/_nuxt/slider-1.e74227fc.jpg'
    }

  ],
});

</script>
