<script setup lang="ts">
const modelValue = defineModel()
</script>

<template>
  <input
    type="text"
    v-model="modelValue"
    v-bind="$attrs"
    p="x4 y2"
    w250px
    text-center
    bg-transparent
    border="~ rounded gray200 dark:gray700"
    outline="none active:none">
</template>
