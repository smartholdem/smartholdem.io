<script setup lang="ts">

</script>

<template>
<div>
  <p>
    <strong>JOIN US HERE</strong>
  </p>

  <div class="row">
    <div class="col-md-3 col-sm-6 col-auto text-center text-warning-emphasis">
      <a target="_blank" href="https://bitcointalk.org/index.php?topic=2169457.0">
        <img src="~/assets/img/sth/about-community/btt.png" alt="bitcoin talk smartholdem"/>
        <br/>BitcoinTalk
      </a>
    </div>

    <div class="col-md-3 col-sm-6 col-auto text-center text-warning-emphasis">
      <a target="_blank" href="https://community.smartholdem.io">
        <img src="~/assets/img/sth/about-community/sth.png" alt="sth community"/>
        <br/>Community forum
      </a>
    </div>

    <div class="col-auto  col-md-3 col-sm-6text-center text-warning-emphasis">
      <a v-show="$i18n.locale === 'ru'" target="_blank" href="https://t.me/smartholdem">
        <img src="~/assets/img/sth/about-community/tg.png" alt="telegram smartholdem"/>
        <br/>Telegram
      </a>
      <a v-show="$i18n.locale !== 'ru'" target="_blank" href="https://t.me/smartholdem_english">
        <img src="~/assets/img/sth/about-community/tg.png" alt="telegram smartholdem"/>
        <br/>Telegram
      </a>
    </div>

    <div class="col-auto col-md-3 col-sm-6 text-center text-warning-emphasis">
      <a target="_blank" href="https://twitter.com/smartholdem">
        <img src="~/assets/img/sth/about-community/tw.png" alt="twitter x smartholdem"/>
        <br/>X (Twitter)
      </a>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
