<template>
  <e-wrap class="banner-1">
    <v-row>
      <v-col cols="12" md="6">
        <h1 class="mt-5">Web3 starts here</h1>
        <div class="mt-3 mb-5 lh-2 fz-15">
          All included sites are based on IPFS decentralized deployment and will
          never outage. We are trying to create a more convenient and faster
          decentralized search portal in the future of the internet.
        </div>
        <div class="mt-10 d-flex w100p" style="max-width: 280px">
          <e-search></e-search>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="ta-r">
        <!-- <div class="fl-r">A log of logos here</div> -->
        <img
          src="img/apps.png"
          class="w100p"
          style="
            max-width: 300px;
            transform-origin: 100% 0;
            transform: scale(1.26);
          "
          :style="asMobile ? '' : ''"
        />
      </v-col>
    </v-row>
  </e-wrap>
</template>

<script>
export default {
  computed: {
    asMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>

<style lang="scss">
.banner-1 {
  // min-height: 300px;
  background: url(/img/bg1.png) no-repeat;
  background-size: cover;
}
</style>