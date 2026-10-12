<script setup lang="ts">
import { onMounted } from "vue";

// this is mentioned in error page and has json config created in data dir
const props = defineProps<{ config: object }>();

onMounted(async () => {
	// particles.js touches `window` on import and registers global particlesJS
	await import("particles.js");
	const { particlesJS } = window as unknown as {
		particlesJS: (id: string, config: object) => void;
	};
	particlesJS("particles-background", props.config);
});
</script>

<template>
  <div id="particles-background"></div>
</template>

<style scoped>
#particles-background {
  position: fixed;
  inset: 0;
  z-index: -1;
}
</style>
