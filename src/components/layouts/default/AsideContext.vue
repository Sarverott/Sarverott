<script setup>
import { ref } from 'vue'
// NOTE: bulma card on top, bulma panel on bottom
const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>