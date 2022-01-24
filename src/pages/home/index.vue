<style lang="scss">
</style>

<template>
  <div>
    <home-banner v-show="!searchKey"></home-banner>
    <e-wrap>
      <home-list></home-list>
    </e-wrap>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      noticeMsg: (s) => s.noticeMsg,
      searchKey: (s) => s.searchKey,
    }),
  },
};
</script>