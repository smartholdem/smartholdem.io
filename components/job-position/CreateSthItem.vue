<template>
  <div class="job__item transition-3" data-sal="slide-up" :data-sal-delay="delay" data-sal-duration="1000">
    <div class="row align-items-center">
      <div class="col-xl-6 col-lg-7 col-md-9">
        <div class="job__content">
          <h3 class="job__title">
            <nuxt-link href="/">{{title}}</nuxt-link>
          </h3>

          <div class="job__meta-wrapper d-sm-flex flex-wrap align-items-center">
            <div class="job__meta-item">
              <span>
                {{text}}
              </span>

            </div>

          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
        <div class="job__vacancies">
          <span>{{value}}</span>
          <p>{{info}}</p>
        </div>
      </div>
      <div class="col-xl-3 col-lg-2 col-md-6 col-sm-6">
        <div class="job__btn text-xl-end">
          <nuxt-link :href="detail" class="tp-btn-border">Detail</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  props: {
    delay: String,
    title: String,
    text: String,
    info: String,
    value: String,
    detail: String
  }
}
</script>
