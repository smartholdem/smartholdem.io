<template>
  <section class="counter__area counter__border-2 mb-50">
    <div class="container">
      <div class="counter__inner-4" data-bg-color="green-dark-2">
        <div class="conter__shape">
          <img
            class="counter__shape-10"
            src="~/assets/img/counter/4/counter-shape-1.png"
            alt=""
          />
        </div>
        <div class="row">
          <div
            v-for="(item, i) in counter_data"
            :key="i"
            class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"
          >
            <div
              class="counter__item-4-wrapper d-flex justify-content-center"
              data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
            >
              <div class="counter__item-4">
                <h4 class="counter__title-4">
                  <span class="counter">{{item.number}}</span>{{item.text}}
                </h4>
                <div class="counter__content-4">
                  <p>{{item.title}}</p>
                </div>
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
  data() {
    return {
      counter_data: [
        { number: 2017, text: "", title: "Platform Start" },
        { number: 'XBTS', text: "", title: "DEX " + this.$t('exchange') },
        { number: 100, text: "+", title: "DeFi Pools" },
        { number: "Staking", text: "", title: "SmartHolder" },
      ],
    };
  },
};
</script>
