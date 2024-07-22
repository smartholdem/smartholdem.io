<template>
  <section class="case__area pt-10" id="cases">
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
            <router-link to="/news" class="tp-btn-border-brown text-uppercase">
              {{$t('posts')}}
            </router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="item in case_data" :key="item.id" class="col-xxl-6 col-lg-6">
          <div
            class="case__item mb-50">
            <!--data-sal="slide-up" :data-sal-delay="item.delay" data-sal-duration="1000"-->
            <div class="case__thumb w-img fix">
              <img :src="item.img" alt="" />
            </div>
            <div class="case__content transition-3">

              <h3 class="case__title">
                <nuxt-link :to="'/news-details?id=' + item.id">
                  {{item.title}}
                </nuxt-link>
              </h3>
              <p>
                {{item.sm_desc}}
              </p>
              <div class="case__btn">
                <router-link :to="'/news-details?id=' + item.id" class="tp-btn-border-brown-sm">
                  {{$t('details')}}
                  <i class="fa-regular fa-arrow-right-long"></i>
                </router-link>
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
import axios from "axios";

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      case_data: [],
    };
  },

  async mounted() {
    try {
      const newsRaw = (await axios.get('https://news.smartholdem.io/api/sthnews?populate=img&&pagination[pageSize]=4&sort=date:desc')).data.data;
      //console.log(newsRaw)
      this.case_data = [];
      for (let i=0; i < newsRaw.length; i++) {
        this.case_data.push(
            {
              id: newsRaw[i].id,
              tag: newsRaw[i].attributes.tag,
              img: 'https://news.smartholdem.io' + newsRaw[i].attributes.img.data.attributes.url,
              date: newsRaw[i].attributes.date,
              title: newsRaw[i].attributes.title,
              sm_desc: newsRaw[i].attributes.text,
              article: newsRaw[i].attributes.article,
              blog_masonry:true,
            }
        )
      }
    } catch (e) {
      console.log('err get news');
    }
  }
};
</script>
