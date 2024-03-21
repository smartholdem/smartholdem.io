<template>
  <section class="fact__area fact__translate mb-8">
    <div class="container">
      <div class="row gx-2 gy-2 gy-lg-0">
        <div class="col-xxl-4 col-lg-4 col-md-6">
          <div class="fact__item white-bg d-flex align-items-center" data-sal="slide-down" data-sal-delay="130" data-sal-duration="1000">
            <div class="fact__icon">
                <img src="~/assets/img/sth/icon1.png" alt="fast dpos">
            </div>
            <div class="fact__content ml-20">
              <h4>{{$t('fast_dpos')}}</h4>
              <p>{{$t('power_chain')}}</p>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-lg-4 col-md-6">
          <div class="fact__item white-bg d-flex align-items-center" data-sal="slide-down" data-sal-delay="150" data-sal-duration="1000">
            <div class="fact__icon">
              <img src="~/assets/img/sth/icon2.png" alt="farm post">
            </div>
            <div class="fact__content ml-15">
              <h4>{{$t('post_farm')}}</h4>
              <p>{{$t('double_farm')}}</p>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-lg-4 col-md-6">
          <div class="fact__banner fact__banner-overlay p-relative z-index-1" data-sal="slide-down" data-sal-delay="170" data-sal-duration="1000">
            <div class="fact__banner-bg include-bg" :style="{ backgroundImage: `url(${fact_bg})` }"></div>
            <div class="fact__banner-content">
              <h5>{{$t('manage_community')}}</h5>
              <p>{{$t('connect_earn')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import fact_bg from '~/assets/img/sth/car.png';
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

