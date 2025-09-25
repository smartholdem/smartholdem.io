<template>
  <section class="team__details-area pt-100 p-relative z-index-1">
    <div class="team__details-shape">
      <img class="team__details-shape-1" src="~/assets/img/team/details/team-details-shape-1.png" alt="">
      <img class="team__details-shape-2" src="~/assets/img/team/details/team-details-shape-2.png" alt="">
      <img class="team__details-shape-3" src="~/assets/img/team/details/team-details-shape-3.png" alt="">
      <img class="team__details-shape-4" src="~/assets/img/team/details/team-details-shape-4.png" alt="">
    </div>
    <div class="container">
      <div class="team__details-border">
        <div class="row">
          <div class="col-xl-5 col-md-6">
            <div class="team__details-thumb" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000">
              <img src="~/assets/img/sth/paper/paper.png" alt="">
            </div>
          </div>
          <div class="col-xl-7 col-md-6">
            <div class="team__details-content pt-40 pl-15 pr-50">
              <span class="team__details-subtitle">Blockchain</span>
              <h3 class="team__details-title">Paper Wallet Generator</h3>
              <div class="team__details-contact mb-10">
                <div class="team__details-contact-item d-flex align-items-center">
                  <!-- for wp if client want to add icon enable it -->
                  <div class="team__details-contact-icon mr-10 d-none">
                    <span>
                      <i class="fa-regular fa-envelope"></i>
                    </span>
                  </div>
                  <div class="team__details-contact-content">
                    <p><a target="_blank" href="https://paperw.top">Decentralized APP</a></p>
                  </div>
                </div>
              </div>
              <p>{{$t('pw_title')}}</p>
              <div class="team__details-social">
                <a target="_blank" href="https://x.com/paper_wallet"><i class="fa-brands fa-twitter"></i></a>
                <a target="_blank" href="https://github.com/technologiespro/paper-wallet-generator/releases"><i class="fa-brands fa-github"></i></a>
                <a target="_blank" href="https://paperw.top"><i class="fa fa-link"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],

}
</script>
