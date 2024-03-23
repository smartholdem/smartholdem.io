<template>
  <div class="header__info">
    <ul>
      <li v-show="$i18n.locale === 'ru'">
        <a target="_blank" href="https://t.me/smartholdem"><i class="fa-brands fa-telegram-plane"></i> Telegram</a>
      </li>
      <li v-show="$i18n.locale !== 'ru'">
        <a target="_blank" href="https://t.me/smartholdem_english"><i class="fa-brands fa-telegram-plane"></i> Telegram</a>
      </li>
      <li>
        <a target="_blank" href="https://twitter.com/smartholdem" class="tw"><i class="fa-brands fa-twitter"></i> Twitter</a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/smartholdem"><i class="fa-brands fa-github"></i> GitHub</a>
      </li>
      <li>
        <a target="_blank" href="https://community.smartholdem.io"><i class="fa fa-link"></i> Community</a>
      </li>
      <li>
        <a target="_blank" href="https://wallet.smartholdem.io"><i class="fa fa-link"></i> Wallet</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
