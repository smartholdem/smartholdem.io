<template>
  <section class="fact__area fact__translate mb-8">
    <div class="container">
      <div class="row gx-2 gy-2 gy-lg-0">
        <div class="col-xxl-4 col-lg-4 col-md-6">
          <div class="fact__item white-bg d-flex align-items-center" data-sal="slide-down" data-sal-delay="130" data-sal-duration="1000">
            <div class="fact__icon">
                <img src="~/assets/img/sth/icon3.png" alt="fast dpos">
            </div>
            <div class="fact__content ml-20">
              <nuxt-link :to="localePath('/about-forging')">
              <h4>{{$t('ff3')}}</h4>
              <p>{{$t('ff3_text')}}</p>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-lg-4 col-md-6">
          <div class="fact__item white-bg d-flex align-items-center" data-sal="slide-down" data-sal-delay="150" data-sal-duration="1000">
            <div class="fact__icon">
              <img src="~/assets/img/sth/icon4.png" alt="farm post">
            </div>
            <div class="fact__content ml-15">
              <h4>{{$t('ff4')}}</h4>
              <p>{{$t('ff4_text')}}</p>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-lg-4 col-md-6">
          <div class="fact__banner fact__banner-overlay p-relative z-index-1" data-sal="slide-down" data-sal-delay="170" data-sal-duration="1000">
            <div class="fact__banner-bg include-bg" :style="{ backgroundImage: `url(${fact_bg})` }"></div>
            <div class="fact__banner-content">
              <h5>{{$t('ffb')}}</h5>
              <p>{{$t('ffb_text')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import fact_bg from '~/assets/img/sth/tokenomics.png';
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  data(){
    return {
      fact_bg
    }
  }
}
</script>

