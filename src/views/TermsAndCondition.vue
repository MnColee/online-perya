<template>
    <section class="bg-slant flex flex-col items-center justify-center mt-10 lg:mt-16 lg:py-10 lg:px-14">
        <article class="container mx-auto w-full text-white flex flex-col gap-y-6 lg:gap-y-8 xl:gap-y-10">
            <div class="flex flex-col gap-y-3 w-full">
                <h1 class="text-lg font-bold lg:text-xl xl:text-2xl">Terms and Conditions</h1>
                <span class="flex items-center gap-x-2">
                    <p class="text-base">Last Update</p>
                    <p class="text-base">DD / MM /YY</p>
                </span>
            </div>

            <div class="flex flex-col gap-y-3 w-full">
                <h1 class="text-lg font-bold lg:text-xl xl:text-2xl">Introduction</h1>
                <p class="text-base">Welcome to Online Perya! By accessing or using our website, you agree to be bound by these terms and conditions. If you do not agree to these terms and conditions, please do not use our website.</p>
            </div>

            <div class="flex flex-col gap-y-3 w-full">
                <h1 class="text-lg font-bold lg:text-xl xl:text-2xl">Eligibility</h1>
                <p class="text-base">To use our platform, you must be at least 18 years old and have legal capacity to enter into a binding agreement. If you do not meet these requirements, please do not use out platform.</p>
            </div>

            <div class="flex flex-col gap-y-3 w-full">
                <h1 class="text-lg font-bold lg:text-xl xl:text-2xl">Users Account</h1>
                <p class="text-base">To use our website, you must create a user account. You agree to provide accurate, complete, and up-to-date information when creating your user account. You are responsible for maintaining the confidentiality of your user account credentials and for any activity that occurs under your user account. If you suspect that your user account has been compromised, please contact us immediately.</p>
            </div>

            <div class="flex flex-col gap-y-3 w-full">
                <h1 class="text-lg font-bold lg:text-xl xl:text-2xl">Betting Rules</h1>
                <p class="text-base">Our website allows you to place bets on various games. You are solely responsible for reviewing and understanding the betting rules and requirements for each game before participating. We reserve the right to modify or update the betting rules at any time without notice.</p>
            </div>

            <div class="flex flex-col gap-y-3 w-full">
                <h1 class="text-lg font-bold lg:text-xl xl:text-2xl">Payment</h1>
                <p class="text-base">We accept various payment methods, which are available on our website. You agree to pay all fees and charges associated with your use of our website. We reserve the right to modify or update the payment methods and fees at any time without notice.</p>
            </div>

            <div class="flex flex-col gap-y-3 w-full">
                <h1 class="text-lg font-bold lg:text-xl xl:text-2xl">Indemnification</h1>
                <p class="text-base">You agree to indemnify and hold us harmless from any and all claims, damages, or expenses arising out of or in connection with your use of our website.</p>
            </div>

            <div class="flex flex-col gap-y-3 w-full">
                <h1 class="text-lg font-bold lg:text-xl xl:text-2xl">Modifications to these Terms and Conditions</h1>
                <p class="text-base">We reserve the right to modify or update these terms and conditions at any time without notice. By continuing to use our website, you agree to be bound by the modified or updated terms and conditions.</p>
            </div>

            <div class="flex flex-col gap-y-3 w-full">
                <p class="text-base">If you have any questions or concerns about these terms and conditions, please contact us at [insert contact email].</p>
            </div>
        </article>
    </section>

    <FooterPage />
</template>


<script setup>
import FooterPage from '../components/FooterPage.vue';
</script>

<style scoped>
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
