<script setup>
import { ref } from 'vue'
// NOTE: here should be http cat, title of error, message's text and any else of things to be placed on center
const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>