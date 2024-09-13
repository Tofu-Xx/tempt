<script setup>
const title = $ref(document.title);
const editTitle = () => {
  document.title = title;
};
</script>
<template>
  <main font-sans p4 flex="~ col justify-center items-center gap2" text="center gray-700 dark:gray-200">
    <TheInput
      $="title"
      placeholder="typing in title"
      autocomplete="false"
      @input="editTitle" />
    <TheFooter />
  </main>
</template>
