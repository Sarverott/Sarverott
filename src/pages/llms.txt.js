// NOTE: this file content as i see by https://llmstxt.org/#example can be just copy of AGENTS.md... right? but that example from js code that no longer exists is missleading https://llmstxt.org/llmstxt-js.html - maybe we should just follow examples like these
/*
- https://github.com/llms.txt
- https://taskfile.dev/llms.txt
*/
// ANSWER: not a copy - AGENTS.md instructs agents that work inside repository,
// llms.txt is a map of website for models that read it: h1 with name, quoted
// summary, then h2 sections with lists of links. AGENTS.md is linked from it.
import config from "../../data/basic.config.json";
import { GROUPS, getGotoLinks } from "../lib/goto";
import { getSitePages, NAME } from "../lib/site";

const AGENT_DOCS = [
	["AGENTS.md", "how to work in repository of this website"],
	["docs/agents/who-is-sett.md", "who Sett is and what Sett builds"],
	["docs/agents/working-rhythm.md", "how session of work with Sett goes"],
	["docs/agents/reflections-of-cleo.md", "view of one agent, in first person"],
	["docs/agents/ideas.md", "concepts of what can be built here next"],
];

const section = (title, items) =>
	items.length ? [`## ${title}`, "", ...items, ""] : [];

export async function GET(context) {
	const { description, repository } = config.metadata;
	const links = await getGotoLinks();
	const raw = repository.replace("github.com", "raw.githubusercontent.com");

	const lines = [
		`# ${NAME}`,
		"",
		`> ${description}`,
		"",
		...section(
			"Website",
			getSitePages().map(
				({ path }) =>
					`- [${path}](${new URL(path.slice(1), context.site).href})`,
			),
		),
		...GROUPS.flatMap((group) =>
			section(
				`Links: ${group}`,
				links
					.filter((link) => link.group === group)
					.map(({ title, url, description }) =>
						[`- [${title}](${url})`, description].filter(Boolean).join(": "),
					),
			),
		),
		...section("Feeds", [
			`- [${config.rss.title}](${config.rss.output})`,
			...config.rss.inputs.map((url) => `- [${new URL(url).host}](${url})`),
		]),
		...section(
			"For agents",
			AGENT_DOCS.map(
				([file, about]) => `- [${file}](${raw}/master/${file}): ${about}`,
			),
		),
	];
	return new Response(lines.join("\n"), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
