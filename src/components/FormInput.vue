<template>
    <div class="w-full py-2 px-3 rounded-md border border-gray-300">
        <input 
            type=""
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            v-bind="$attrs" 
            class="w-full text-base border-none outline-none ring-0 bg-transparent text-white"
        />
    </div>
</template>

<script setup>
defineProps({
    modelValue: {
        type: String,
        default: "",
    },
})
</script>

<style scoped>
    
</style>