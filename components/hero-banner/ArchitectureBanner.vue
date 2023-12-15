<template>
  <section class="slider__area p-relative">
    <div class="slider__social d-none d-lg-block">
      <ul>
        <li>
          <a target="_blank" href="https://t.me/smartholdem"><i class="fa-brands fa-telegram-plane"></i></a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/smartholdem" class="tw"><i class="fa-brands fa-twitter"></i></a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/smartholdem"><i class="fa-brands fa-github"></i></a>
        </li>
      </ul>
      <span>{{$t('follow')}}</span>
    </div>
    <!--main slider -->
    <!-- <ClientOnly> -->
    <div class="slider__active swiper-container">
      <swiper
        :space-between="0"
        :slides-per-view="1"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        :loop="true"
        :effect="'fade'"
        :pagination="{
          clickable: true,
          el: '.main-slider-dot-8',
          renderBullet: renderBullet,
        }"
        :navigation="{
          nextEl: '.slider-button-next, .slider-button-8-next',
          prevEl: '.slider-button-prev, .slider-button-8-prev',
        }"
      >
        <swiper-slide
          v-for="(item, i) in slider_items"
          :key="i"
          class="slider__item-8 p-relative z-index-1 slider__height-8 d-flex align-items-center"
        >
          <div
            class="slider__bg-8 include-bg"
            :style="{ backgroundImage: `url(${item.bg})` }"
          ></div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xxl-10 col-xl-8 col-lg-9">
                <div class="slider__content-8">
                  <client-only><h3 class="slider__title-8" v-html="item.title"></h3></client-only>
                  <p>{{ item.subtitle }}</p>

                  <!--
                  <div class="slider__btn-8">
                    <nuxt-link
                      href="/details-list"
                      class="tp-btn-4 tp-style-border"
                    >
                      See Project
                      <i class="fa-regular fa-chevron-right"></i>
                    </nuxt-link>
                  </div>
                  -->
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <div class="main-slider-dot-8 d-none d-sm-flex"></div>
      </swiper>
    </div>
    <!-- </ClientOnly> -->

    <!-- slider__nav -->
    <div class="slider__nav d-none d-sm-block">
      <swiper
        class="slider__nav-active swiper-container"
        @swiper="setThumbsSwiper"
        :modules="modules"
        :space-between="0"
        :slides-per-view="1"
        :watch-slides-progress="true"
        :loop="true"
        :freeMode="false"
        :allow-touch-move="false"
        :navigation="{
          nextEl: '.slider-8-button-next',
          prevEl: '.slider-8-button-prev',
        }"
      >
        <swiper-slide
          v-for="(item, i) in slider_nav_items"
          :key="i"
          class="slider__nav-item d-flex align-items-center"
        >
          <div class="slider__nav-content">
            <span>{{ item.id <= 9 ? "0" : "" }}{{ item.id }}.</span>
            <h3 class="slider-nav-title" v-html="item.title"></h3>
          </div>
          <div class="slider__nav-thumb">
            <img :src="item.img" alt="image" />
          </div>
        </swiper-slide>
      </swiper>
      <div class="slider__nav-arrow d-flex flex-column">
        <button class="slider-button-8-next">
          <i class="fa-regular fa-chevron-right"></i>
        </button>
        <button class="slider-button-8-prev">
          <i class="fa-regular fa-chevron-left"></i>
        </button>
      </div>
    </div>
    <div class="mouse-scroll mouse-scroll-8">
      <a href="#cases" class="mouse-scroll-btn"></a>
    </div>
  </section>
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import {
  FreeMode,
  Thumbs,
  Controller,
  EffectFade,
  Pagination,
  Navigation,
} from "swiper";
// internal
import slider_bg_1 from "~/assets/img/slider/8/slider-1.jpg";
import slider_bg_2 from "~/assets/img/slider/8/slider-2.jpg";
import slider_bg_3 from "~/assets/img/slider/8/slider-3.jpg";
import slider_bg_4 from "~/assets/img/slider/8/slider-4.jpg";
import slider_nav_1 from "~/assets/img/slider/8/nav/slider-nav-1.jpg";
import slider_nav_2 from "~/assets/img/slider/8/nav/slider-nav-1.jpg";
import slider_nav_3 from "~/assets/img/slider/8/nav/slider-nav-1.jpg";
import slider_nav_4 from "~/assets/img/slider/8/nav/slider-nav-1.jpg";

export default {
  components:{Swiper,SwiperSlide},
  data() {
    return {
      slider_items: [
        {
          bg: slider_bg_1,
          title: `${this.$t("slider.s1")}
            <span class="slider-highlight">${this.$t("slider.s1_1")}
              <svg width="309" height="28" viewBox="0 0 309 28" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 24C88.949 1.81947 186.908 -6.80627 304 24" stroke="#FF5A1B"
                    stroke-width="8" stroke-linecap="round" />
              </svg>
            </span>
           `,
          subtitle: this.$t('slider.s1sub'),
        },
        {
          bg: slider_bg_2,
          title: `${this.$t("slider.s2")}
            <span class="slider-highlight">${this.$t("slider.s2_1")}
              <svg width="309" height="28" viewBox="0 0 309 28" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 24C88.949 1.81947 186.908 -6.80627 304 24" stroke="#FF5A1B"
                    stroke-width="8" stroke-linecap="round" />
              </svg>
            </span>
           `,
          subtitle:this.$t('slider.s2sub'),
        },
        {
          bg: slider_bg_3,
          title:  `${this.$t("slider.s3")}
            <span class="slider-highlight">${this.$t("slider.s3_1")}
              <svg width="309" height="28" viewBox="0 0 309 28" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 24C88.949 1.81947 186.908 -6.80627 304 24" stroke="#FF5A1B"
                    stroke-width="8" stroke-linecap="round" />
              </svg>
            </span>
           `,
          subtitle: this.$t('slider.s3sub'),
        },
        {
          bg: slider_bg_4,
          title: `${this.$t("slider.s4")}
            <span class="slider-highlight">${this.$t("slider.s4_1")}
              <svg width="309" height="28" viewBox="0 0 309 28" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 24C88.949 1.81947 186.908 -6.80627 304 24" stroke="#FF5A1B"
                    stroke-width="8" stroke-linecap="round" />
              </svg>
            </span>
           `,
          subtitle: this.$t('slider.s4sub')
        },
      ],
      slider_nav_items: [
        {
          id: 1,
          title: this.$t('slider.s1nav'),
          img: slider_nav_1,
        },
        {
          id: 2,
          title: this.$t('slider.s2nav'),
          img: slider_nav_2,
        },
        {
          id: 3,
          title: this.$t('slider.s3nav'),
          img: slider_nav_3,
        },
        {
          id: 4,
          title: this.$t('slider.s4nav'),
          img: slider_nav_4,
        },
      ],
    };
  },

  methods:{
    renderBullet(index, cls) {
      return `<span class=${cls}>
                  <button>${index < 9 ? "0" : ""}${index + 1}</button>
            </span>`;
    }
  },

  setup() {
    let thumbsSwiper = ref();
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [
        FreeMode,
        Thumbs,
        Controller,
        EffectFade,
        Pagination,
        Navigation,
      ],
    };
  },
};
</script>

<style>
  .slider__title-8 {
   font-family: 'BankGothic', sans-serif;
  }
</style>
