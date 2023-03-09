<template>
    <header class="w-full bg-neutral lg:px-10 lg:py-1">
        <nav class="container mx-auto w-full flex items-center justify-between text-base">
            <RouterLink :to="{ name: 'home' }"><img src="/img/Online Perya Logo.png" alt="logo" class="h-14"></RouterLink>
            <ul class="flex items-center gap-x-6">
                <li><button @click="toggleSignIn" class="bg-sign hover:bg-yellow-100 bg-opacity-5 rounded-md text-black px-4 py-0.5">Sign in</button></li>
                <li><ButtonPrimary @click="toggleSignUp" buttonText="Sign up" class="rounded-md text-white px-4 py-0.5" /></li>
            </ul>
        </nav>
        <SignInForm :modalSignIn="modalSignIn" @close-modal="toggleSignIn"></SignInForm>
        <SignUpForm :modalSignUp="modalSignUp" @close-modal="toggleSignUp"></SignUpForm>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from "vue"
import ButtonPrimary from './ButtonPrimary.vue';
import SignUpForm from './SignUpForm.vue';
import SignInForm from './SignInForm.vue';

const modalSignUp = ref(null);
const modalSignIn = ref(null);

const toggleSignUp = () => {
    modalSignUp.value = !modalSignUp.value;
}

const toggleSignIn = () => {
    modalSignIn.value = !modalSignIn.value;
}
</script>

<style scoped>
    .bg-neutral {
        background-color: #37383A;
    }

    .bg-sign {
        background-color: #E0E421;
    }
</style>