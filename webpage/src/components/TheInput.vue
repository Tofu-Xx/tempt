<script setup>
const val = defineModel();
</script>

<template>
  <input
    type="text"
    ::="val"
    v-bind="$attrs"
    p="x4 y2"
    bg-hex-8883
    border="~ rounded gray200 dark:gray700"
    outline="none active:none">
</template>
