<template>
  <section class="history__area pt-30 pb-140">
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="section__title-wrapper-4 mb-60">
            <span class="section__title-pre-4">SmartHoldem STH</span>
            <h3 class="section__title-4">{{$t('stable')}}</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="history__thumb-wrapper d-sm-flex pr-70">
            <div class="history__thumb">
              <img src="~/assets/img/sth/diamond_logo.png" alt="logo diamond">
            </div>
            <div class="history__thumb-right-wrapper">
              <div class="history__thumb-right p-relative include-bg"
               :style="{ backgroundImage: `url(${thumb_bg})` }" style="border: solid 2px rgba(204,204,204,0.47);">
              </div>

            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="history__list pl-65 pr-90">

            <div v-for="(item, idx) in history_lists" :key="idx" class="history__list-item d-flex align-items-start">
              <div class="history__year" data-sal="slide-right" data-sal-delay="130" data-sal-duration="1000">
                <h5 class="history__year-title">{{item.name}}</h5>
              </div>
              <div class="history__list-content">
                <div class="history__list-dot">
                  <span></span>
                </div>
                <div class="history__list-content-inner" data-sal="slide-left" data-sal-delay="130" data-sal-duration="1000">
                  <h4 class="history__list-title">{{item.title}}</h4>
                  <p v-html="item.text"></p>
                  <div class="history__list-meta">
                    <span>{{item.meta}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-50">
        <hr/>
        <h4 class="section__title-6 text-center text-uppercase">Roadmap 2023 - 2025</h4>
        <img src="/assets/img/sth/Road_Map_web.png" alt="SmartHoldem Road Map"/>
      </div>
    </div>
  </section>
</template>

<script>
import thumb_bg from '~/assets/img/sth/girl.png';
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      thumb_bg,
      history_lists: [
        {
          delay: "1.3s",
          name: "Native coin",
          title: this.$t('cryptocurrency'),
          text: this.$t('sth_own_crypto'),
          meta: "All-in-One",
        },
        {
          delay: ".5s",
          name: "Tokenomics",
          title: this.$t('advanced_eco'),
          text: this.$t('deflation'),
          meta: "Limited Supply",
        },
        {
          delay: ".7s",
          name: "Scalable",
          title: this.$t('created_for'),
          text: this.$t('speed_chain'),
          meta: "Fast",
        },
        {
          delay: ".9",
          name: "Cross-chain",
          title: "SmartHoldem contracts",
          text: "BSC:<strong><a class='text-primary' target='_blank' href='https://bscscan.com/token/0x625d64c3384aa6d6841a1608ae0ce48776981d38'>0x625d64c3384aa6d6841a1608ae0ce48776981d38</a></strong><br/>ETH:<strong><a class='text-primary' target='_blank' href='https://etherscan.io/token/0x625d64c3384aa6d6841a1608ae0ce48776981d38'>0x625d64C3384AA6d6841a1608aE0Ce48776981D38</a></strong>",
          meta: "Official Contracts",
        },
      ]
    }
  }
}
</script>

