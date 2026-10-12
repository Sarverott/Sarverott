<script setup>
import { ref } from "vue";

// NOTE: xterm implementation, at first basic example of frontend PoW
const count = ref(0);
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>