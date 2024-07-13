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
    <div class="container-fluid gx-xl-5 gx-3">
      <div v-if="newsData.length > 0" class="container-fluid">
        <masonry-wall
          :items="newsData.filter((b) => b.blog_masonry)"
          :column-width="330"
          :gap="25"
        >
          <template #default="{ item }">
            <single-blog-grid-item :item="item" :masonry="true" />
          </template>
        </masonry-wall>
      </div>
      <div v-else><h3 class="text-center p-3">Loading News ...</h3></div>
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
    }
  },
  components: { SingleBlogGridItem },
  //mixins: [blogData],
  async mounted() {
    try {
      const newsRaw = (await axios.get('https://news.smartholdem.io/api/sthnews?populate=img&&pagination[pageSize]=25&sort=date:desc')).data.data;
      //console.log(newsRaw)
      for (let i=0; i < newsRaw.length; i++) {
        this.newsData.push(
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
