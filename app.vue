<template>
    <NuxtPage></NuxtPage>
</template>

<script>
export default {
mounted() {
  this.$root.isMobile = window.innerWidth < 720 || window.width < 700
}


};
</script>

<style>


@font-face {
  font-family: BankGothic;
  src: url("/bankgothicmdbt_medium.otf") format("opentype");
}


-moz-scrollbar, ::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}


::-webkit-scrollbar {
  background-color: #fefdf9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(-45deg, #4ef78b 1%, #45c199 48%, #8dfbd8);
  border: 1px solid #434a52;
}
</style>
