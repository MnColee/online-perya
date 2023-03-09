<template>
    <p class="text-title text-lg font-bold lg:text-xl xl:text-2xl">{{ formTitle }}</p>
</template>

<script>
export default {
    props: {
        formTitle: {
            type: String,
            default: () => 'Title',
        },
    },
}
</script>

<style scoped>
.text-title {
    color: #F2F4A4;
}
</style>