<script setup lang="ts">
defineProps<{ avatar: string; name: string; email: string }>();
</script>

<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-square">
        <img :src="avatar" :alt="name" />
      </figure>
    </div>
    <div class="card-content">
      <p class="title is-5">{{ name }}</p>
      <p class="subtitle is-6">
        <a :href="`mailto:${email}`">{{ email }}</a>
      </p>
    </div>
  </div>
</template>
