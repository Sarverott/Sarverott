<script setup>
import { ref } from 'vue'
// NOTE: this will list positions with UL and LI titled links display espessialy as footer content
const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>