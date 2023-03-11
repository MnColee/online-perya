<template>
    <div class="card card-border group relative rounded-3xl overflow-hidden">
        <div class="h-full w-full">
            <div class="shadow-img absolute inset-0"></div>
            <img src="/img/Rectangle 10.png" alt="game_img" class="w-full -z-10">
        </div>
        <div class="group-hover:bg-opacity-50 group-hover:opacity-100 opacity-0 bg-gray-500 cursor-pointer absolute inset-0 z-40 flex flex-col items-center justify-center lg:gap-y-4 xl:gap-y-5">
            <div class="relative">
                <div class="bg-primary lg:h-10 lg:w-10 xl:h-16 xl:w-16"></div>
                <i class="fa-solid fa-circle-play text-secondary absolute lg:-top-2.5 lg:-left-2.5 lg:text-6xl xl:-top-4 xl:-left-4 xl:text-8xl"></i>
            </div>
            <p class="text-white uppercase font-bold lg:text-xl xl:text-3xl">Play</p>
        </div>
    </div>
</template>

<style scoped>
    .card {
        border: 2px solid #F2F4A4;
    }

    .card:hover {
        border: 2px solid transparent;
    }
    .card .shadow-img {
        box-shadow: inset 0px 0px 18px #F2F4A4;
    }
    .card:hover .shadow-img{
        box-shadow: none;
    }
    .text-secondary {
        color: #E0E421;
    }

    .bg-primary {
        background-color: #34BAD8;
    }
</style>
