import { createHash } from "node:crypto";
import config from "../../data/basic.config.json";

const gravatarHash = (email: string) =>
	createHash("sha256").update(email).digest("hex");

export const gravatarIcon = (email: string) =>
	`https://gravatar.com/avatar/${gravatarHash(email)}.ico?s=128`;

export const gravatarAvatar = (email: string) =>
	`https://gravatar.com/avatar/${gravatarHash(email)}`;

export const NAME = "Sett Sarverott A.A.B.";
export const EMAIL = config.emails[0];

export const UPDATES_FEED = {
	title: config.rss.title,
	url: config.rss.output,
	mimetype: config.rss.mimetype,
};

export const WEBMANIFEST_URL = "/manifest.json";

export const SITEMAP_LINK = {
	title: "map of Sarverott's domain",
	url: "/sitemap.xml",
};

export interface TitledLink {
	title: string;
	url: string;
}

export const FOOTER_REFS: TitledLink[] = [
	{ title: EMAIL, url: `mailto:${EMAIL}` },
	...config.attestations.map((url) => ({
		title: url.replace(/^https?:\/\//, ""),
		url,
	})),
	{ title: UPDATES_FEED.title, url: UPDATES_FEED.url },
];

// NOTE: add here functions to generate these mapping of routings, outputs object that can be later parsed to json string, openapi standard, xml sitemap format, mermaid or else - each formater wil .
export interface SitePage {
	path: string;
}

const PAGE_SOURCES = import.meta.glob<string>("../pages/**/*.{astro,md}", {
	query: "?raw",
	import: "default",
	eager: true,
});

const toPath = (file: string) => {
	const path = file
		.replace("../pages", "")
		.replace(/(index)?\.(astro|md)$/, "");
	return path.endsWith("/") ? path : `${path}/`;
};

// static routes only, and stubs that render nothing yet are not pages
const STATIC_PAGES = Object.entries(PAGE_SOURCES)
	.filter(
		([file, source]) =>
			!file.includes("[") && source.replace(/^---[\s\S]*?---/, "").trim(),
	)
	.map(([file, source]) => ({ path: toPath(file), source }))
	.sort((a, b) => a.path.localeCompare(b.path));

// every page that is not an error one (easter eggs with 200 included) -
// error pages are recognized by using ErrorPage
export function getSitePages(): SitePage[] {
	return STATIC_PAGES.filter(({ source }) => !source.includes("ErrorPage")).map(
		({ path }) => ({ path }),
	);
}

// error pages answering with status 200 like /index.php/
export function getEasterEggPages(): SitePage[] {
	return STATIC_PAGES.filter(({ source }) =>
		source.includes("<ErrorPage status={200}"),
	).map(({ path }) => ({ path }));
}
