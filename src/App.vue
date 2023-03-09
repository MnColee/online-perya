<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <div v-cloak>
    <NavigationBar />
    <RouterView />
  </div>
</template>