<template>
    <section class="w-full bg-gradient lg:px-10 lg:py-8">
        <article class="container mx-auto w-full flex items-center justify-between">
            <div class="lg:w-1/2">
                <div class="w-full">
                    <img src="/img/FerrisWheelAnimated.gif" alt="ferriswheel" class="w-full h-full">
                </div>
            </div>
            <div class="flex flex-col items-center justify-center gap-y-8 lg:w-1/2">
                <h1 class="words-height text-white text-center lg:font-bold lg:text-4xl xl:text-5xl">de Finibus Bonorum Nostrud exercitation Excepteur sint</h1>
                <ButtonPrimary buttonText="Play Now" class="capitalize shadow-md text-base font-bold px-7 py-2.5 text-white rounded-xl lg:text-2xl xl:text-3xl" />
            </div>
        </article>
    </section>
</template>

<script setup>
import ButtonPrimary from '../components/ButtonPrimary.vue';
</script>

<style scoped>
    .bg-gradient {
        background: #37383A;
        background-image: linear-gradient(252.22deg, #9DA017 30.04%, #E0E421 102.72%);
        background-attachment: fixed;
    }

    .words-height {
        line-height: 150%;
    }
</style>