<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <div v-cloak>
    <NavigationBar v-if="!$route.meta.hideNavbar" />
    <RouterView />
  </div>
</template>