<script setup lang="ts">
import { BASE } from "../../../lib/base";
import type { GotoLink } from "../../../lib/goto";
import type { TitledLink } from "../../../lib/site";
import SocMedLinksbox from "../SocMedLinksbox.vue";

// NOTE: from top on left avatar from gravatar, to the right of the avatar h1 "Sett Sarverott A.A.B.", on top-right corner socmed links box with icon buttons, below in next row 4 buttons ('INDEX' for homepage, SITEMAP for listing content and rss latest records, QUERY for searching tool, ACK_SYNC for connecting AI agent's interface that allows to use contact interface then), under that in next row bulma's Breadcrumb that represents pathing of url with each slug segment linked to quick accessing
defineProps<{
	avatar: string;
	name: string;
	socmed: GotoLink[];
	crumbs: TitledLink[];
}>();

// only INDEX has a page behind it so far
const NOT_READY = ["SITEMAP", "QUERY", "ACK_SYNC"];
</script>

<template>
  <header class="section pb-0">
    <div class="level">
      <div class="level-left">
        <figure class="level-item image is-96x96">
          <img :src="avatar" :alt="name" />
        </figure>
        <h1 class="level-item title is-1">{{ name }}</h1>
      </div>
      <div class="level-right">
        <SocMedLinksbox :links="socmed" />
      </div>
    </div>
    <div class="buttons">
      <a class="button" :href="`${BASE}/`">INDEX</a>
      <button v-for="label in NOT_READY" :key="label" class="button" title="not ready yet" disabled>
        {{ label }}
      </button>
    </div>
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li
          v-for="(crumb, index) in crumbs"
          :key="crumb.url"
          :class="{ 'is-active': index === crumbs.length - 1 }"
        >
          <a :href="crumb.url">{{ crumb.title }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
