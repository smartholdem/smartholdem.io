<template>
  <section
    class="testimonial__area pt-110 pb-120 black-bg include-bg p-relative z-index-1 jarallax"
    data-overlay="dark"
    data-overlay-opacity="6"
    :style="{ backgroundImage: `url(${bg})` }"
  >
    <div class="container">
      <div class="row">
        <div class="col-xxl-5 col-xl-5 col-lg-5">
          <div class="section__title-wrapper-4 mb-50">
            <span class="section__title-pre-4 section__title-pre-4-white"
              >{{$t('vaj')}}</span
            >
            <h3 class="section__title-4 section__title-4-white">
              {{$t('about_sth')}}
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-8 col-xl-8 col-lg-10">
          <div class="testimonial__slider-4">
            <div class="testimonial__slider-active-4 swiper-container">
              <Swiper
                :slidesPerView="1"
                :spaceBetween="0"
                :loop="true"
                :navigation="{
                  nextEl: '.testimonial-4-button-next',
                  prevEl: '.testimonial-4-button-prev',
                }"
                :modules="modules"
              >
                <SwiperSlide
                  v-for="(item, i) in testimonial_data"
                  :key="i"
                  class="testimonial__item-4 d-sm-flex align-items-center"
                >
                  <div class="testimonial__avater-thumb-4">
                    <img :src="item.userImg" alt="user img" />
                  </div>
                  <div class="testimonial__content-4">
                    <div class="testimonial__icon">
                      <span>
                        <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5409 19.2088V38H0V33.1282C0 25.5189 0.553459 19.8584 1.66038 16.1465C2.85954 12.3419 5.94968 6.95971 10.9308 0L18.8176 4.45421C14.6667 11.5995 12.2683 16.5177 11.6226 19.2088H18.5409ZM43.7233 19.2088V38H25.1824V33.1282C25.1824 25.5189 25.7358 19.8584 26.8428 16.1465C28.0419 12.3419 31.1321 6.95971 36.1132 0L44 4.45421C39.8491 11.5995 37.4507 16.5177 36.805 19.2088H43.7233Z" fill="currentColor"/>
                        </svg>
                      </span>
                    </div>
                    <!--
                    <div class="testimonial__rating">
                      <a v-for="r in item.ratings" :key="r" href="#">
                        <i class="fa-solid fa-star"></i>
                      </a>
                    </div>
                    -->
                    <p>{{ item.desc }}</p>

                    <div class="testimonial__avater-info-4">
                      <h4 class="testimonial__avater-title-4">
                        Web3 Gaming Ecosystem
                      </h4>
                      <span class="testimonial__avater-designation-4">
                        SmartHoldem [STH]
                      </span>

                    </div>

                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div class="col-xxl-2 col-xl-2 col-lg-2">
          <div class="testimonial__slider-nav-4 d-flex flex-lg-column">
            <button type="button" class="testimonial-4-button-prev">
              <i class="fa-regular fa-angle-left"></i>
            </button>
            <button type="button" class="testimonial-4-button-next">
              <i class="fa-regular fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
// internal
import bg from "~/assets/img/sth/STH_Fon.png";
import user_1 from "~/assets/img/sth/sth_or_logo.png";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data() {
    return {
      bg,
      testimonial_data: [
        {
          userImg: user_1,
          //ratings: [1, 2, 3, 4],
          desc: this.$t('about_itm2'),
          name: "Techno",
          title: "CEO",
        },
        {
          userImg: user_1,
          //ratings: [1, 2, 3, 4, 5],
          desc: this.$t('about_itm3'),
          name: "Techno",
          title: "CEO",
        },
        {
          userImg: user_1,
          //ratings: [1, 2, 3, 4, 5],
          desc: this.$t('about_itm1'),
          name: "Techno",
          title: "CEO",
        },
      ],
    };
  },
};
</script>
