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
                detail="https://community.smartholdem.io"
            />

            <sth-item
                delay="150"
                title="Javascript Developer"
                text="Блокчейн платформа для массового внедрения"
                value="5 529 600 000"
                info="операций в день"
                detail="https://community.smartholdem.io"
            />

            <sth-item
                delay="170"
                title="Sales lead, Human Spaceflight"
                text="Блокчейн платформа для массового внедрения"
                value="5 529 600 000"
                info="операций в день"
                detail="https://community.smartholdem.io"
            />

            <sth-item
                delay="190"
                title="WordPress Developer"
                text="Блокчейн платформа для массового внедрения"
                value="5 529 600 000"
                info="операций в день"
                detail="https://community.smartholdem.io"
            />

            <sth-item
              delay="130"
              title="UX & UI Designer"
              text="Блокчейн платформа для массового внедрения"
              value="5 529 600 000"
              info="операций в день"
              detail="https://community.smartholdem.io"
            />

            <sth-item
              delay="150"
              title="Javascript Developer"
              text="Блокчейн платформа для массового внедрения"
              value="5 529 600 000"
              info="операций в день"
              detail="https://community.smartholdem.io"
            />

            <sth-item
              delay="170"
              title="Sales lead, Human Spaceflight"
              text="Блокчейн платформа для массового внедрения"
              value="5 529 600 000"
              info="операций в день"
              detail="https://community.smartholdem.io"
            />

            <sth-item
              delay="190"
              title="WordPress Developer"
              text="Блокчейн платформа для массового внедрения"
              value="5 529 600 000"
              info="операций в день"
              detail="https://community.smartholdem.io"
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
