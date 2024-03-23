<template>
  <div class="fix">
    <Header />
    <main>
      <slot></slot>
    </main>
    <footer-two/>
    <BackToTop/>
  </div>
</template>

<script>
import Header from "./headers/HeaderNine.vue";
import FooterTwo from "./footers/FooterTwo.vue";
import BackToTop from "./footers/component/BackToTop.vue";

export default {
  components: {
    Header,
    FooterTwo,
    BackToTop,
  },
};
</script>
