<template>
  <section :class="`job__area pb-140 ${style_2?'':'pt-35'}`">
    <div class="container">
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
                detail="https://wiki.smartholdem.io"
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
              value="Перетасовка розыгрыши, колоды в покере, лотерея, рулетка, бинго и т.д."
              info=""
              detail="https://wiki.smartholdem.io"
            />

            <sth-item
              delay="150"
              title="Нейронные сети"
              text="Быстрая интеграция нейронных сетей в ваши сервисы"
              value="Генерация голоса, музыки, текста, изображений"
              info=""
              detail="https://wiki.smartholdem.io"
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
              detail="https://wiki.smartholdem.io"
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
