<template>
  <Layout>
    <SliderHome/>
    <Transform/>
    <FunFact/>
    <FunFactB/>
    <History/>
    <Video/>
    <About/>
    <Projects/>
    <Counter/>
    <SectionCommunity/>
    <!--<Blogs/>-->
    <Manifest/>


    <Testimonial/>
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
import History from '~/components/history/LawyerHistory.vue';
import About from '~/components/services/About.vue';
//import Blogs from '~/components/blogs/LawyerBlogs.vue';
import Testimonial from '~/components/testimonials/LawyerTestimonial.vue';
import Projects from '~/components/teams/LawyerTeams.vue';
import Counter from '~~/components/counters/Counter.vue';

import { useRouter } from 'vue-router';
const router = useRouter();

useHead({
  title: router.currentRoute.value.path !== '/ru' ? "Decentralized Web3 infrastructure for Everyone" : "Децентрализованная игровая платформа SmartHoldem с истинным генератором случайных чисел",
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      //content: 'Decentralized gaming platform SmartHoldem on Blockchain with True RNG',
      content: router.currentRoute.value.path !== '/ru' ? 'Game On with SmartHoldem: Your Decentralized Web3 Platform' :
          'Децентрализованная игровая платформа SmartHoldem на блокчейне с Настоящим генератором случайных чисел RNG'
    },
    {
      hid: 'og:image',
      name: 'og:image',
      content: 'https://smartholdem.io/preview/index.png'
    }
  ],
});

</script>
