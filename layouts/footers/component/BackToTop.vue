<template>
  <div class="back-to-top-wrapper scroll-top">
    <button id="back_to_top" type="button" class="back-to-top-btn">
      <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  mounted() {
    const result = document.querySelector('.scroll-top');
    if (result) {
      document.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          result.style.display = "block";
        } else {
          result.style.display = "none";
        }
      });
      result.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  },
};
</script>
