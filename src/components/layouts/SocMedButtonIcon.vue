<script setup lang="ts">
import { BASE } from "../../lib/base";

// NOTE: try to use images published as icons of websites - grabing https://www.instagram.com/favicon.ico and using of CSS filters will give monochromatic low-resolution high contrast icons that we need now.
const props = defineProps<{ label: string; url: string; title?: string }>();
const icon = `${new URL(props.url).origin}/favicon.ico`;
</script>

<template>
  <a class="button is-small" :href="`${BASE}/goto/${label}/`" :title="title ?? label">
    <img :src="icon" :alt="label" width="16" height="16" />
  </a>
</template>

<style scoped>
img {
  filter: grayscale(1) contrast(4);
  image-rendering: pixelated;
}
</style>
