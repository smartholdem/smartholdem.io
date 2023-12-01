<template>
  <section class="tp-section-area p-relative z-index-1 tp-section-spacing">
    <div
      class="tp-section-bg include-bg"
      :style="{ backgroundImage: `url(${bg})` }"
    ></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-7 col-lg-8">
          <div class="tp-section-wrapper-2 text-center">
            <h3 class="tp-section-title-2 font-70">{{title}}</h3>
            <p v-html="subtitle"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bg from '~/assets/img/contact/contact-bg.png';

export default {
  data () {
    return {bg}
  },
  props: {
    title: String,
    subtitle: String,
  },
};
</script>
