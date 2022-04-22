<template>
  <button class="button">{{ text }}</button>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.button {
  max-width: 100%;
  height: 100%;
  background: indianred;
  color: white;
  border-radius: 12px;
  border: 22px;
}
</style>
