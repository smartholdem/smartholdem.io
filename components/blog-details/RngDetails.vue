<template>
  <section class="postbox__area">
    <div class="postbox__wrapper postbox__style-2">
      <div class="postbox__top">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <div class="postbox__category">
                <a href="#">{{ $t('innovations') }}</a>
              </div>
              <h3 class="postbox__title">Random Number Generator</h3>
              <h4 class="badge product__badge-item text-primary">Real time generator [0 - 255]</h4>
              <div style="min-height: 70px; overflow: hidden;">
                <h4 v-if="block">
                  <a target="_blank"
                     class="text-white link-hover"
                     :href="'https://explorer.smartholdem.io/#/block/' + block.id">
                    {{ block.id }}
                  </a>
                </h4>
                <span v-for="(item, i) in hexBytesArray" :key="i+item"
                      class="product__badge-item mr-5 border border-primary">
               {{ item }}
              </span>
              </div>


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
                      <span class="postbox__meta-type">{{ $t('author') }}</span>
                      <p class="postbox__meta-name"><a target="_blank" href="https://github.com/technologiespro">TechnoL0g</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="postbox__meta-item mb-30">
                  <div class="postbox__meta-content">
                    <span class="postbox__meta-type">{{ $t('published') }}</span>
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
        <div class="container overflow-x-hidden">
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
                <p>Генератор случайных чисел основан на блокчейн-энтропии SmartHoldem.</p>

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
                <p>С помощью блокчейн-энтропии возможно получить настоящие случайные числа, независимые от времени и
                  знаний
                  результата в будущем. В качестве настоящей энтропии используется блокчейн SmartHoldem.</p>
                <p>
                  Каждые 8 секунд в BlockChain SmartHoldem происходит генерация случайно ранжированными делегатами
                  уникального Hash ID блока содержащего числовой ряд шестнадцатеричных значений, пример:
                  <span>d291a92dce4d774285d9d0c4e6e1cc1f</span>765c6e30ca2733f337c80c8af932dfa0.
                  Все блоки легко проверить в
                  <a class="text-primary" target="_blank"
                     href="https://explorer.smartholdem.io/#/block/d291a92dce4d774285d9d0c4e6e1cc1f765c6e30ca2733f337c80c8af932dfa0">обозревателе
                    блоков</a>
                </p>
                <p>Уникальный шестнадцатиричный Hash блока преобразуется в числовую десятичную последовательность.</p>

                <p>Из числового ряда выбираются необходимою число знаков, наример 2 (от 00 до 99) для расчёта текущего
                  случайного номера.</p>
                <p class="text-warning-emphasis">
                  Пример выборки случайного значения от 0 до 99:
                </p>
                <ul>
                  <li>Block Hash: d291a92dce4d774285d9d0c4e6e1cc1f765c6e30ca2733f337c80c8af932dfa0</li>
                  <li>10 байт HEX:
                    <span class=" product__badge-item">33</span>
                    &nbsp;<span class="product__badge-item">F3</span>
                    &nbsp;<span class=" product__badge-item">37</span>
                    &nbsp;<span class=" product__badge-item">C8</span>
                    &nbsp;<span class=" product__badge-item">0C</span>
                    &nbsp;<span class=" product__badge-item">8A</span>
                    &nbsp;<span class=" product__badge-item">f9</span>
                    &nbsp;<span class=" product__badge-item">32</span>
                    &nbsp;<span class=" product__badge-item">DF</span>
                    &nbsp;<span class=" product__badge-item">A0</span></li>
                  <li>Пеобразованный числовой ряд в DEC: 51243552001213824950223160</li>
                  <li>Двузначный случайный номер основанный на блокчейн-энтропии: <span
                      class="badge product__badge-item text-info">60</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-10">
              <div class="row">
                <div class="col-xl-12">
                  <div class="postbox__img-2 m-img mt-45 mb-70">
                    <img src="~/assets/img/sth/lotto/1.png" alt="" class="rounded-3">
                  </div>
                </div>
              </div>

              <div class="postbox__details-content-2 pb-40">
                <h3>Из чего состоит блокчейн-энтропия SmartHoldem</h3>
                <ul>
                  <li>Hash нового блока строится по дереву merkle и зависит от всех предыдущих блоков и операций в сети
                    SmartHoldem выполняемых участниками
                  </li>
                  <li>Любая сллучайная операция выполненная участником сети, происходящая сегодня в BlockChain
                    SmartHoldem влияет на хэши всех будущих блоков
                  </li>
                  <li>Случайное ранжирование делегатов в каждом раунде</li>
                  <li>Операции проводимые в BlockChain SmartHoldem непредсказуемы и могут происходить в любое время
                    (регистрация делегата, отправка транзакций, сумма транзакций, время транзакций, голосование итд)
                  </li>
                </ul>
              </div>

              <div class="postbox__details-content-2 pb-40">
                <h3>Структура блока SmartHoldem</h3>
                <p>
                  <span class="product__badge-item">id</span> - хэш текущего блока (вычисляется из всех включённых в
                  блок данных)
                </p>
                <ul>
                  <li>version - версия блока</li>
                  <li>height - высота блока</li>
                  <li>previous - предыдущий хэш блока</li>
                  <li>forged - нформация о форжинге (reward, fee, amount, total)</li>
                  <li>payload - полезная нагрузка, список хэшей транзакций</li>
                  <li>generator - делегат подписавший блок (username, address, publicKey)</li>
                  <li>signature - подпись делегата подписавшего блок</li>
                  <li>transactions - число транзакций в блоке</li>
                  <li>timestamp - время блока</li>
                </ul>
                <p class="mt-20">
                  <a class="text-primary" target="_blank"
                     href="https://node0.smartholdem.io/api/blocks/d291a92dce4d774285d9d0c4e6e1cc1f765c6e30ca2733f337c80c8af932dfa0">
                    <i class="fa fa-link"></i> Смотреть блок в обозревателе
                  </a>
                </p>

              </div>

              <div class="postbox__details-content-2 pb-60">
                <h3>Как это работает на примере лотереи</h3>
                <div class="row">
                  <div class="col-xl-12">
                    <div class="postbox__img-2 m-img mt-45 mb-20">
                      <img src="~/assets/img/sth/lotto/2.png" alt="" class="rounded-3">
                    </div>
                  </div>
                </div>
                <p>Придумаем простые правила лотереи: номера билетов от 0 до 99, розыгрыш происходит каждые 2880 блоков,
                  победителем является игрок угадавший случайный номер билета.</p>
                <p>До начала розыгрыша лотереи, Дарья приобрела билет за <strong>STH</strong> с номером <span
                    class="product__badge-item bg-primary">14</span>,
                  Василий приобрёл билет с номером <span class="product__badge-item bg-primary">21</span></p>
                <p>Каждый участник лотереи совершил транзакцию в блокчейне SmartHoldem с номером билета в
                  примечании, подписанную уникальной крипто-подписью.</p>
                <p>Транзакции добавлены в блок, блок получил уникальный хэш состоящий из транзакций, хэша предыдущего
                  блока и других данных.</p>
                <p>Каждый 8 секунд делегатами создаётся новый блок. Пример хэша блока: <a class="text-primary"
                                                                                          href="https://explorer.smartholdem.io/#/block/bd082c731d2736db20bf4c1851cf2000a5d43363ba0b177b92db695d960fbda8">bd082c73...960fbda8</a>
                </p>
                <p>Розыгрыш назначен через 2880 блоков.</p>
                <p>К примеру достигнут блок на котором должен состояться розыгрыш лотереи <a class="text-primary"
                                                                                             target="_blank"
                                                                                             href="https://explorer.smartholdem.io/#/block/d2c6f1abc68cbd56aa809a5dc8565237cf0d21aa9537a475526d1867cae17f0e">d2c6f1ab...cae17f0e</a>
                </p>
                <p>Нам необходимо вычислить выигрышный номер в десятичной системе исчисления (DEC) на основе 16-ричного
                  (HEX) хэша блока</p>
                <p>Т.к. для нас достаточны от 00 до 99, возьмём из хэша блока крайние значения:</p>
                <ul>
                  <li>Block Hash: d2c6f1abc68cbd56aa809a5dc8565237cf0d21aa9537<span class="text-success font-bold">a475526d1867cae17f0e</span>
                  </li>
                  <li>HEX 10 байт справа: &nbsp;<span class="product__badge-item">a4</span>
                    &nbsp;<span class="product__badge-item">75</span>
                    &nbsp;<span class="product__badge-item">52</span>
                    &nbsp;<span class="product__badge-item">6d</span>
                    &nbsp;<span class="product__badge-item">18</span>
                    &nbsp;<span class="product__badge-item">67</span>
                    &nbsp;<span class="product__badge-item">ca</span>
                    &nbsp;<span class="product__badge-item">e1</span>
                    &nbsp;<span class="product__badge-item">7f</span>
                    &nbsp;<span class="product__badge-item">0e</span></li>
                  <li>Преобразуем в байты Uint8Array: 164,117,82,109,24,103,202,225,127,14</li>
                  <li>Числовой ряд: 164117821092410320222512714</li>
                  <li>Номер выигрышного билета: <span class="badge product__badge-item text-info">14</span></li>
                </ul>

                <p>В этом случает победитель лотереи Дарья.</p>
                <p>Предположим у Василия машина времени и он знает выигрышное число 14, возвращается в прошлое и
                  приобретает билет с номером 14.</p>
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
                    <li>Непредсказуемую энтропию для seed</li>
                    <li>Настоящее случайное число</li>
                    <li>Каждые 8 секунд создаются случайные числа</li>
                    <li>Длинную поледовательность чисел</li>
                    <li>Защиту от путешественников во времени</li>
                    <li>Пользователи и заверители блоков создают энтропию</li>
                    <li>Легко управляемые правила работы с числами</li>
                    <li>Вы можете использовать RNG API для своих идей без ограничений</li>
                    <li>Широкий набор вариантов использования (розыгрыши, лотереи, призы, события)</li>
                  </ul>
                </div>

                <div class="row">
                  <div class="col-xl-12">
                    <div class="postbox__img-2 m-img mt-45 mb-20">
                      <img
                          src="~/assets/img/sth/lotto/1.png" alt="" class="rounded-3">
                    </div>
                  </div>
                </div>

                <p>В процессе ожидания разыгрываемого блока другие пользователи совершают свои случайные транзакции не
                  связанные с лотереей, но влияя на конечный хэш дерева Меркла.</p>
                <p>Возможно усложнить алгоритм к примеру конкатенацией имени делегата подписавшего блок (каждый раунд
                  делегаты назначаются crypto random) + хэш блока, получая из них новый хэш. Вы сами создаёте правила
                  генерации чисел, взял за энтропию блокчейн SmartHoldem</p>
                <p>Добавить crypto.randomInt, crypto.randomUUID, HMAC, Lamport signatures, функции хэширования, ECDH,
                  Scrypt - нет ограничений для ваших идей.</p>
                <p><i>На данный момент десятичные значения по умолчанию: 0..9, 0..99, 0..999 итд</i></p>
                <p>Блокчейн-энтропию возможно использовать в качестве стартового сида для генерации числового ряда</p>
                <p>
                  <a target="_blank" href="https://wiki.smartholdem.io/ru/api/rng"
                     class="btn btn-outline-dark text-uppercase"><i
                      class="fa fa-dice-six"></i> Перейти к RNG API</a>
                </p>

                <div class="small"><i class="fa fa-castle"></i> Все изображения созданы в нейронной сети <a
                    class="text-primary" target="_blank" href="https://t.me/STHxBot">SmartHoldem</a></div>
                <div class="postbox__share-wrapper mt-45 mb-25">
                  <div class="row align-items-center">
                    <div class="col-xl-7 col-lg-7">
                      <div class="tagcloud tagcloud-style-2">
                        <span>Tags:</span>
                        <a href="#">Blog</a>
                        <a href="#">{{ $t('innovations') }}</a>
                      </div>
                    </div>
                    <div class="col-xl-5 col-lg-5">
                      <div class="postbox__share postbox__share-2 text-lg-end">
                        <span>{{ $t('share') }}</span>
                        <a target="_blank" href="https://vk.com/share.php?url=https://smartholdem.io/ru/rng/"><i
                            class="fab fa-vk"></i></a>
                        <a target="_blank"
                           :href="'https://twitter.com/share?url=https://smartholdem.io/rng/&via=smartholdem&text='+$t('meta.rng')"><i
                            class="fab fa-twitter"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/shareArticle?url=https://smartholdem.io/rng/"><i
                            class="fa-brands fa-linkedin-in"></i></a>
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
//import SingleBlogGridItem from '../blogs/single-blog/SingleBlogGridItem.vue';
//import BlogCommentForm from '../forms/BlogCommentForm.vue';
//import CommentArea from './CommentArea.vue';
//import PostboxNavigation from './PostboxNavigation.vue';

import axios from 'axios';
import {Buffer} from 'buffer'


export default {
  components: {},
  mixins: [blogData],
  data() {
    return {
      thumb_bg,
      block: null,
      hexBytes: [],
      hexBytesArray: [],
      timer: null,
      seconds: 8,
    }
  },
  methods: {
    async blockId() {
      let result = null;

      try {
        this.block = (await axios('https://node0.smartholdem.io/api/blockchain')).data.data.block;
      } catch (e) {

      }
      return this.block
    },
    async rngUpdate() {
      const globalBuffer = Buffer;
      this.hexBytesArray = []
      const blockId = await this.blockId()
      let hexBytes = (await Uint8Array.from(globalBuffer.from(blockId.id.substr(-34), 'hex'))); //10 bytes
      for (let i = 0; i < hexBytes.length; i++) {
        this.hexBytesArray.push(hexBytes[i])
      }
    }
  },
  async created() {
    clearInterval(this.timer);
    await this.rngUpdate();
    this.timer = setInterval(async () => {
      this.seconds = this.seconds - 1;
      if (this.seconds < 0) {
        this.seconds = 8;
        await this.rngUpdate()
      }
    }, 1000);


  }
}
</script>
