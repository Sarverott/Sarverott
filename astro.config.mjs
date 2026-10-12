// @ts-check

import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://sett.sarverott.com",
	integrations: [vue()],
	vite: {
		// hydra-synth expects node's `global` to exist in browser
		define: { global: "globalThis" },
	},
});
