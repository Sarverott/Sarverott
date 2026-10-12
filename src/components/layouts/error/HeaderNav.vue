<script setup lang="ts">
import { BASE } from "../../../lib/base";
import type { GotoLink } from "../../../lib/goto";
import SocMedLinksbox from "../SocMedLinksbox.vue";

// NOTE: from left-up header 1 big text of url's domain, below header 3 error code like "HTTP_CODE: 404", right-top socialmedia AKA socmed linking box with icon buttons, bottom of header will be navigation with dropdowns on hover that leads through many places where can be found work of mine
defineProps<{
	domain: string;
	status: number;
	socmed: GotoLink[];
	groups: { group: string; links: GotoLink[] }[];
}>();
</script>

<template>
  <header class="theme-dark">
    <section class="hero is-small">
      <div class="hero-body">
        <div class="level">
          <div class="level-left">
            <div>
              <h1 class="title is-1">{{ domain }}</h1>
              <h3 class="subtitle is-3">HTTP_CODE: {{ status }}</h3>
            </div>
          </div>
          <div class="level-right">
            <SocMedLinksbox :links="socmed" />
          </div>
        </div>
      </div>
    </section>
    <nav class="navbar" aria-label="main navigation">
      <div class="navbar-menu is-active">
        <div class="navbar-start">
          <a class="navbar-item" :href="`${BASE}/`">INDEX</a>
          <div
            v-for="{ group, links } in groups"
            :key="group"
            class="navbar-item has-dropdown is-hoverable"
          >
            <a class="navbar-link">{{ group }}</a>
            <div class="navbar-dropdown">
              <a
                v-for="link in links"
                :key="link.label"
                class="navbar-item"
                :href="`${BASE}/goto/${group}/${link.label}/`"
                :title="link.description"
              >
                {{ link.title }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* shading over background animation - dark, but animation stays visible */
header {
  background-color: rgb(0 0 0 / 70%);
}

.navbar {
  background-color: transparent;
}
</style>
