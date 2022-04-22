<template>
  <left-panel />
  <router-view />
</template>

<script setup>
import LeftPanel from "./components/organisms/LeftPanel";
</script>

<style lang="scss">
@use "@/styles/functions/color" as *;

body {
  background-color: color(light);
  //color: color(dark);

  @media (prefers-color-scheme: dark) {
    background-color: color(dark);
    //color: color(light);
  }
}
</style>

<style lang="scss" scoped>
@use "@/styles/functions/color" as *;

#app {
  background: #90bdbc;
}
.logo {
  height: 56px;
  width: 56px;
}

.logo-link {
  background: darken(color(light), 35%);
  border-radius: 50%;
  padding: 8px;

  @media (prefers-color-scheme: dark) {
    background: darken(color(dark), 5%);
  }

  & + .logo-link {
    margin-left: 16px;
  }
}
</style>
