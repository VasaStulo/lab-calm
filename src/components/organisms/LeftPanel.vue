<template>
  <div class="left-panel">
    <div class="wrapper">
      <div class="first-panel">
        <div class="logo">
          <img src="@/assets/logo.svg" alt="Логотип" />
        </div>
        <navigation-menu />
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
  width: 280px;
  .first-panel {
    background: #fff;
    border-radius: 20px 20px 0 0;
    padding: 52px 42px 55px 28px;
    width: 100%;
    .logo {
      width: 100px;
      margin-bottom: 62px;
    }
  }
}
</style>
