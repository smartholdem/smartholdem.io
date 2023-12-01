<template>
  <section class="award__area pt-30 pb-30">
    <div class="container">
      <div class="row">
        <div class="col-xl-2 col-xl-2 col-lg-10 col-md-3">
          <div class="award__wrapper-4">
            <h3 class="award__title-4">{{$t('partners')}}</h3>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-5 col-md-9">
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
