<template>
  <section class="services__area pt-120 pb-125">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="services__widget-2 pr-50">
            <div class="services__widget-item-2 mb-30">
              <div class="services__widget-tab-2 tp-tab">
                <ul>
                  <li>
                    <a href="#tokenomics-supply" class="">
                      <span>
                        <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M21 7V19C21 23.8 19.75 25 14.75 25H7.25C2.25 25 1 23.8 1 19V7C1 2.2 2.25 1 7.25 1H14.75C19.75 1 21 2.2 21 7Z"
                              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path opacity="0.4" d="M13.5117 5.20044H8.51172" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round"/>
                          <path opacity="0.4"
                                d="M10.9961 21.5196C12.0661 21.5196 12.9336 20.6868 12.9336 19.6596C12.9336 18.6323 12.0661 17.7996 10.9961 17.7996C9.92604 17.7996 9.05859 18.6323 9.05859 19.6596C9.05859 20.6868 9.92604 21.5196 10.9961 21.5196Z"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"/>
                        </svg>
                      </span>
                      {{$t('tkn_title1')}}
                      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#tkn-deflation" class="">
                      <span>
                        <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.2222 1L1 15.6667H12L10.7778 25.4444L23 10.7778H12L13.2222 1Z"
                                stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </span>
                      {{$t('tkn_title2')}}
                      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/about-wallet')" class="">
                      <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.4"
                                d="M19.6906 7.6C21.5132 7.6 22.9906 6.12254 22.9906 4.3C22.9906 2.47746 21.5132 1 19.6906 1C17.8681 1 16.3906 2.47746 16.3906 4.3C16.3906 6.12254 17.8681 7.6 19.6906 7.6Z"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"/>
                          <path opacity="0.4" d="M6.5 13.1006H12" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round"/>
                          <path opacity="0.4" d="M6.5 17.5H16.4" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round"/>
                          <path
                              d="M14.2 1H8.7C3.2 1 1 3.2 1 8.7V15.3C1 20.8 3.2 23 8.7 23H15.3C20.8 23 23 20.8 23 15.3V9.8"
                              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </span>
                      Pin Code
                      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                      </svg>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/about-wallet')" class="">
                      <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.4"
                                d="M19.5202 11.652C22.4709 11.652 23.6966 10.5171 22.6071 6.79468C21.8694 4.28656 19.7131 2.13026 17.205 1.39258C13.4826 0.303087 12.3477 1.52877 12.3477 4.47949V7.74799C12.3477 10.5171 13.4825 11.652 15.7523 11.652H19.5202Z"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path
                              d="M21.4297 14.7162C20.3742 19.9708 15.3353 23.784 9.60407 22.8534C5.30283 22.1611 1.8414 18.6997 1.13777 14.3985C0.218507 8.68995 4.00905 3.65103 9.24091 2.58423"
                              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </span>
                      Total Security
                      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                      </svg>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div v-show="$i18n.locale === 'ru'" class="col-lg-8 order-first order-lg-last">
          <div id="tokenomics-supply" class="services__details-wrapper">
            <h3 class="services__details-title">Предложение сокращается, ценность растёт</h3>
            <p>
              STH - это собственная служебная монета блокчейна SmartHoldem.
            </p>
            <p>
              SmartHoldem STH - это ограниченный, дефицитный актив, который используется для:
            </p>
            <ul>
              <li>Единая игровая валюта в блокчейн играх</li>
              <li>Оплата комиссий за транзакции</li>
              <li>Голосование за делегатов</li>
              <li>Регистрация имён</li>
              <li>Создание токенов</li>
              <li>Транзакции сжигания</li>
              <li>Перевод активов</li>
              <li>IPFS транзакции</li>
              <li>Мультиплатежи</li>
              <li>Исполнение блокчейн контрактов</li>
              <li>Генерация SmartNotes на основе Zero-Knowledge Proof</li>
              <li>Различные типы игровых транзакций</li>
              <li>Стейкинг SmartHolder</li>
              <li>DeFi актив в более 30+ DeFi пулах</li>
            </ul>

            <div class="services__details-thumb m-img">
              <img src="~/assets/img/sth/tokemomic/1.png" alt="tokemomic 1">
            </div>
            <p>
              При первоначальном распределении монет SmartHoldem STH приоритет был отдан участникам ICO SmartHoldem,
              среди них было распределено 83% от общего объема выпуска STH, 8% распределено среди консультантов и
              ангелов, 3% среди участников Bounty кампании, и 6% было зарезервировано в фонде разработчиков платформы.
              Распределение проходило под контролем известных Escrow форума BitcoinTalk, которых выбрали участники
              сообщества SmartHoldem.
            </p>
            <div class="services__details-thumb m-img">
              <img src="~/assets/img/sth/tokemomic/2.png" alt="tokemomic smartholdem pic 2">
            </div>
            <p id="tkn-deflation" >
              На момент генезис блока было выпущено фиксированное количество монет - 240 миллионов SmartHoldem STH.
              Чтобы стимулировать делегатов-валидаторов, в блокчейне SmartHoldem была реализована модель c ограниченной
              эмиссией. Согласно этой модели к 2041 году планировалось нафоржить 256 425 000 монет SmartHoldem STH.
              (https://github.com/smartholdem/smartholdem-node-a/blob/master/helpers/constants.js)
            </p>

            <div class="services__details-text mb-25">
              <h3 class="services__details-text-title">Дефляционная модель с Ограниченной эмиссией</h3>
              <p>
                После запуска глобального обновления SmartHoldem 2.0 инфраструктуры платформы, SmartHoldem перешел от
                Инфляционной модели с ограниченной эмиссией к Дефляционной модели с ограниченной эмиссией. Эмиссия в
                DPoS SmartHoldem L1 полностью остановлена.
              </p>
              <p>
                Дефляционная модель снизит общее предложение криптовалюты SmartHoldem STH и определит циркулирующее
                предложение: Min 100,000,000 STH - Max 150,000,000 STH.
              </p>
              <p>
                На момент написания этой статьи, общее предложение SmartHoldem STH составляет 249 677 907 STH, при этом
                92 093 STH <a target="_blank" class="text-primary"
                              href="https://explorer.smartholdem.io/#/wallets/STHsmartHoLdemBurnAddrHereXXXmUW7f">были
                сожжены</a>.
                Дефляционная модель уже начала сокращать общий объём предложения.
              </p>
            </div>
            <div class="services__details-thumb m-img">
              <img src="~/assets/img/sth/tokemomic/3.png" alt="tokemomic smartholdem pic-3">
            </div>
            <p>
              В сети SmartHoldem DPoS предусмотрен дефляционный механизм, сжигающий 50% комиссий. Этот механизм, по мере
              роста сети, приведет к снижению общего и оборотного предложения SmartHoldem STH до 100,000,000 STH.
            </p>
            <p>
              Когда общий объем поставок снизится до 100 миллионов STH, сеть DPoS перестанет сжигать 50% комиссий. Как
              только общий объем поставок достигнет 150 миллионов STH, в блокчейне DPoS активируется протокол сжигания
              50% комиссий.
            </p>
            <div class="services__details-thumb m-img">
              <img src="~/assets/img/sth/tokemomic/4.png" alt="tokemomic smartholdem pic-4">
            </div>


            <div class="services__details-text mb-25">
              <h3 class="services__details-text-title">PoST блокчейн</h3>
              <p>
                Блокчейн SmartHoldem PoSt стартует с 0 монет. Награда за блок уменьшается вдвое каждые 2 года.
                Предусмотрено включение алгоритма сжигания комиссий в PoSt сети.
              </p>
            </div>
            <div class="services__details-text mb-25">
              <h3 class="services__details-text-title">Совместимость</h3>
              <p>
                Взаимодействие между блокчейнами DPoS и PoSt будет реализовано посредством инновационного протокола SID.
              </p>
              <p>
                Протокол SID расшифровывается как Smart Inter-Chain Data Communication Protocol. Модуль протокола
                встроен в ноды DpoS и PoSt SmartHoldem, где каждый блокчейн напрямую слушает друг друга на предмет
                специальных типов транзакций.
              </p>
              <p>
                Модуль SID гарантирует, что монета SmartHoldem STH не дублируется в другом блокчейне, что еще больше
                повышает целостность системы.
              </p>
              <p>
                Как это работает: Пользователь отправляет 100 STH из сети DPoS в сеть PoSt. 100 STH сжигаются в DPoS
                блокчейне и 100 STH выпускаются в PoSt блокчейне.
              </p>
            </div>


            <div class="services__details-thumb m-img">
              <img src="~/assets/img/sth/tokemomic/5.png" alt="tokemomic 5">
            </div>

            <div class="services__details-text mb-25">
              <p>Протокол SID устанавливает новый стандарт обмена данными между блокчейнами, устраняя необходимость в
                стороннем посреднике.</p>
              <p>
                Используя модуль SID, другие блокчейн-проекты могут эффективно реализовать стандартизированную связь
                между блокчейнами. Это позволяет создать децентрализованную сеть независимых цепочек, которые
                беспрепятственно обмениваются информацией и активами.
              </p>
              <p>
                Эта концепция, часто называемая «Интернетом блокчейнов», обладает потенциалом для повышения
                масштабируемости, безопасности и совместимости.
              </p>
            </div>

            <!-- faq start -->
            <!--
            <service-details-faq/>
            -->
            <!-- faq end -->
          </div>
        </div>

        <div v-show="$i18n.locale !== 'ru'" class="col-lg-8 order-first order-lg-last">
          <div class="services__details-wrapper">
            <h3 class="services__details-title">STH is the native utility token of SmartHoldem blockchain</h3>
            <p>
              SmartHoldem STH is a hard-capped, scarce asset that is used for:
            </p>
            <ul>
              <li>Fuel for Games and Apps</li>
              <li>Payment of transaction fees</li>
              <li>Voting for delegates</li>
              <li>Registration of names</li>
              <li>Issue of tokens</li>
              <li>Burn transaction</li>
              <li>Transfer of assets</li>
              <li>IPFS transactions</li>
              <li>Multipayments</li>
              <li>Smart Contracts</li>
              <li>Generation of SmartNotes based on Zero-Knowledge Proof</li>
              <li>Various types of game transactions</li>
              <li>Staking SmartHolder</li>
              <li>DeFi asset in over 30+ DeFi pools</li>
            </ul>

            <div class="services__details-thumb m-img">
              <img src="~/assets/img/sth/tokemomic/1.png" alt="tokemomic 1">
            </div>
            <p>
              In the initial distribution of SmartHoldem STH coins, priority was given to SmartHoldem ICO participants,
              with 83% of the total STH supply distributed to them, 8% to advisors and angels, 3% to Bounty campaign
              participants, and 6% reserved in the Dev fund. The distribution took place under the control of the
              well-known Escrows of the BitcoinTalk forum, which were chosen by members of the SmartHoldem community.
            </p>
            <div class="services__details-thumb m-img">
              <img src="~/assets/img/sth/tokemomic/2.png" alt="tokemomic smartholdem pic 2">
            </div>
            <p>
              A fixed amount of 240M SmartHoldem STH was minted at Genesis. TA limited emission model was implemented in
              the SmartHoldem blockchain to incentivize delegate validators. According to this model, it was planned to
              forge 256,425,000 SmartHoldem STH coins by 2041.
              (https://github.com/smartholdem/smartholdem-node-a/blob/master/helpers/constants.js)
            </p>

            <div class="services__details-text mb-25">
              <h3 class="services__details-text-title">Deflationary model with limited emission</h3>
              <p>
                After the launch of the global update 2.0 of the platform infrastructure, SmartHoldem has moved from an
                Inflationary model with limited emission to a Deflationary model with limited emission. Emission in DPoS
                SmartHoldem L1 has been completely stopped.
              </p>
              <p>
                The deflationary model will reduce the total supply of the SmartHoldem STH cryptocurrency and determine
                the circulating supply: Min 100,000,000 STH - Max 150,000,000 STH.
              </p>
              <p>
                When writing this article, the total supply of SmartHoldem STH was 249,677,907 STH, with 92,093 STH
                burned. The deflationary model had already begun reducing the total supply.
              </p>
            </div>
            <div class="services__details-thumb m-img">
              <img src="~/assets/img/sth/tokemomic/3.png" alt="tokemomic smartholdem pic-3">
            </div>
            <p>
              The SmartHoldem DPoS network has a deflationary mechanism that burns 50% of commissions. As the network
              grows, this mechanism will reduce the total and circulating supply of SmartHoldem STH to 100,000,000 STH.
            </p>
            <p>
              When the total supply is reduced to 100,000,000 STH, the DPoS network will stop burning 50% of the fees.
              Once the total supply reaches 150,000,000 STH on the DPoS blockchain, the 50% fee burn protocol will be
              activated.
            </p>
            <div class="services__details-thumb m-img">
              <img src="~/assets/img/sth/tokemomic/4.png" alt="tokemomic smartholdem pic-4">
            </div>


            <div class="services__details-text mb-25">
              <h3 class="services__details-text-title">PoSt blockchain</h3>
              <p>
                The SmartHoldem PoSt blockchain starts with 0 coins. The block reward is halved every two years.
                Including an algorithm for burning commissions in the PoSt network is possible.
              </p>
            </div>
            <div class="services__details-text mb-25">
              <h3 class="services__details-text-title">Interoperability</h3>
              <p>
                The interaction between DPoS and PoSt blockchains will be implemented through an innovative SID
                protocol.
              </p>
              <p>
                The Smart Inter-Chain Data Communication Protocol (SID) will be incorporated into the DpoS and PoSt
                SmartHoldem nodes, enabling blockchains to communicate directly for certain transactions.
              </p>
              <p>
                The SID module ensures that the SmartHoldem STH coin is not duplicated in another blockchain, enhancing
                the system's integrity.
                How it works: The user sent 100 STH from the DPoS network to the PoSt network. 100 STH were burned in
                the DPoS blockchain, and 100 STH were issued in PoSt.
              </p>
              <p>
                The SID protocol establishes a new standard for exchanging data between blockchains, eliminating the
                need for a third-party intermediary.
              </p>
            </div>


            <div class="services__details-thumb m-img">
              <img src="~/assets/img/sth/tokemomic/5.png" alt="tokemomic 5">
            </div>

            <div class="services__details-text mb-25">
              <p>The SID protocol establishes a new standard for exchanging data between blockchains, eliminating the
                need for a third-party intermediary.</p>
              <p>
                Using the SID module, other blockchain projects can effectively implement standardized inter-blockchain
                communication. This enables the establishment of a decentralized network of independent chains that
                seamlessly exchange information and assets.
              </p>
              <p>
                This concept, often called the "Internet of Blockchains," holds the potential for enhanced scalability
                and interoperability.
              </p>
            </div>

            <!-- faq start -->
            <!--
            <service-details-faq/>
            -->
            <!-- faq end -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ServiceDetailsFaq from '../faqs/ServiceDetailsFaq.vue';
import ServiceDetailsForm from '../forms/ServiceDetailsForm.vue';

export default {
  components: {ServiceDetailsFaq, ServiceDetailsForm},

}
</script>
