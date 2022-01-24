<template>
  <div class="bg-s1 d-flex al-c">
    <input
      type="text"
      class="flex-1"
      v-model="value"
      placeholder="Search"
      ref="input"
    />
    <v-icon color="#fff" size="20">mdi-magnify</v-icon>
  </div>
</template>


<script>
export default {
  computed: {
    searchKey() {
      return this.$store.state.searchKey;
    },
    path() {
      const { path } = this.$route || {};
      return path;
    },
  },
  data() {
    return {
      value: "",
    };
  },
  watch: {
    value(searchKey) {
      this.$setState({
        searchKey,
      });
    },
    searchKey(val) {
      if (val != this.value) {
        this.value = val;
        this.$refs.input.focus();
      }
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.bg-s1 {
  padding: 0 4px;
  background: #8ca1b6;
  input {
    outline: none;
    padding: 7px 6px;
    color: #fff;
    min-width: 220px;
  }
}
::-webkit-input-placeholder {
  color: #eee;
}
</style>