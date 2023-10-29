<template>
  <Swiper
    :slidesPerView="5"
    :spaceBetween="30"
    class="award__item-wrapper"
    :loop="true"
    :breakpoints="{
      576: {
        slidesPerView: 4,
      },
      0: {
        slidesPerView: 3,
      },
    }"
  >
    <SwiperSlide
      v-for="(img, i) in award_data"
      :key="i"
      class="award__item-4 ml-10 mr-30"
    >
      <img :src="img" height="52" alt="image" />
    </SwiperSlide>
  </Swiper>
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
// internal
import award_img_1 from "~/assets/img/partners/paperwallet.png";
import award_img_2 from "~/assets/img/partners/hive.png";
import award_img_3 from "~/assets/img/partners/leveldb.png";
import award_img_4 from "~/assets/img/partners/bitshares.png";
import award_img_5 from "~/assets/img/partners/dexgames.png";

export default {
  data() {
    return {
      award_data: [
        award_img_1,
        award_img_2,
        award_img_3,
        award_img_4,
        award_img_5,
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
