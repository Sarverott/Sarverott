<script setup lang="ts">
import type { GotoLink } from "../../lib/goto";
import SocMedButtonIcon from "./SocMedButtonIcon.vue";

// NOTE: container for all button icons, for each socmed entry icon, link by '/goto/LABEL' and tooltip on hover based on title if provided (because it is optional)
defineProps<{ links: GotoLink[] }>();
</script>

<template>
  <div class="buttons">
    <SocMedButtonIcon
      v-for="link in links"
      :key="link.label"
      :label="link.label"
      :url="link.url"
      :title="link.title"
    />
  </div>
</template>
