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
              <nuxt-link :to="localePath('/buy-sth')">
              <img src="~/assets/img/sth/icon4.png" alt="farm post">
              </nuxt-link>
            </div>
            <div class="fact__content ml-15">
              <nuxt-link :to="localePath('/buy-sth')">
              <h4>{{$t('ff4')}}</h4>
              <p>{{$t('ff4_text')}}</p>
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="col-xxl-4 col-lg-4 col-md-6">

          <div class="fact__item white-bg d-flex align-items-center" data-sal="slide-down" data-sal-delay="150" data-sal-duration="1000">
            <div class="fact__icon">
              <nuxt-link :to="localePath('/tokenomics')">
              <img src="~/assets/img/sth/tokenomics.png" alt="smartholdem platform tokenomics">
              </nuxt-link>
            </div>
            <div class="fact__content ml-15">
              <nuxt-link :to="localePath('/tokenomics')">
              <h4>{{$t('ffb')}}</h4>
              <p>{{$t('ffb_text')}}</p>
              </nuxt-link>
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

