<link rel="stylesheet" href="styles/_colors.scss">
<template>
  <main>
    <left-panel />
    <router-view />
  </main>

</template>

<script setup>
import LeftPanel from "./components/organisms/LeftPanel";
</script>

<style lang="scss">
@use "@/styles/functions/color" as *;

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: setColor(biruzy, bg-color);
}

main{
  width: 1480px;
  height: 714px;
}

</style>
