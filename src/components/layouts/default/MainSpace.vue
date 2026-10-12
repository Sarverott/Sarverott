<script setup>
import { ref } from 'vue'
// NOTE: for index homepage it displays rootdir's README.md of repository, other things will be placed in docs dir, excluding devlog - all notes there should be ignored by docs display. 
const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>