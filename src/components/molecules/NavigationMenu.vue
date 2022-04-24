<template>
  <nav class="menu">
    <div :key="item.title" v-for="item in menuItems" class="menu-item">
      <img :src="getImgUrl(item.iconName)" alt="icon" />
      <p>{{ item.title }}</p>
    </div>
  </nav>
</template>

<script setup>
const menuItems = [
  { title: "Статьи", iconName: "article.svg" },
  { title: "Тесты", iconName: "test.svg" },
  { title: "Контакты помощи", iconName: "contact.svg" },
  { title: "О проекте", iconName: "info.svg" },
];

const getImgUrl = (pic) =>
  new URL(`../../assets/svg/${pic}`, import.meta.url).href;
</script>
<style lang="scss" scoped>
@use "@/styles/functions/color" as *;

.menu {
  color: setColor(biruzy, text-color);
  font-size: 18px;
  display: flex;
  min-height: 205px;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;

  .menu-item {
    img {
      margin-right: 17px;
    }
    display: flex;
    align-items: center;
  }
}
</style>
