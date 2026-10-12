<script setup lang="ts">
import type { TitledLink } from "../../../lib/site";
import BottomReferingList from "../BottomReferingList.vue";

// NOTE: basic bulma footer for now
defineProps<{ items: TitledLink[] }>();
</script>

<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <BottomReferingList :items="items" />
    </div>
  </footer>
</template>

<style scoped>
.content :deep(ul) {
  list-style: none;
  margin: 0;
}
</style>
