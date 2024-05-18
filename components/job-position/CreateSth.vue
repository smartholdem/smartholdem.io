<template>
  <section :class="`job__area pb-140 ${style_2?'':'pt-35'}`">
    <div v-if="$i18n.locale === 'ru'" class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-section-wrapper-4 mb-50">
            <h3 class="tp-section-title-4">
              <img src="~/assets/img/icon/section-title-bag.png" alt="" />
              Стройте на SmartHoldem
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="job__item-wrapper">
            <sth-item
                delay="130"
                title="Масштабируемость"
                text="Блокчейн платформа для массового внедрения"
                value="5 529 600 000"
                info="операций в день"
                detail="https://community.smartholdem.io/topic/1007/%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9-%D1%80%D0%B5%D0%BA%D0%BE%D1%80%D0%B4-%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B9-%D1%81%D0%B5%D1%82%D0%B8-%D0%BE%D1%86%D0%B5%D0%BD%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D0%B8-%D0%BC%D0%B0%D1%81%D1%88%D1%82%D0%B0%D0%B1%D0%B8%D1%80%D1%83%D0%B5%D0%BC%D0%BE%D1%81%D1%82%D0%B8?_=1716039960961"
            />

            <sth-item
                delay="150"
                title="Конструктор комиссий"
                text="Низкие комиссии на все игровые операции"
                value="от $0,000014 до $0,0036"
                info="за транзакцию"
                detail="https://wiki.smartholdem.io"
            />

            <sth-item
                delay="170"
                title="Конструктор транзакций"
                text="Различные типы транзакций"
                value="Настраиваемая логика транзакций"
                info=""
                detail="https://wiki.smartholdem.io"
            />

            <sth-item
                delay="190"
                title="Игровой API и SDK"
                text="Мощный API с расширенной документацией и примерами"
                value="Node.js и UE5"
                info="(TypeScript)"
                detail="https://wiki.smartholdem.io"
            />

            <sth-item
              delay="130"
              title="TRNG"
              text="Генератор истинных случайных чисел"
              value="Розыгрыши, конкурсы, перетасовка колоды, лотерея, рулетка, бинго и т.д."
              info=""
              detail="/ru/rng"
            />

            <sth-item
              delay="150"
              title="Нейронные сети"
              text="Быстрая интеграция нейронных сетей в ваши сервисы"
              value="Генерация голоса, музыки, текста, изображений"
              info=""
              detail="https://community.smartholdem.io/topic/994/ai-%D1%87%D0%B0%D1%82-%D0%B1%D0%BE%D1%82-mr-sth-robot-%D0%BD%D0%B5%D0%B9%D1%80%D0%BE%D1%81%D0%B5%D1%82%D1%8C-smartholdem?_=1716039817307"
            />

            <sth-item
              delay="170"
              title="Партнёрские программы"
              text="Гарантированная партнёрка на блокчейне"
              value="Адрес в блокчейн игре"
              info="- это партнёрский код"
              detail="https://wiki.smartholdem.io"
            />

            <sth-item
              delay="190"
              title="Криптофункции с нулевым разглашением"
              text="Токенизация, идентификация и конфиденциальные транзакции"
              value="Набор инструментов"
              info="ZKP & SmartNote"
              detail="https://community.smartholdem.io/topic/805/gm-smartnote-%D0%B0%D0%BD%D0%BE%D0%BD%D0%B8%D0%BC%D0%BD%D0%B0%D1%8F-%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%B2%D0%B0%D0%BB%D1%8E%D1%82%D0%B0-%D0%BD%D0%B0-%D0%B1%D0%BB%D0%BE%D0%BA%D1%87%D0%B5%D0%B9%D0%BD%D0%B5-smartholdem?_=1716040109385"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-else class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-section-wrapper-4 mb-50">
            <h3 class="tp-section-title-4">
              <img src="~/assets/img/icon/section-title-bag.png" alt="" />
              Build on SmartHoldem
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="job__item-wrapper">
            <sth-item
                delay="130"
                title="Scalability"
                text="Blockchain platform for mass adoption"
                value="5 529 600 000"
                info="transactions per day"
                detail="https://community.smartholdem.io/topic/1008/smartholdem-testnet-set-new-record-evaluation-of-performance-and-scalability?_=1716039960958"
            />

            <sth-item
                delay="150"
                title="Fee constructor"
                text="Low fees on all gaming operations"
                value="from $0,000014 to $0,0036"
                info="per transaction"
                detail="https://wiki.smartholdem.io"
            />

            <sth-item
                delay="170"
                title="Transaction constructor"
                text="Different types of transactions"
                value="Custom transaction logic"
                info=""
                detail="https://wiki.smartholdem.io"
            />

            <sth-item
                delay="190"
                title="Gaming API and SDK"
                text="Powerful API with comprehensive documentation and examples"
                value="Node.js и UE5"
                info="(TypeScript)"
                detail="https://wiki.smartholdem.io"
            />

            <sth-item
                delay="130"
                title="TRNG SmartHoldem"
                text="True Random Number Generator"
                value="Raffles, contests, deck shuffling, lottery, roulette, bingo, etc."
                info=""
                detail="/rng"
            />

            <sth-item
                delay="150"
                title="Neural networks"
                text="Quick integration of neural networks into your services"
                value="Generation of voice, music, text, images"
                info=""
                detail="https://community.smartholdem.io/topic/993/ai-chatbot-mr-sth-robot-smartholdem-neural-network?_=1716039817303"
            />

            <sth-item
                delay="170"
                title="Affiliate programs"
                text="Affiliate program on the blockchain"
                value="The address in the blockchain game is an affiliate code"
                info=""
                detail="https://wiki.smartholdem.io"
            />

            <sth-item
                delay="190"
                title="Zero-Knowledge Crypto functions"
                text="Tokenization, identification, and confidential transactions"
                value="ZKP & SmartNote Toolkit"
                info=""
                detail="https://community.smartholdem.io/topic/806/gm-smartnote-privacy-cryptocurrency-on-the-smartholdem-blockchain?_=1716040109382"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import SthItem from "./CreateSthItem.vue";

export default {
  props:{
    style_2: {
      type: Boolean,
      default: false,
   },
  },
  components: { SthItem },
};
</script>
