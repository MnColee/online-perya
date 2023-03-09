<template>
    <button class="bg-primary hover:text-yellow-200">{{ buttonText }}</button>
</template>

<script>
export default {
    props: {
        buttonText: {
            type: String,
            default: () => 'Label',
        },
    },
}
</script>

<style scoped>
    .bg-primary {
        background-color: #34BAD8;
    }
</style>