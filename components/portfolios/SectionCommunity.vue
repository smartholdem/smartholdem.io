<template>
  <section class="case__area pt-110" id="cases">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-xxl-7 col-xl-8 col-lg-8 col-md-7">
          <div class="section__title-wrapper-4 pr-5 mb-60">
            <span class="section__title-pre-4">{{$t('community')}}</span>
            <h3 class="section__title-4">
              {{$t('news_title')}}
            </h3>
          </div>
        </div>
        <div class="col-xxl-5 col-xl-4 col-lg-4 col-md-5">
          <div class="case__more text-md-end mb-70">
            <a target="_blank" href="https://community.smartholdem.io" class="tp-btn-border-brown">
              {{$t('forum')}}
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="item in case_data[$i18n.locale]" :key="item.id" class="col-xxl-6 col-lg-6">
          <div
            class="case__item mb-50"
            data-sal="slide-up" :data-sal-delay="item.delay" data-sal-duration="1000"
          >
            <div class="case__thumb w-img fix">
              <img :src="item.bg" alt="" />
            </div>
            <div class="case__content transition-3">

              <h3 class="case__title">
                <nuxt-link href="/portfolio-details">
                  {{item.title}}
                </nuxt-link>
              </h3>
              <p>
                {{item.text}}
              </p>
              <div class="case__btn">
                <a target="_blank" :href="item.url" class="tp-btn-border-brown-sm">
                  {{$t('details')}}
                  <i class="fa-regular fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import case_1 from '~/assets/img/news/news1.png';
import case_2 from '~/assets/img/news/news2.png';
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      case_data: {
        "ru": [
          {
            id: 1,
            bg: case_1,
            title: "Инновации в мире блокчейн-технологий",
            text: "SmartHoldem 2.0 - это не просто обновление, это начало новой эры для сообщества SmartHoldem.",
            url: "https://community.smartholdem.io/topic/1002/smartholdem-2-0-%D0%B8%D0%BD%D0%BD%D0%BE%D0%B2%D0%B0%D1%86%D0%B8%D0%B8-%D0%B2-%D0%BC%D0%B8%D1%80%D0%B5-%D0%B1%D0%BB%D0%BE%D0%BA%D1%87%D0%B5%D0%B9%D0%BD-%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B9",
            delay: "130",
          },
          {
            id: 2,
            bg: case_2,
            title: "Новый рекорд. Оценка реальной производительности.",
            text: "31 июля 2023 года в 18:00 UTC состоялся стресс-тест тестовой сети SmartHoldem.",
            url: "https://community.smartholdem.io/topic/1007/%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9-%D1%80%D0%B5%D0%BA%D0%BE%D1%80%D0%B4-%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B9-%D1%81%D0%B5%D1%82%D0%B8-%D0%BE%D1%86%D0%B5%D0%BD%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D0%B8-%D0%BC%D0%B0%D1%81%D1%88%D1%82%D0%B0%D0%B1%D0%B8%D1%80%D1%83%D0%B5%D0%BC%D0%BE%D1%81%D1%82%D0%B8",
            delay: "150",
          },
        ],
        "en": [
          {
            id: 1,
            bg: case_1,
            title: "Innovations in the world of blockchain technologies",
            text: "SMARTHOLDEM 2.0: BLOCKCHAIN TECHNOLOGY INNOVATIONS",
            url: "https://community.smartholdem.io/topic/1004/smartholdem-2-0-blockchain-technology-innovations",
            delay: "130",
          },
          {
            id: 2,
            bg: case_2,
            title: "New Record! Evaluation of performance and scalability.",
            text: "On July 31 at 18:00 UTC, the SmartHoldem testnet stress test took place.",
            url: "https://community.smartholdem.io/topic/1008/smartholdem-testnet-set-new-record-evaluation-of-performance-and-scalability",
            delay: "150",
          },
        ]


      },
    };
  },
};
</script>
