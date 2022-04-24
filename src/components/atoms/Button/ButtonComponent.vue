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
@use "@/styles/functions/color" as *;

.button {
  max-width: 100%;
  background: setColor(biruzy, basic-color);
  color: white;
  border-radius: 20px;
  padding: 22px 54px;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
}
</style>
