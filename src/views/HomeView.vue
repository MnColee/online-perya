<script setup>
import HeroPage from '../components/HeroPage.vue';
import TableGame from '../components/TableGame.vue';
import CardGame from '../components/CardGame.vue';
import HowToRecharge from '../components/HowToRecharge.vue';
import FooterPage from '../components/FooterPage.vue';
// import BaseModal from '../components/BaseModal.vue';
</script>

<template>

  <main class="h-auto w-full">
    <HeroPage />

    <div class="bg-slant mt-12 lg:pt-10">
      <TableGame />
      <CardGame />

      <div class="banner w-full flex items-center justify-center lg:mt-10 py-4">
        <p class="uppercase text-white font-bold lg:text-2xl xl:text-3xl">HOW TO RECHARGE</p>
      </div>

      <HowToRecharge />
      <FooterPage />

      <div class="w-full flex items-center justify-center lg:py-3">
        <p class="text-sm text-white">Copyright © BUDFOX 2021-2022. All Rights Reserve</p>
      </div>
    </div>

  </main>

  
</template>

<style scoped>
  .banner{
    background: linear-gradient(99.54deg, #525355 27.79%, #9A9A9C 72.77%);
  }

  .bg-slant {
    background:#212531;
    background: linear-gradient(131deg, #2C2D30 41%, #E0E421 42%, #9DA017 39%);
  }

  /* Landscape */
  @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 1) {

    .bg-slant {
      background:#212531;
      background: linear-gradient(129.5deg, #2C2D30 39%, #E0E421 40%, #9DA017 41.5%);
    }

  }

  @media screen 
    and (min-device-width: 1600px) 
    and (-webkit-min-device-pixel-ratio: 1) { 
    .bg-slant {
      background:#212531;
      background: linear-gradient(134deg, #2C2D30 42.5%, #E0E421 43%, #9DA017 44%);
    }
  }
</style>
