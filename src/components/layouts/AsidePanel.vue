<script setup lang="ts">
import { BASE } from "../../lib/base";
import type { GotoLink } from "../../lib/goto";

defineProps<{ heading: string; links: GotoLink[] }>();
</script>

<template>
  <nav class="panel">
    <p class="panel-heading">{{ heading }}</p>
    <a
      v-for="link in links"
      :key="`${link.group}/${link.label}`"
      class="panel-block"
      :href="`${BASE}/goto/${link.group}/${link.label}/`"
      :title="link.description"
    >
      {{ link.title }}
    </a>
  </nav>
</template>
