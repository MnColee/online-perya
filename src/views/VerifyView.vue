<template>
    <section class="bg-slant px-2 h-screen lg:px-0">
        <article class="container mx-auto relative w-full flex flex-col items-center justify-center h-full">
            <div class="modal-card h-auto w-full rounded-2xl relative sm:w-1/3">
                <router-link :to="{ name: 'home'}" class="absolute top-0 right-0 w-full flex justify-end">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cursor-pointer w-8 h-8 text-gray-300 lg:h-7 lg:w-7 xl:h-8 xl:w-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </router-link>
                <form action="" class="w-full p-4 flex flex-col gap-y-5 lg:px-7 lg:py-4">
                    <div class="w-full pt-4">
                        <span class="w-full flex items-center justify-start">
                            <FormTitle formTitle="Verify your email" />
                        </span>
                    </div>

                    <div class="w-full">
                        <p class="text-base text-white">Thanks for requesting a password reset. We've sent a verification email to your email address. Please click the verification link in the email to continue.</p>
                    </div>

                    <div class="w-full">
                        <FormButton formBtnText="Ok" />
                    </div>
                </form>
            </div>
        </article>
    </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import FormTitle from '../components/FormTitle.vue';
import FormButton from '../components/FormButton.vue';
</script>

<style scoped>
.modal-card {
    background: linear-gradient(148.85deg, #525355, #9A9A9C 94.68%);
}

.bg-slant {
    background:#212531;
    background: linear-gradient(154deg, #2C2D30 50%, #E0E421 40%, #9DA017 52%);
}

/* Landscape */
@media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 1) {

    .bg-slant {
            background:#212531;
            background: linear-gradient(150.5deg, #2C2D30 46%, #E0E421 48%, #9DA017 41.5%);
        }

    }

@media screen 
    and (min-device-width: 1600px) 
    and (-webkit-min-device-pixel-ratio: 1) { 
    .bg-slant {
        background:#212531;
        background: linear-gradient(159.5deg, #2C2D30 48%, #E0E421 51%, #9DA017 44%);
    }
}
</style>
