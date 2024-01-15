<template>
  <span>
    <span
      @click="handleToggle"
      class="header__lang-selected-lang tp-lang-toggle"
      id="tp-header-lang-toggle"
      >English
    </span
    >
    <ul :class="`header__lang-list tp-lang-list ${open?'tp-lang-list-open':''}`">
      <li><nuxt-link :to="switchLocalePath('ru')">Russian</nuxt-link></li>
      <li><nuxt-link :to="switchLocalePath('en')">English</nuxt-link></li>
    </ul>
  </span>
</template>

<script>
export default {
  data(){
    return {
      open:false
    }
  },
  methods:{
    handleToggle() {
      this.open = !this.open
    }
  }
};
</script>
