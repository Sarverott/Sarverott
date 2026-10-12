<script setup lang="ts">
import type { GotoLink } from "../../../lib/goto";
import AsideCard from "../AsideCard.vue";
import AsidePanel from "../AsidePanel.vue";

// NOTE: bulma card on top, bulma panel on bottom
defineProps<{
	avatar: string;
	name: string;
	email: string;
	links: GotoLink[];
}>();
</script>

<template>
  <aside class="section">
    <AsideCard class="block" :avatar="avatar" :name="name" :email="email" />
    <AsidePanel heading="goto" :links="links" />
  </aside>
</template>
