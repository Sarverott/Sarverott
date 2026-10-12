import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";
import { parse as parseYaml } from "yaml";

// one entry of data/urls.$GROUP.yml - the yaml key ($LABEL) becomes entry id
const linkSchema = z.object({
	url: z.url({ protocol: /^https?$/ }),
	title: z.string().optional(),
	description: z.string().optional(),
});

const linksCollection = (path: string) =>
	defineCollection({
		// yaml file with only comments parses to null - treat it as empty group
		loader: file(path, { parser: (text) => parseYaml(text) ?? {} }),
		schema: linkSchema,
	});

// data/httpstatus.csv - rows of "$CODE | $TITLE | $MESSAGES", first row is header
const parseStatusCsv = (text: string) =>
	text
		.split("\n")
		.slice(1)
		.filter((row) => row.trim())
		.map((row) => {
			const [id, title, ...message] = row.split("|").map((cell) => cell.trim());
			return { id, title, message: message.join(" | ") };
		});

const httpStatusCollection = defineCollection({
	loader: file("data/httpstatus.csv", { parser: parseStatusCsv }),
	schema: z.object({
		title: z.string(),
		message: z.string(), // inline markdown
	}),
});

export const collections = {
	httpstatus: httpStatusCollection,
	socmed: linksCollection("data/urls.socmed.yml"),
	opsor: linksCollection("data/urls.opsor.yml"),
	procom: linksCollection("data/urls.procom.yml"),
	refer: linksCollection("data/urls.reference.yml"),
};
