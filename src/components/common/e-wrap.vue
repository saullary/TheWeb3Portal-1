<template>
  <div :class="wrapClass || 'wrap-1'">
    <div :class="conClass || 'con-1'">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    wrapClass: String,
    conClass: String,
  },
};
</script>