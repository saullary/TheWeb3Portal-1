<template>
  <v-app>
    <e-header></e-header>

    <v-main style="min-height: 70vh">
      <router-view></router-view>
    </v-main>

    <e-alert></e-alert>

    <e-footer></e-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
