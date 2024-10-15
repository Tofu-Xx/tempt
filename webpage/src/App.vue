<script setup lang="ts">
const title = useTitle()
</script>

<template>
  <main
    font-sans p4
    flex="~ col justify-center items-center gap2"
    text="center gray-700 dark:gray-200">
    <TheInput
      ::="title"
      placeholder="typing in title"
      autocomplete="false" />
    <TheNav />
  </main>
</template>
