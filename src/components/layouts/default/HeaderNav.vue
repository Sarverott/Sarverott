<script setup>
import { ref } from 'vue'
// NOTE: from top on left avatar from gravatar, to the right of the avatar h1 "Sett Sarverott A.A.B.", on top-right corner socmed links box with icon buttons, below in next row 4 buttons ('INDEX' for homepage, SITEMAP for listing content and rss latest records, QUERY for searching tool, ACK_SYNC for connecting AI agent's interface that allows to use contact interface then), under that in next row bulma's Breadcrumb that represents pathing of url with each slug segment linked to quick accessing
const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>