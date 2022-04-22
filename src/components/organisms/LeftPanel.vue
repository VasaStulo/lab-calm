<template>
  <div class="left-panel">
    <div class="wrapper">
      <div class="first-panel">
        <div class="logo">
          <navigation-menu />
          <img src="@/assets/logo.svg" alt="Логотип" />
        </div>
      </div>
      <div class="second-panel"></div>
    </div>
  </div>
</template>

<script setup>
import NavigationMenu from "../molecules/NavigationMenu";
</script>

<style lang="scss" scoped>
.left-panel {
  .first-panel {
    margin: 30px;
    width: 280px;
    height: 400px;
    background: #fff;
    border-radius: 20px 20px 0 0;
  }
}
</style>
