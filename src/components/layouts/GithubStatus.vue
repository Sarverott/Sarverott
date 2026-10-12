<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps<{ user: string }>();

const stats = ref<Record<string, number>>();
const failed = ref(false);

onMounted(async () => {
	try {
		const response = await fetch(`https://api.github.com/users/${props.user}`);
		if (!response.ok) throw new Error(`github api: ${response.status}`);
		const { followers, following, public_repos, public_gists } =
			await response.json();
		stats.value = { followers, following, public_repos, public_gists };
	} catch {
		failed.value = true;
	}
});
</script>

<template>
  <p v-if="failed">github api did not answer</p>
  <p v-else-if="!stats">loading...</p>
  <div v-else class="level">
    <div v-for="(value, key) in stats" :key="key" class="level-item has-text-centered">
      <div>
        <p class="heading">{{ key }}</p>
        <p class="title">{{ value }}</p>
      </div>
    </div>
  </div>
</template>
