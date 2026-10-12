<script setup lang="ts">
// astro frontmatter `interface Props` + `Astro.props` becomes `defineProps`,
// `{expression}` in markup becomes `:attribute="expression"`
const props = defineProps<{ code: number }>();
const imageURL = `https://http.cat/${props.code}.jpg`;
</script>

<template>
  <div>
    <img :src="imageURL" :alt="`http cat ${code}`" />
  </div>
</template>
