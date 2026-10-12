<script setup>
import { ref } from 'vue'
// this is mentioned in error page and has json config created in data dir
const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>