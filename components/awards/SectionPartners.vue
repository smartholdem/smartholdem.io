<template>
  <section class="award__area pt-30 pb-30">
    <div class="container">
      <div class="row">
        <!--
        <div class="col-xl-12 col-xl-12 col-lg-12 col-md-12">
          <div class="award__wrapper-4">
            <h3 class="award__title-4 text-center">{{$t('partners')}}</h3>
          </div>
        </div>
        -->
        <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10">
          <div class="award__slider">
            <div class="award__slider-active swiper-container">
              <award-slider-items/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// internal
import AwardSliderItems from './AwardSliderItems.vue';

export default {
  components: {
    AwardSliderItems,
  },
};
</script>
