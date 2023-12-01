<template>
  <a
    v-for="(item, i) in social_links"
    :key="i"
    :href="item.link"
    :target="item.target"
  >
    <i :class="item.icon"></i>
  </a>
</template>

<script>
export default {
  data() {
    return {
      social_links: [
        {
          link: "https://github.com/smarttholdem",
          target: "_blank",
          icon: "fa-brands fa-github",
          name: "Twitter",
        },
          /*
        {
          link: "http://facebook.com",
          target: "_blank",
          icon: "fa-brands fa-facebook-f",
          name: "Facebook",
        },

           */
        {
          link: "https://twitter.com/smarttholdem",
          target: "_blank",
          icon: "fa-brands fa-twitter",
          name: "Twitter",
        },
          /*
        {
          link: "https://www.linkedin.com/",
          target: "_blank",
          icon: "fa-brands fa-linkedin-in",
          name: "Linkedin",
        },

           */
        {
          link: "https://www.youtube.com/smartholdem",
          target: "_blank",
          icon: "fa-brands fa-youtube",
          name: "Youtube",
        },
      ],
    };
  },
};
</script>
