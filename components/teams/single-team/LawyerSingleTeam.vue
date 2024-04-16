<template>
  <div
    class="team__item-4 p-relative z-index-1 fix mb-40"
    data-sal="slide-up"
    data-sal-delay="130"
    data-sal-duration="1000"
  >
    <div class="team__thumb-4 w-img fix">
      <img :src="item.img" alt="" />
    </div>
    <div class="team__content-4 fix">
      <h3 class="team__title-4">
        <nuxt-link :to="localePath('/' + item.page)">{{ item.name }}</nuxt-link>
      </h3>
      <span class="team__designation-4">{{ item.title }}</span>

      <p>{{ item.sm_desc }}</p>
<!--
      <div class="team__social-4">
        <a
          v-for="(l, i) in item.social_links"
          :key="i"
          :href="l.link"
          :target="l.target"
        >
          <i :class="l.icon"></i>
        </a>
      </div>
    -->
    </div>
  </div>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  props: {
    item: {},
  },
};
</script>
