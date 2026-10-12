<script setup>
import { ref } from 'vue'
// NOTE: try to use images published as icons of websites - grabing https://www.instagram.com/favicon.ico and using of CSS filters will give monochromatic low-resolution high contrast icons that we need now.
const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>