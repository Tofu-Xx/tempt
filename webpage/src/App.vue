<script setup>
const title = $ref(document.title);
const editTitle = () => {
  document.title = title;
};
</script>
<template>
  <main font-sans p4 flex="~ col justify-center items-end gap2" text="center gray-700 dark:gray-200">
    <TheInput
      v-model="title"
      placeholder="typing in title"
      autocomplete="false"
      @keydown.enter="editTitle" />
    <button @click="toggleDark()">
      <div i-ph-sun dark:i-ph-moon></div>
    </button>
  </main>
</template>
