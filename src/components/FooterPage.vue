<template>
    <div class="bg-footer w-full">
        <section class="container mx-auto relative w-full h-96 flex items-center justify-center lg:px-10 lg:py-3">
            <div class="trapezoid absolute z-10 inset-0 w-full h-full"></div>
            <div class="trapezoid-inner absolute z-10 h-full w-full"></div>

            <article class="container mx-auto absolute inset-0 z-20 w-full text-white flex items-start lg:gap-x-4 lg:pt-16 lg:mt-1.5">
                <div class="w-full flex items-start justify-center">
                    <div class="flex flex-col gap-y-2 lg:pl-20 lg:w-10/12 xl:pl-24">
                        <h3 class="text-white font-bold lg:text-lg xl:text-xl">About Online Perya</h3>
                        <p class="text-white text-base text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>

                <div class="flex flex-col gap-y-2 lg:w-1/3">
                    <h3 class="text-white font-bold mb-2 lg:text-lg xl:text-xl">Games</h3>
                    <router-link :to="{name: ''}" class="text-quicklinks">Game Categories</router-link>
                    <router-link :to="{name: ''}" class="text-quicklinks">Game Categories</router-link>
                    <router-link :to="{name: ''}" class="text-quicklinks">Game Categories</router-link>
                    <router-link :to="{name: ''}" class="text-quicklinks">Game Categories</router-link>
                </div>

                <div class="flex flex-col lg:gap-y-6 lg:w-1/2">
                    <div class="flex flex-col gap-y-2">
                        <h3 class="text-white font-bold lg:text-lg xl:text-xl">Quick links</h3>
                        <router-link :to="{name: ''}" class="text-quicklinks">FAQ</router-link>
                        <router-link :to="{name: ''}" class="text-quicklinks">Withdrawal Terms</router-link>
                        <router-link :to="{name: ''}" class="text-quicklinks">Terms and Conditions</router-link>
                        <router-link :to="{name: ''}" class="text-quicklinks">Privacy Policy</router-link>
                    </div>

                    <div class="flex flex-col gap-y-2">
                        <h3 class="text-white font-bold lg:text-lg xl:text-xl">Contact Information</h3>
                        <router-link :to="{name: ''}" class="text-quicklinks">Email</router-link>
                        <router-link :to="{name: ''}" class="text-quicklinks">Contact No.</router-link>
                    </div>
                </div>
            </article>
        </section>
    </div>
</template>


<style scoped>
.bg-footer {
    background-color: #37383A;
}
.text-quicklinks{
    font-size: 1rem;
    color: white;
}
.text-quicklinks:hover{
    color: #E0E421;
}
.trapezoid {
    background-color: #525355;
    -webkit-clip-path: polygon(6% 18%, 95% 7%, 100% 100%, 0% 100%);
    clip-path: polygon(6% 18%, 95% 7%, 100% 100%, 0% 100%);
}
.trapezoid-inner {
    background-color: #434447;
    -webkit-clip-path: polygon(9% 36%, 98% 9%, 100% 100%, 0% 100%);
    clip-path: polygon(9% 36%, 98% 9%, 100% 100%, 0% 100%);
}
</style>