<template>
  <section
      :class="`${el_style ? 'blog__area pt-110 pb-90' : 'blog__masonary pb-120'}`"
  >
    <div v-if="el_style" class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-section-wrapper-3 mb-60 text-center">
            <span class="tp-section-subtitle-3"
            >Latest news</span
            >
            <h3 class="tp-section-title-3">News</h3>
          </div>
        </div>
      </div>
    </div>

    <div v-if="newsMeta.pageCount">
      <div class="container-fluid gx-xl-5 gx-3">
        <div class="row justify-content-center">
          <div class="col-xl-12 text-center">
            <p v-if="newsMeta.pageCount > 1" class="text-muted">
              <span @click="getNews('prev')" class="btn btn-outline-dark">< PREV</span>&nbsp;<span class="btn btn-outline-dark">Page {{ newsMeta.page }} of {{newsMeta.pageCount}}</span>&nbsp;<span @click="getNews('next')" class="btn btn-outline-dark">NEXT > </span>
            </p>
          </div>
        </div>
      </div>
    </div>


    <div class="container-fluid gx-xl-5 gx-3">
      <div v-if="newsData.length > 0" class="container-fluid">
        <masonry-wall
            :items="newsData.filter((b) => b.blog_masonry)"
            :column-width="330"
            :gap="25"
        >
          <template #default="{ item }">
            <single-blog-grid-item :item="item" :masonry="true"/>
          </template>
        </masonry-wall>
      </div>
      <div v-else><h3 class="text-center p-3">Loading News ...</h3></div>
    </div>

    <div v-if="newsMeta.pageCount">
      <div class="container-fluid gx-xl-5 gx-3">
        <div class="row justify-content-center">
          <div class="col-xl-12 text-center">
            <p v-if="newsMeta.pageCount > 1" class="text-muted">
              <span @click="getNews('prev')" class="btn btn-outline-dark">< PREV</span>&nbsp;<span class="btn btn-outline-dark">Page {{ newsMeta.page }} of {{newsMeta.pageCount}}</span>&nbsp;<span @click="getNews('next')" class="btn btn-outline-dark">NEXT > </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
//import blogData from "~~/mixins/blogData";
import SingleBlogGridItem from "./single-blog/SingleBlogGridItem.vue";
import axios from 'axios';

export default {
  props: {
    el_style: {
      type: Boolean,
      default: false,

    },
  },
  data() {
    return {
      newsData: [],
      newsMeta: {},
      currentPage: 1
    }
  },
  components: {SingleBlogGridItem},
  //mixins: [blogData],
  methods: {
    async getNews(op = '') {
      if (op ==='next') {
        this.currentPage++;
      }

      if (op ==='prev') {
        this.currentPage--;
      }

      if (this.currentPage > this.newsMeta['pageCount']) {
        this.currentPage = 1
      }

      if (this.currentPage < 1) {
        this.currentPage = this.newsMeta['pageCount'];
      }

      try {
        const newsRaw = (await axios.get('https://news.smartholdem.io/api/sthnews?populate=img&pagination[pageSize]=15&pagination[page]=' + this.currentPage + '&sort=date:desc')).data;
        this.newsMeta = newsRaw['meta']['pagination'];
        this.newsData = []; // Clear previous data
        for (let i = 0; i < newsRaw.data.length; i++) {
          this.newsData.push(
              {
                id: newsRaw.data[i].id,
                tag: newsRaw.data[i].attributes.tag,
                img: 'https://news.smartholdem.io' + newsRaw.data[i].attributes.img.data.attributes.url,
                date: newsRaw.data[i].attributes.date,
                title: newsRaw.data[i].attributes.title,
                sm_desc: newsRaw.data[i].attributes.text,
                article: newsRaw.data[i].attributes.article,
                blog_masonry: true,
              }
          )
        }
      } catch (e) {
        console.log('err get news');
      }
    }
  },
  async mounted() {
    await this.getNews('');
    /*
      try {
      const newsRaw = (await axios.get('https://news.smartholdem.io/api/sthnews?populate=img&&pagination[pageSize]=15&sort=date:desc')).data;
      this.newsMeta = newsRaw['meta']['pagination'];
      for (let i = 0; i < newsRaw.data.length; i++) {
        this.newsData.push(
            {
              id: newsRaw.data[i].id,
              tag: newsRaw.data[i].attributes.tag,
              img: 'https://news.smartholdem.io' + newsRaw.data[i].attributes.img.data.attributes.url,
              date: newsRaw.data[i].attributes.date,
              title: newsRaw.data[i].attributes.title,
              sm_desc: newsRaw.data[i].attributes.text,
              article: newsRaw.data[i].attributes.article,
              blog_masonry: true,
            }
        )
      }
    } catch (e) {
      console.log('err get news');
    }
     */
  }
};
</script>
