<template>
    <button class="btn-secondary hover:text-white w-full py-1 font-semibold rounded-md">{{ formBtnText }}</button>
</template>

<script>
export default {
    props: {
        formBtnText: {
            type: String,
            default: () => 'Label',
        },
    },
}
</script>

<style scoped>
    .btn-secondary {
        background: linear-gradient(89.26deg, #E0E421 -0.21%, #EDEF7E 100.21%);
    }
    .btn-secondary:hover {
        background: linear-gradient(90.84deg, #9DA017 -1.58%, #E0E421 100.45%);
    }
</style>