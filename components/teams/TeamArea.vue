<template>
  <section class="team__area pt-100 pb-40">
    <div class="container">
      <div v-if="el_style" class="row">
        <div class="col-xl-12">
            <div class="tp-section-wrapper-3 mb-50 text-center">
              <span class="tp-section-subtitle-3">Our Projects</span>
              <h3 class="tp-section-title-3">Projects Grid</h3>
            </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(item, i) in teamData.filter((t) => t.team_p)"
          :key="i"
          class="col-xl-3 col-lg-3 col-md-4 col-sm-6"
        >
          <single-team :item="item" :team_p="true" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import teamData from "~~/mixins/teamData";
import SingleTeam from "./single-team/SingleTeam.vue";

export default {
  props:{
    el_style:{
      type:Boolean,
      default:false
    }
  },
  components: { SingleTeam },
  mixins: [teamData],
};
</script>
