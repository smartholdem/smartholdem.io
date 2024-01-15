<template>
  <section class="postbox__area">
    <div class="postbox__wrapper postbox__style-2">
      <div class="postbox__top">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <div class="postbox__category">
                <a href="#">Innovations</a>
              </div>
              <h3 class="postbox__title">Random Number Generator</h3>

              <div class="postbox__thumb postbox__thumb-overlay m-img mb-55"
                   :style="{ backgroundImage: `url(${thumb_bg})` }"></div>
              <div class="postbox__meta-wrapper d-flex align-items-center justify-content-center flex-wrap">
                <div class="postbox__meta-item mb-30">
                  <div class="postbox__meta-author d-flex align-items-center">
                    <div class="postbox__meta-author-thumb">
                      <a href="#">
                        <img src="~/assets/img/users/user.jpg" alt="">
                      </a>
                    </div>
                    <div class="postbox__meta-content">
                      <span class="postbox__meta-type">Author</span>
                      <p class="postbox__meta-name"><a target="_blank" href="https://github.com/technologiespro">TechnoL0g</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="postbox__meta-item mb-30">
                  <div class="postbox__meta-content">
                    <span class="postbox__meta-type">Published</span>
                    <p class="postbox__meta-name">January 15, 2024</p>
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
      <div class="postbox__main-wrapper pt-75">
        <div class="container">
          <div class="row">
            <div class="col-xl-2 col-lg-2 col-md-1">
              <div class="postbox__details-social d-flex flex-sm-column pt-5">
                <a target="_blank" href="https://github.com/technologiespro"><i class="fa-brands fa-github"></i></a>
                <a target="_blank" href="https://twitter.com/TechnoL0g"><i class="fab fa-twitter"></i></a>
              </div>
            </div>
            <div class="col-xl-8 col-lg-9 col-md-11">
              <div class="postbox__details-content-wrapper">
                <h3 class="postbox__details-title-2">Основа</h3>
                <p>Генератор случайных чисел основан на теории игр и блокчейн-технологии SmartHoldem.</p>

                <div class="postbox__details-content">
                  <div class="row">
                    <div class="col-md-4">
                      <h5 class="postbox__details-title-3"><i>Стойкая защита от путешественников во времени!</i></h5>
                    </div>
                    <div class="col-md-8">
                      <p><i>Если вы узнаете номер по завершении игры, вернётесь в прошлое и выберите выигрышный номер.
                        Результат игры изменится и выигрышный номер станет другим.</i></p>
                    </div>
                  </div>
                </div>
                <h3>Доказательство получения независимого случайного числа</h3>
                <p>С помощью tRNG возможно получить настоящие случайные числа, независимые от времени и знаний
                  результата в будущем.</p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-10">
              <div class="row">
                <div class="col-xl-12">
                  <div class="postbox__img-2 m-img mt-45 mb-70">
                    <img src="~/assets/img/blog/rng2.jpg" alt="" class="rounded-3">
                  </div>
                </div>
              </div>


              <div class="postbox__details-content-2 pb-120">
                <h3>Как это работает на примере лотереи</h3>
                <p>Придумаем простые правила лотереи: номера билетов от 0 до 99, номер билета можно приобрести 1 раз,
                  розыгрыш происходит каждые 2880 блоков</p>
                <p>До начала розыгрыша лотереи, Дарья приобрела билет с номером <span class="badge text-info">14</span>,
                  Василий приобрел билет с номером <span class="badge text-info">21</span></p>
                <p>Каждый участник лотереи совершил платежную транзакцию в блокчейне SmartHoldem с номером билета в
                  примечании, подписанную уникальной крипто-подписью.</p>
                <p>Транзакции добавлены в блок, блок получил уникальный хэш состоящий из транзакций, хэша предыдущего
                  блока и других данных.</p>
                <p>Каждый 8 секунд создается новый уникальный блок. Пример хэша блока: <a class="text-primary"
                                                                                          href="https://explorer.smartholdem.io/#/block/bd082c731d2736db20bf4c1851cf2000a5d43363ba0b177b92db695d960fbda8">bd082c73...960fbda8</a>
                </p>
                <p>Розыгрыш назначен через 2880 блоков.</p>
                <p>К примеру блок на котором должен состояться розыгрыш лотереи <a class="text-primary" target="_blank"
                                                                                   href="https://explorer.smartholdem.io/#/block/d2c6f1abc68cbd56aa809a5dc8565237cf0d21aa9537a475526d1867cae17f0e">d2c6f1ab...cae17f0e</a>
                </p>
                <p>Нам необходимо вычислить выигрышный номер на основе 16-ричного хэша блока</p>
                <p>Т.к. для нас достаточно значений от 0 до 99, возьмем из хэша блока крайние значения:
                  <br/>0xF,0x0,0xE и преобразуем каждое в в десятичную систему исчисления 0xf="15" + 0x0 = "0", 0xe =
                  "14" = 150<span class="text-danger">14</span>
                  и получим выигрышное число = 14</p>
                <p>В этом случает победитель лотереи Дарья.</p>
                <p>Предположим у Василия машина времени и он знает выигрышное число 14, возвращается в прошлое и первым
                  покупает билет.</p>
                <p>Дарья покупает другой билет, т.к. по нашим правилам номер уникален и имеет 1 владельца.</p>


                <div class="postbox__quote postbox__quote-style-2">
                  <blockquote>
                    <div class="postbox__quote-icon">
                      <span>
                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M25.6645 0C27.2731 0 28.5892 0.329033 29.6129 0.987098C30.6366 1.64516 31.4774 2.48602 32.1355 3.50968C32.9398 4.67957 33.4516 5.95915 33.671 7.34839C33.8903 8.73764 34 9.87097 34 10.7484C34 14.3312 33.086 17.585 31.2581 20.5097C29.4301 23.4344 26.5785 25.8108 22.7032 27.6387L21.7161 25.6645C23.9828 24.714 25.9204 23.2151 27.529 21.1677C29.2108 19.1204 30.0516 17.0366 30.0516 14.9161C30.0516 14.0387 29.9419 13.271 29.7226 12.6129C28.5527 13.5634 27.2 14.0387 25.6645 14.0387C23.7634 14.0387 22.1183 13.4172 20.729 12.1742C19.3398 10.9312 18.6452 9.21291 18.6452 7.01936C18.6452 4.97205 19.3398 3.29033 20.729 1.9742C22.1183 0.658065 23.7634 0 25.6645 0ZM7.01936 0C8.62796 0 9.94409 0.329033 10.9677 0.987098C11.9914 1.64516 12.8323 2.48602 13.4903 3.50968C14.2946 4.67957 14.8065 5.95915 15.0258 7.34839C15.2452 8.73764 15.3548 9.87097 15.3548 10.7484C15.3548 14.3312 14.4409 17.585 12.6129 20.5097C10.7849 23.4344 7.93333 25.8108 4.05806 27.6387L3.07097 25.6645C5.33763 24.714 7.27527 23.2151 8.88387 21.1677C10.5656 19.1204 11.4065 17.0366 11.4065 14.9161C11.4065 14.0387 11.2968 13.271 11.0774 12.6129C9.90753 13.5634 8.55484 14.0387 7.01936 14.0387C5.11828 14.0387 3.47312 13.4172 2.08387 12.1742C0.694624 10.9312 0 9.21291 0 7.01936C0 4.97205 0.694624 3.29033 2.08387 1.9742C3.47312 0.658065 5.11828 0 7.01936 0Z"
                              fill="currentColor"/>
                        </svg>
                      </span>
                    </div>
                    <p>“Результатом будет совершенно иной хэш разыгрываемого блока, т.к. все хэши транзакций и блоков
                      изменятся”</p>
                  </blockquote>
                </div>
                <h3>Вывод</h3>
                <p>Таким образом мы получаем:</p>
                <div class="postbox__features postbox__features-2">
                  <ul>
                    <li>Полную прозрачность в реальном времени</li>
                    <li>Настоящее случайное число</li>
                    <li>Каждые 8 секунд создаются уникальные случайные числа</li>
                    <li>Очень длинную поледовательность чисел</li>
                    <li>Защиту от путешественников во времени</li>
                    <li>Пользователи и заверители блоков добавляют дополнительный фактор случайности</li>
                    <li>Легко управляемые правила работы с числами</li>
                    <li>Вы можете использовать tRNG API для своих идей без ограничений</li>
                    <li>Широкий набор вариантов использования (подписчики, лотереи, призы итд)</li>
                  </ul>
                </div>

                <div class="row">
                  <div class="col-xl-12">
                    <div class="postbox__img-2 m-img mt-45 mb-70">
                      <img src="~/assets/img/blog/loto.jpg" alt="" class="rounded-3">
                    </div>
                  </div>
                </div>

                <p>В процессе ожидания разыгрываемого блока другие пользователи совершают свои случайные транзакции не
                  связанные с лотереей, но влияя на конечный хэш дерева Меркла.</p>
                <p>Возможно усложнить алгоритм к примеру конкатенацией имени делегата подписавшего блок (каждый раунд
                  делегаты назначаются pRNG) + хэш блока, получая из них новый хэш. Вы сами создаёте правила генерации
                  чисел.</p>
                <p>Если нам необходимо получить диапазон чисел к примеру от 0 до 51, тогда мы возьмем последние 2 знака
                  из преобразованного хэша, мы знаем, последние 2 знака в конечном виде могут принимать значения от 0 до
                  99</p>
                <p>а в результате получаем число > 51, например 92, мы просто используем разность с условием, т.е.
                  результат 92 - 51 = 41 </p>

                <p><i>На данный момент значения по умолчанию: 0..9, 0..99, 0..999 итд</i></p>
                <p>
                  <span class="btn btn-outline-dark text-uppercase"><i
                      class="fa fa-dice-six"></i> Перейти к RNG API</span>
                </p>

                <div class="small"><i class="fa fa-castle"></i> Все изображения созданы в нейронной сети <a
                    class="text-primary" target="_blank" href="https://t.me/STHxBot">SmartHoldem</a></div>
                <div class="postbox__share-wrapper mt-45 mb-25">
                  <div class="row align-items-center">
                    <div class="col-xl-7 col-lg-7">
                      <div class="tagcloud tagcloud-style-2">
                        <span>Tags:</span>
                        <a href="#">Blog</a>
                        <a href="#">Innovations</a>
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

              </div>
            </div>
          </div>
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
              <single-blog-grid-item :item="item"/>
            </div>

          </div>
        </div>
      </div>
-->
      <!-- post box navigation start -->
      <!--
      <postbox-navigation/>
      -->
    </div>
  </section>
</template>

<script>
import thumb_bg from '~/assets/img/blog/rng.jpg';
import blogData from '~~/mixins/blogData';
import SingleBlogGridItem from '../blogs/single-blog/SingleBlogGridItem.vue';
import BlogCommentForm from '../forms/BlogCommentForm.vue';
import CommentArea from './CommentArea.vue';
import PostboxNavigation from './PostboxNavigation.vue';

export default {
  components: {SingleBlogGridItem, PostboxNavigation, BlogCommentForm, CommentArea},
  mixins: [blogData],
  data() {
    return {thumb_bg}
  }
}
</script>
