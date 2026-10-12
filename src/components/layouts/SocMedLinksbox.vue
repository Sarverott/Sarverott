<script setup>
import { ref } from 'vue'
// NOTE: container for all button icons, for each socmed entry icon, link by '/goto/LABEL' and tooltip on hover based on title if provided (because it is optional)
const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>