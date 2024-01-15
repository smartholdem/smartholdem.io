<template>
  <span>
    <span
      @click="handleToggle"
      class="header__lang-selected-lang tp-lang-toggle"
      id="tp-header-lang-toggle"
      >{{$t($i18n.locale)}}
    </span>
    <ul :class="`header__lang-list tp-lang-list ${open?'tp-lang-list-open':''}`">
      <li><nuxt-link :to="switchLocalePath('ru')">{{$t('ru')}}</nuxt-link></li>
      <li><nuxt-link :to="switchLocalePath('en')">{{$t('en')}}</nuxt-link></li>
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
