<template>
    <section class="w-full flex items-center justify-center bg-gradient lg:px-10">
        <article class="container mx-auto w-full flex flex-col gap-y-8">
            <h1 class="text-head-title lg:font-bold xl:text-3xl">Table Games</h1>
            <div class="w-full grid lg:grid-cols-4 lg:gap-x-3 xl:gap-x-4">
                <TGCard />
            </div>
            <div class="w-full flex items-center justify-end">
                <router-link :to={}>
                    <span class="text-view-more flex items-center gap-x-2 text-base xl:text-lg">View More <i class="fa-solid fa-arrow-right"></i></span>
                </router-link>
            </div>
        </article>
    </section>
</template>

<script setup>
import TGCard from './TGCard.vue';
</script>

<style scoped>
    .text-head-title {
        color: #B3B3B4;
    }
    .text-view-more {
        color: #EDEF7E;
    }
    .text-view-more:hover{
        opacity: 90%;
    }
</style>