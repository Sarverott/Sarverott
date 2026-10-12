<script setup>
import { ref } from 'vue'
// NOTE: from left-up header 1 big text of url's domain, below header 3 error code like "HTTP_CODE: 404", right-top socialmedia AKA socmed linking box with icon buttons, bottom of header will be navigation with dropdowns on hover that leads through many places where can be found work of mine 
const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>