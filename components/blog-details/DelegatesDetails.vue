<template>
  <section class="postbox__area">
    <div class="postbox__wrapper postbox__style-2">
      <div class="postbox__top">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <div class="postbox__category">
                <a href="#">Blockchain</a>
              </div>
              <h3 class="postbox__title">{{$t('delegate')}}</h3>
              <h3 class="text-white">{{$t('delegate_sub')}}</h3>
              <div class="postbox__thumb postbox__thumb-overlay m-img mb-55"
                   :style="{ backgroundImage: `url(${thumb_bg})` }">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="$i18n.locale === 'ru'" class="postbox__main-wrapper pt-40">

        <div class="container overflow-x-hidden">
          <h2 class="text-center mb-55">Установи ноду SmartHoldem и заработай на комиссиях</h2>

          <div class="row">
            <div class="col-xl-2 col-lg-2 col-md-1">
              <img src="~/assets/img/delegate/delegate01.png" alt="delegate 1"/>
            </div>
            <div class="col-xl-8 col-lg-9 col-md-11">
              <div class="postbox__details-content-wrapper">
                <h3 class="postbox__details-title-2">Стань делегатом</h3>
                <p>Любой желающий может управлять узлом SmartHoldem и зарегистрировать делегата. Для запуска ноды
                  SmartHoldem вам понадобится выделенный сервер и ,желательно, резервный сервер. Мы рекомендуем
                  использовать качественные сети, а не дешевые VPS провайдеры.
                  <br/><strong>Технические характеристики SmartHoldem Node:</strong> 16 GB RAM, CPU 4, 64 ГБ HDD или 32
                  SDD.
                </p>
                <p>
                  <strong>Нода SmartHoldem</strong> <a target="_blank" href="https://github.com/smartholdem/sth-core">https://github.com/smartholdem/sth-core</a>
                </p>
              </div>
            </div>
          </div>

          <div class="row mt-30">
            <div class="col-xl-2 col-lg-2 col-md-1">
              <img src="~/assets/img/delegate/delegate02.png" alt="delegate 2"/>
            </div>
            <div class="col-xl-8 col-lg-9 col-md-11">
              <div class="postbox__details-content-wrapper">
                <h3 class="postbox__details-title-2">Награды Делегатов</h3>
                <p>Делегат, подписавший блок, получает ВСЕ КОМИССИИ за транзакции, включенные в блок. Различные
                  транзакции имеют разные комиссии в блокчейне SmartHoldem. Например, если блок включает 500 стандартных
                  транзакций, делегат получит до 500 STH. Если в блоке не было транзакций, делегат ничего не заработает
                  за этот блок. Если блок включает транзакцию регистрации делегата, делегат заработает 10 000 STH.
                </p>
                <p>
                  <strong>Список комиссий в блокчейне SmartHoldem</strong> <a target="_blank"
                                                                              href="https://wallet.smartholdem.io/blockchain">https://wallet.smartholdem.io/blockchain</a>
                </p>
              </div>
            </div>
          </div>

          <div class="row mt-30">
            <div class="col-xl-2 col-lg-2 col-md-1">
              <img src="~/assets/img/delegate/delegate03.png" alt="delegate 3"/>
            </div>
            <div class="col-xl-8 col-lg-9 col-md-11">
              <div class="postbox__details-content-wrapper">
                <h3 class="postbox__details-title-2">Делегаты Top 21</h3>
                <p>
                  В SmartHoldem DPoS пользователи сети голосуют и выбирают делегатов, их также называют свидетелями,
                  валидаторами или производителями блоков. Делегаты отвечают за безопасность сети блокчейна. Они
                  проверяют транзакции, создают новые блоки и защищают сеть SmartHoldem. В обмен на каждый подписанный
                  блок делегаты получают вознаграждения. Делегаты не могут изменять информацию о транзакциях блокчейна
                  или влиять на них. Только 21 активный делегат может быть в Топе. Делегаты могут меняться, так как
                  избираются пользователями. Другие зарегистрированные делегаты находятся в режиме релейного узла.</p>
                <p>
                  <strong>Форум Делегатов</strong> <a target="_blank"
                                                      href="https://community.smartholdem.io/category/207/smartholdem-2-0-delegates">https://community.smartholdem.io/category/207/smartholdem-2-0-delegates</a>
                </p>
              </div>
            </div>
          </div>

          <div class="row mt-30">
            <div class="col-xl-2 col-lg-2 col-md-1">
              <img src="~/assets/img/delegate/delegate04.png" alt="delegate 4"/>
            </div>
            <div class="col-xl-8 col-lg-9 col-md-11">
              <div class="postbox__details-content-wrapper">
                <h3 class="postbox__details-title-2">Статистика делегатов</h3>
                <p>
                  SmartHoldem DPoS децентрализован и управляется сообществом владельцев цифровых активов. Блокчейн
                  работает на консенсусе Delegated Proof-of-Stake (BFT) с 21 слотом для топ-делегатов и 8-секундным
                  временем блока.
                </p>
                <p>
                  <strong>Посмотрите всю ключевую статистику для делегатов SmartHoldem</strong>&nbsp;
                  <a target="_blank" href="https://explorer.smartholdem.io/#/delegate-monitor">https://explorer.smartholdem.io/#/delegate-monitor</a>
                </p>
              </div>
            </div>
          </div>

          <div class="row mt-30">
            <div class="col-xl-2 col-lg-2 col-md-1">
              <img src="~/assets/img/delegate/delegate05.png" alt="delegate 5"/>
            </div>
            <div class="col-xl-8 col-lg-9 col-md-11">
              <div class="postbox__details-content-wrapper">
                <h3 class="postbox__details-title-2">Связь с сообществом</h3>
                <p>
                  Активное участие в сообществе поможет получить необходимые для делегата голоса . Это конкурентный
                  процесс, который выходит за рамки управления узлами.
                  Создание новых приложений, предложение дополнительных услуг или взаимодействие с сообществом могут
                  иметь значение для получения положительных голосов.
                  В качестве делегата, вы можете дать избирателям процент от прибыли ноды в обмен на их голоса,
                  необходимые для попадания в TOП-21 лучших.
                </p>
              </div>
            </div>
          </div>


          <div class="row mt-30">
            <div class="col-md-12">
              <div class="postbox__details-content-wrapper">

                <h3 class="postbox__details-title-2 text-center"><img style="width: 36px !important;" src="~/assets/img/icon/section-title-bag.png" alt=""/> Пошаговая инструкция: <br/>Регистрация Делегата и
                  Установка ноды</h3>
                <p>
                  <strong>1. Регистрация делегата в SmartHoldem Wallet</strong> <a target="_blank" href="https://wallet.smartholdem.io">https://wallet.smartholdem.io</a>
                  <br/>Стоимость транзакции регистрации делегата -10 000 STH
                </p>
                <p>
                  <strong>2. Установка SmartHoldem node</strong> <a target="_blank" href="https://github.com/smartholdem/sth-core">https://github.com/smartholdem/sth-core </a>
                </p>
                <p>
                  <strong>3. Публикация объявления делегата на форуме сообщества</strong> <a target="_blank"
                                                                            href="https://community.smartholdem.io/category/207/smartholdem-2-0-delegates">https://community.smartholdem.io/category/207/smartholdem-2-0-delegates</a>
                  <br/>Предложение делегата с подробным описанием конфигурации сервера, предлагаемого процента выплат
                  или дополнительных услуг
                </p>
                <p>
                  <strong>4. Представление делегата в сообществе SmartHoldem</strong> <a target="_blank" href="https://t.me/smartholdem">https://t.me/smartholdem</a>
                </p>
                <p>
                  <strong>5. Получить SmartHoldem STH</strong> <a
                    href="https://smartholdem.io/buy-sth">https://smartholdem.io/buy-sth</a>
                  <br/>Вы можете купить SmartHoldem STH на Cex и Dex биржах, обменять в пулах DeFi, принять участие в
                  Airdrop, или создать полезное приложение на базе STH и получить вознаграждение из фонда разработчиков.
                </p>
              </div>
            </div>
          </div>


          <div class="row mb-55">
            <div class="col-xl-12">
              <div class="postbox__img-2 m-img mt-10 mb-20">
                <img src="~/assets/img/delegate/reg.png" title="delegate registration in blockchain" alt="smartholdem delegate/validator registration in blockchain" class="rounded-3">
              </div>
            </div>
          </div>
        </div>
      </div>


      <div v-else class="postbox__main-wrapper pt-40">
        <div class="container overflow-x-hidden">
          <h2 class="text-center mb-55">Run a SmartHoldem node and earn STH rewards</h2>

          <div class="row">
            <div class="col-xl-2 col-lg-2 col-md-1">
              <img src="~/assets/img/delegate/delegate01.png" alt="delegate 1"/>
            </div>
            <div class="col-xl-8 col-lg-9 col-md-11">
              <div class="postbox__details-content-wrapper">
                <h3 class="postbox__details-title-2">Become a Delegate</h3>
                <p>Anyone can become a SmartHoldem delegate. To run a SmartHoldem node you will need a dedicated server
                  and preferably a backup server. We recommend using quality networks rather than cheap VPS providers.
                  <br/><strong>SmartHoldem Node specifications:</strong> 16 GB RAM, CPU 4, 64 GB HDD or 32 SDD.
                  SDD.
                </p>
                <p>
                  <strong>Installation of SmartHoldem Node</strong> <a target="_blank"
                                                                       href="https://github.com/smartholdem/sth-core">https://github.com/smartholdem/sth-core</a>
                </p>
              </div>
            </div>
          </div>

          <div class="row mt-30">
            <div class="col-xl-2 col-lg-2 col-md-1">
              <img src="~/assets/img/delegate/delegate02.png" alt="delegate 2"/>
            </div>
            <div class="col-xl-8 col-lg-9 col-md-11">
              <div class="postbox__details-content-wrapper">
                <h3 class="postbox__details-title-2">Delegate Rewards</h3>
                <p>
                  The delegate who signs the block receives ALL NETWORK FEES for the transactions that the block
                  includes. Fees vary for different transactions. For example, if a block includes 500 standard
                  transactions, the delegate can earn up to 500 STH. Also, a delegate registration transaction earns the
                  delegate 10,000 STH.
                </p>
                <p>
                  <strong>List of fees on the SmartHoldem DPoS</strong> <a target="_blank"
                                                                           href="https://wallet.smartholdem.io/blockchain">https://wallet.smartholdem.io/blockchain</a>
                </p>
              </div>
            </div>
          </div>

          <div class="row mt-30">
            <div class="col-xl-2 col-lg-2 col-md-1">
              <img src="~/assets/img/delegate/delegate03.png" alt="delegate 3"/>
            </div>
            <div class="col-xl-8 col-lg-9 col-md-11">
              <div class="postbox__details-content-wrapper">
                <h3 class="postbox__details-title-2">What are Delegates?</h3>
                <p>
                  In SmartHoldem DPoS, network users vote and elect delegates, also known as witnesses, validators, or
                  block producers. Delegates are responsible for the security of the blockchain network. They verify
                  transactions, create new blocks, and secure the SmartHoldem network. In exchange for each signed
                  block, delegates receive rewards. Delegates cannot change or influence blockchain transaction
                  information. Only 21 active delegates can be at the Top. Delegates can change as users elect them.
                  Other registered delegates are in relay node mode.
                </p>
                <p>
                  <strong>SmartHoldem delegates forum</strong> <a target="_blank"
                                                                  href="https://community.smartholdem.io/category/207/smartholdem-2-0-delegates">https://community.smartholdem.io/category/207/smartholdem-2-0-delegates</a>
                </p>
              </div>
            </div>
          </div>

          <div class="row mt-30">
            <div class="col-xl-2 col-lg-2 col-md-1">
              <img src="~/assets/img/delegate/delegate04.png" alt="delegate 4"/>
            </div>
            <div class="col-xl-8 col-lg-9 col-md-11">
              <div class="postbox__details-content-wrapper">
                <h3 class="postbox__details-title-2">Delegate Stats</h3>
                <p>
                  SmartHoldem DPoS is decentralized and governed by a community of digital asset owners. It runs on a
                  delegated proof-of-stake blockchain with 21 top delegate (BFT) slots and 8-second block times.
                </p>
                <p>
                  <strong>See all the key stats for SmartHoldem delegates</strong>&nbsp;
                  <a target="_blank" href="https://explorer.smartholdem.io/#/delegate-monitor">https://explorer.smartholdem.io/#/delegate-monitor</a>
                </p>
              </div>
            </div>
          </div>

          <div class="row mt-30">
            <div class="col-xl-2 col-lg-2 col-md-1">
              <img src="~/assets/img/delegate/delegate05.png" alt="delegate 5"/>
            </div>
            <div class="col-xl-8 col-lg-9 col-md-11">
              <div class="postbox__details-content-wrapper">
                <h3 class="postbox__details-title-2">Community Connection</h3>
                <p>
                  Being active in the community will help you get the votes you need to be a delegate. This is a competitive process that goes beyond just running nodes. Creating new applications, offering additional services, or engaging with the community can all be important in getting positive votes. As a delegate, you can give voters a percentage of the node's profits in exchange for their votes to get into the Top 21.
                </p>
              </div>
            </div>
          </div>


          <div class="row mt-30">
            <div class="col-md-12">
              <div class="postbox__details-content-wrapper">
                <h3 class="postbox__details-title-2 text-center"><img style="width: 36px !important;" src="~/assets/img/icon/section-title-bag.png" alt=""/> Step-by-step guide on how to register as a delegate</h3>
                <p>
                  <strong>1. Register your delegate in SmartHoldem Wallet</strong> <a target="_blank" href="https://wallet.smartholdem.io">https://wallet.smartholdem.io</a>
                  <br/>Delegate registration transaction cost - 10,000 STH
                </p>
                <p>
                  <strong>2. Set up SmartHoldem node</strong> <a target="_blank" href="https://github.com/smartholdem/sth-core">https://github.com/smartholdem/sth-core </a>
                </p>
                <p>
                  <strong>3. Declare your delegate in the community forum</strong> <a target="_blank"
                                                                            href="https://community.smartholdem.io/category/207/smartholdem-2-0-delegates">https://community.smartholdem.io/category/207/smartholdem-2-0-delegates</a>
                  <br/>Submit a proposal detailing your network configuration, proposed payout percentage, and additional services
                </p>
                <p>
                  <strong>4. Introduce your delegate to the community</strong> <a target="_blank" href="https://t.me/smartholdem">https://t.me/smartholdem</a>
                </p>
                <p>
                  <strong>5. Get SmartHoldem STH</strong> <a
                    href="https://smartholdem.io/buy-sth">https://smartholdem.io/buy-sth</a>
                  <br/>You can buy SmartHoldem STH on Cex and Dex exchanges, swap it in DeFi pools, claim STH in Airdrop, or create an App based on STH and get a reward from the developer fund
                </p>
              </div>
            </div>
          </div>


          <div class="row mb-55">
            <div class="col-xl-12">
              <div class="postbox__img-2 m-img mt-10 mb-20">
                <img src="~/assets/img/delegate/reg.png" alt="" class="rounded-3">
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </section>
</template>

<script>
import thumb_bg from '~/assets/img/blog/delegate.png';
//import blogData from '~~/mixins/blogData';


export default {
  components: {},
  //mixins: [blogData],
  data() {
    return {
      thumb_bg,
      //timer: null,
      //seconds: 8,
    }
  },
  methods: {},
  async created() {
    /*
    clearInterval(this.timer);
    await this.rngUpdate();
    this.timer = setInterval(async () => {
      this.seconds = this.seconds - 1;
      if (this.seconds < 0) {
        this.seconds = 8;

      }
    }, 1000);

     */


  }
}
</script>
