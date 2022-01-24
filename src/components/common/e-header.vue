<template>
  <v-app-bar app elevation="1" color="#fff">
    <e-wrap wrap-class="wrap-0" con-class="d-flex al-c">
      <a href="/" class="mr-4"
        ><img contain src="img/logo.png" height="40" class="d-b"
      /></a>
      <div v-show="!!searchKey">
        <e-search></e-search>
      </div>
      <!-- <v-spacer></v-spacer> -->
      <!-- <div class="ml-auto">
        <v-btn text small> Connect Wallet </v-btn>
      </div> -->
    </e-wrap>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    searchKey() {
      return this.$store.state.searchKey;
    },
  },
};
</script>