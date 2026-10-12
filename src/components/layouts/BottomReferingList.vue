<script setup lang="ts">
import type { TitledLink } from "../../lib/site";

// NOTE: this will list positions with UL and LI titled links display espessialy as footer content
defineProps<{ items: TitledLink[] }>();
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.url">
      <a :href="item.url">{{ item.title }}</a>
    </li>
  </ul>
</template>
