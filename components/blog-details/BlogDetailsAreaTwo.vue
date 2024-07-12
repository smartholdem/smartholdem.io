<template>
  <section class="postbox__area w-100" style="overflow-x: hidden;">

    <div v-if="fullContent.id" class="postbox__wrapper postbox__style-2">
      <div class="postbox__top">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <div class="postbox__category">
                <a href="/news">News</a>
              </div>


              <h3 class="postbox__title">{{fullContent.title}}</h3>


              <div class="postbox__thumb postbox__thumb-overlay m-img mb-55"
              :style="{ backgroundImage: `url(${fullContent.img})` }"></div>

              <div class="postbox__meta-wrapper d-flex align-items-center justify-content-center flex-wrap">
                <!--
                <div class="postbox__meta-item mb-30">
                  <div class="postbox__meta-author d-flex align-items-center">
                    <div class="postbox__meta-author-thumb">
                      <a href="#">
                        <img src="~/assets/img/users/user-9.jpg" alt="">
                      </a>
                    </div>
                    <div class="postbox__meta-content">
                      <span class="postbox__meta-type">Author</span>
                      <p class="postbox__meta-name"><a href="#">Fig Nelson</a></p>
                    </div>
                  </div>

                </div>
                -->
                <div class="postbox__meta-item mb-30">
                  <div class="postbox__meta-content">
                    <span class="postbox__meta-type">Published {{fullContent.date}}</span>
                    <!--<p class="postbox__meta-name"></p>-->
                  </div>
                </div>

                <!--
                <div class="postbox__meta-item mb-30">
                  <div class="postbox__meta-content">
                    <span class="postbox__meta-type">2 Comments</span>
                    <p class="postbox__meta-name"><a href="#tp-blog-details-comment">Join the Conversation</a></p>
                  </div>
                </div>
                <div class="postbox__meta-item mb-30">
                  <div class="postbox__meta-content">
                    <span class="postbox__meta-type">View</span>
                    <p class="postbox__meta-name">12,145 views</p>
                  </div>
                </div>
                -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="postbox__main-wrapper pt-75 pb-10">
        <div class="container">
          <div class="row">
            <div class="col-xl-2 col-lg-2 col-md-1">
              <div class="postbox__details-social d-flex flex-sm-column pt-5">
                <a target="_blank" :href="'https://t.me/share/?url=https://smartholdem.io/news-details?id='+fullContent.id+'&text='+fullContent.title"><i class="fab fa-telegram-plane"></i></a>
                <a target="_blank" :href="'http://twitter.com/share?text='+fullContent.title+'&url=https://smartholdem.io/news-details?id='+fullContent.id"><i class="fab fa-twitter"></i></a>
              </div>
            </div>
            <div class="col-xl-8 col-lg-9 col-md-11">
              <div class="postbox__details-content-wrapper" v-html="fullContent.article">

              </div>
            </div>
          </div>
          <!--
          <div class="row">
            <div class="col-xl-12">
              <div class="postbox__img-2 m-img mt-45 mb-70">
                <img src="~/assets/img/blog/blog-big-3.jpg" alt="">
              </div>
            </div>
          </div>
          -->
          <!--
          <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-10">
              <div class="postbox__details-content-2 pb-120">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                <div class="postbox__quote postbox__quote-style-2">
                  <blockquote>
                    <div class="postbox__quote-icon">
                      <span>
                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M25.6645 0C27.2731 0 28.5892 0.329033 29.6129 0.987098C30.6366 1.64516 31.4774 2.48602 32.1355 3.50968C32.9398 4.67957 33.4516 5.95915 33.671 7.34839C33.8903 8.73764 34 9.87097 34 10.7484C34 14.3312 33.086 17.585 31.2581 20.5097C29.4301 23.4344 26.5785 25.8108 22.7032 27.6387L21.7161 25.6645C23.9828 24.714 25.9204 23.2151 27.529 21.1677C29.2108 19.1204 30.0516 17.0366 30.0516 14.9161C30.0516 14.0387 29.9419 13.271 29.7226 12.6129C28.5527 13.5634 27.2 14.0387 25.6645 14.0387C23.7634 14.0387 22.1183 13.4172 20.729 12.1742C19.3398 10.9312 18.6452 9.21291 18.6452 7.01936C18.6452 4.97205 19.3398 3.29033 20.729 1.9742C22.1183 0.658065 23.7634 0 25.6645 0ZM7.01936 0C8.62796 0 9.94409 0.329033 10.9677 0.987098C11.9914 1.64516 12.8323 2.48602 13.4903 3.50968C14.2946 4.67957 14.8065 5.95915 15.0258 7.34839C15.2452 8.73764 15.3548 9.87097 15.3548 10.7484C15.3548 14.3312 14.4409 17.585 12.6129 20.5097C10.7849 23.4344 7.93333 25.8108 4.05806 27.6387L3.07097 25.6645C5.33763 24.714 7.27527 23.2151 8.88387 21.1677C10.5656 19.1204 11.4065 17.0366 11.4065 14.9161C11.4065 14.0387 11.2968 13.271 11.0774 12.6129C9.90753 13.5634 8.55484 14.0387 7.01936 14.0387C5.11828 14.0387 3.47312 13.4172 2.08387 12.1742C0.694624 10.9312 0 9.21291 0 7.01936C0 4.97205 0.694624 3.29033 2.08387 1.9742C3.47312 0.658065 5.11828 0 7.01936 0Z"
                            fill="currentColor" />
                        </svg>
                      </span>
                    </div>
                    <p>“I try as much as possible to give you a great basic product and what comes out, I feel, is
                      really amazing.”</p>
                  </blockquote>
                </div>
                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                  consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et
                  iusto odio dignissimos ducimus qui blanditiis dolorum fuga.</p>

                <div class="postbox__features postbox__features-2">
                  <ul>
                    <li>Get yourself comfortable.</li>
                    <li>Manage your workspace and organize your desk.</li>
                    <li>Keep In touch with your co-workers.</li>
                  </ul>
                </div>
                <p>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                <div class="postbox__share-wrapper mt-45 mb-25">
                  <div class="row align-items-center">
                    <div class="col-xl-7 col-lg-7">
                      <div class="tagcloud tagcloud-style-2">
                        <span>Tags:</span>
                        <a href="#">Blog</a>
                        <a href="#">Creative</a>
                        <a href="#">Portfoilo</a>
                        <a href="#">Harry</a>
                      </div>
                    </div>
                    <div class="col-xl-5 col-lg-5">
                      <div class="postbox__share postbox__share-2 text-lg-end">
                        <span>Share On:</span>
                        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="postbox__author postbox__author-2 d-sm-flex align-items-start white-bg">
                  <div class="postbox__author-thumb">
                    <a href="#">
                      <img src="~/assets/img/users/user-4.jpg" alt="">
                    </a>
                  </div>

                  <div class="postbox__author-content">
                    <h3 class="postbox__author-title">
                      <a href="#">Colene Landin</a>
                    </h3>
                    <p>Digital content wrangler | UX enthusiast | Recovering educator & GIF hockey fan Oxford comma or
                      death.!</p>

                    <div class="postbox__author-social d-flex align-items-center">
                      <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i class="fa-brands fa-twitter"></i></a>
                      <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        -->
        </div>
      </div>

      <div class="row mb-25 mt-10 pt-10">
        <div class="container text-center">
          <h2><router-link class="text-dark p-2 mb-1 bg-warning text-uppercase border border-dark" to="/news">Read all news</router-link></h2>
        </div>
      </div>
      <!--
      <div class="postbox__related grey-bg-7 pb-90 pt-95">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <h3 class="postbox__related-title">You may also like</h3>
            </div>
          </div>
          <div class="row">

            <div v-for="(item, i) in blogData.slice(38, 41)" :key="i"
            class="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
              <single-blog-grid-item :item="item" />
            </div>

          </div>
        </div>
      </div>
-->

      <!--
      <div class="postbox__comment-wrapper postbox__comment-style-2 pt-90 pb-65">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-10">
              <div class="postbox__comment mb-75" id="tp-blog-details-comment">
                <h3 class="postbox__comment-title">Comments (2)</h3>

                <comment-area />

              </div>
              <div class="postbox__comment-form">
                <h3 class="postbox__comment-form-title">Leave A Reply</h3>
                <p>Your email address will not be published. Required fields are marked *</p>

                <blog-comment-form />

              </div>
            </div>
          </div>
        </div>
      </div>
      -->
      <!-- post box navigation start -->
      <!--
      <postbox-navigation />
      -->
      <!-- post box navigation end -->
      <!--
      <postbox-navigation />
    -->
    </div>

    <div v-else><h3 class="text-center p-3">Loading ...</h3></div>
  </section>
</template>

<script>
import thumb_bg from '~/assets/img/blog/blog-big-2.jpg';
import blogData from '~~/mixins/blogData';
import SingleBlogGridItem from '../blogs/single-blog/SingleBlogGridItem.vue';
import BlogCommentForm from '../forms/BlogCommentForm.vue';
import CommentArea from './CommentArea.vue';
import PostboxNavigation from './PostboxNavigation.vue';
import axios from 'axios';

export default {
  components: { SingleBlogGridItem, PostboxNavigation, BlogCommentForm, CommentArea },
  mixins: [blogData],
  data () {
    return {
      thumb_bg,
      fullContent: {}
    }
  },
  async mounted() {
    try {
      //console.log(this.$route['query'])
      if (this.$root['blog']) {
        this.fullContent = this.$root['blog']
      } else {
        const contentData = (await axios.get('https://news.smartholdem.io/api/sthnews/'+this.$route['query'].id+'?populate=img')).data.data;

        this.fullContent = {
            id: contentData.id,
            tag: contentData.attributes.tag,
            img: 'https://news.smartholdem.io' + contentData.attributes.img.data.attributes.url,
            date: contentData.attributes.date,
            title: contentData.attributes.title,
            sm_desc: contentData.attributes.text,
            article: contentData.attributes.article,
            blog_masonry:true,
        }
      }


      //console.log(this.fullContent.attributes)
      /*
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
       */
    } catch (e) {

    }

  }
}
</script>

<style>
.postbox__main-wrapper a {
  color: #0a53be;
}

.postbox__main-wrapper img {
  width:100%;
}
</style>
