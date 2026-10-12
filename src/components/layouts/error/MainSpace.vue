<script setup lang="ts">
import HttpCat from "../HttpCat.vue";

// NOTE: here should be http cat, title of error, message's text and any else of things to be placed on center
defineProps<{ status: number; title: string }>();
</script>

<template>
  <main class="section has-text-centered">
    <HttpCat :code="status" />
    <h2 class="title">{{ title }}</h2>
    <div class="content">
      <slot />
    </div>
  </main>
</template>
