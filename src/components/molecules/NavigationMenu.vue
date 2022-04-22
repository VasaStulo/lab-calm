<template>
  <div class="menu">
    <div :key="item.title" v-for="item in menuItems" class="menu-item">
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script setup>
const menuItems = [
  { title: "Статьи", iconName: "article" },
  { title: "Тесты", iconName: "" },
  { title: "Контакты помощи", iconName: "" },
  { title: "О проекте", iconName: "" },
];
</script>
