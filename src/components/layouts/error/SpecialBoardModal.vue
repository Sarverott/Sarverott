<script setup>
import { ref } from 'vue'
// NOTE: it will contain special easter egg assigned to code and loaded from gists listed in csv file - iframe sandboxing
const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>