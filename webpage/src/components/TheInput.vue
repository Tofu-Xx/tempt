<script setup lang="ts">
export let modelValue: string
</script>

<template>
  <input
    type="text"
    ::="modelValue"
    p="x4 y2"
    bg-hex-8883
    border="~ rounded gray200 dark:gray700"
    outline="none active:none">
</template>
