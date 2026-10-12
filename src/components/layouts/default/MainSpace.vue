<script setup lang="ts">
// NOTE: for index homepage it displays rootdir's README.md of repository, other things will be placed in docs dir, excluding devlog - all notes there should be ignored by docs display.
</script>

<template>
  <main class="section">
    <div class="content">
      <slot />
    </div>
  </main>
</template>
