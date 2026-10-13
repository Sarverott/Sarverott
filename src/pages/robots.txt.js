// NOTE: does vue, vite or astro have some ready-to-use packages or plugins for robots.txt generation? propably yea, so as for allowed we can add all known sites from sitemap, and disallow "/index.php" for start. add also here adnotation about sitemap
// ANSWER: astro-robots-txt exists, but whole file is these few lines so no package is needed
import { BASE } from "../lib/base";
import { getEasterEggPages, getSitePages } from "../lib/site";

export function GET(context) {
	const lines = [
		"User-agent: *",
		...getSitePages().map(({ path }) => `Allow: ${BASE}${path}`),
		...getEasterEggPages().map(({ path }) => `Disallow: ${BASE}${path}`),
		"",
		`Sitemap: ${new URL("sitemap.xml", context.site).href}`,
	];
	return new Response(`${lines.join("\n")}\n`, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
