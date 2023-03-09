<template>
    <Transition name="modal-outer">
        <div v-show="modalSignIn">
            <Transition name="modal-inner">
                <section v-if="modalSignIn" class="fixed inset-0 bg-neutral-500 bg-opacity-70 z-50 px-2 lg:px-0">
                    <article class="container mx-auto relative w-full flex flex-col items-center justify-center h-full">
                        <div class="modal-card h-auto w-full rounded-2xl relative sm:w-1/3">
                            <span class="absolute top-0 right-0 w-full flex justify-end">
                                <svg @click="$emit('close-modal')" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cursor-pointer w-8 h-8 text-gray-300 lg:h-7 lg:w-7 xl:h-8 xl:w-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <form action="" class="w-full p-4 flex flex-col gap-y-5 lg:px-7 lg:py-4">
                                <div class="w-full pt-4">
                                    <span class="w-full flex items-center justify-between">
                                        <FormTitle formTitle="Sign In" />
                                        <router-link :to="{ name: ''}" class="text-secondary hover:text-yellow-200 text-base underline"> No Account yet? </router-link>
                                    </span>
                                </div>

                                <div class="w-full flex flex-col gap-y-5">
                                    <FormInput v-model="email" type="email" placeholder="Email" autofocus required/>
                                    <FormInput v-model="password" type="password" placeholder="Password" required/>
                                    <span class="flex items-center justify-between w-full">
                                        <p class="flex items-center gap-x-1 text-sm text-secondary"><input type="checkbox">Remember Password</p>
                                        <span @click="toggleForgotPassword" class="text-secondary cursor-pointer hover:underline text-sm"><p @click="$emit('close-modal')">Forgot Password</p></span>
                                    </span>
                                    <FormButton formBtnText="Login" />
                                </div>

                                <div class="w-full flex flex-col items-center justify-center gap-y-1">
                                    <p class="text-slate-300 text-sm">Login with</p>
                                    <div class="w-full flex items-center justify-center gap-x-3">
                                        <button><img src="/img/google.png" alt="google-logo" class="h-8 bg-white rounded-full"></button>
                                        <button><img src="/public/img/BUDFOXLOGO.png" alt="budfox-logo" class="h-10"></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </article>
                </section>
            </Transition>
        </div>
    </Transition>

    <ForgotPassword :modalForgotPassword="modalForgotPassword" @open-modal="toggleForgotPassword" @close-modal="toggleForgotPassword"></ForgotPassword>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import FormTitle from './FormTitle.vue'
import FormInput from './FormInput.vue'
import FormButton from './FormButton.vue';
import { ref } from "vue";

import ForgotPassword from './ForgotPassword.vue';

const modalForgotPassword = ref(null)
const toggleForgotPassword = () => {
    modalForgotPassword.value = !modalForgotPassword.value;
}


const email = ref("");
const password = ref("");

defineEmits (['close-modal', 'open-modal'])
defineProps ({
    modalSignIn: {
        type: Boolean,
        default: false,
    }
})

</script>

<style scoped>
.modal-card {
    background: linear-gradient(148.85deg, #525355, #9A9A9C 94.68%);
}

.modal-outer-enter-active, .modal-outer-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from, .modal-outer-leave-to {
    opacity: 0;
}

.text-secondary {
    color: #E0E421;
}
</style>