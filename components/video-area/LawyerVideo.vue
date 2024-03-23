<template>
  <section
    :class="`video__area pt-145 pb-125 include-bg ${el_style?'mb-120':''}`"
    data-overlay="dark"
    data-overlay-opacity="6"
    :style="{ backgroundImage: `url(${video_bg})` }"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-10 col-xl-10">
          <div class="video__content text-center">
            <div class="video__play">
              <a
                @click.prevent="handleVideoPopup"
                href="#"
                class="video__play-btn tp-pulse-border popup-video"
              >
                <span class="video-play-bg"></span>
                <img src="~/assets/img/video/video-icon-play.png" alt="" />
              </a>
            </div>
            <h3 class="video__title">{{$t('about_platform')}}</h3>
            <div class="video__btn">
              <nuxt-link href="https://t.me/smartholdem" class="tp-btn-transparent">
                {{$t('ask_community')}}
                <i class="fa-regular fa-arrow-right-long"></i>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   <!-- video modal start -->

  <video-modal v-if="$i18n.locale === 'ru'"
    ref="video_modal"
    video-url="https://www.youtube.com/embed/IA3hVFP7yu4"
  />

  <video-modal v-if="$i18n.locale !== 'ru'"
               ref="video_modal"
               video-url="https://www.youtube.com/embed/xBdh8IF-FxY"
  />
  <!-- video modal end -->
</template>

<script>
import video_bg from "~/assets/img/sth/timeline.png";
import VideoModal from "../common/modals/VideoModal.vue";

export default {
  props:{
    el_style:{
      type:Boolean,
      default:false
    }
  },
  components: { VideoModal },
  data() {
    return {
      video_bg,
    };
  },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    },
  },
};
</script>
