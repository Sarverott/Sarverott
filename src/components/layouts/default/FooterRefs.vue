<script setup>
import { ref } from 'vue'
// NOTE: basic bulma footer for now
const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>