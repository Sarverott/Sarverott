// NOTE: put all parsers of objects to rss, atom, yaml, json, sitemap, standarized markdown or robots over here as interfaced loaders and dumpers.
import { XMLParser } from "fast-xml-parser";

export interface FeedItem {
	title: string;
	link: string;
	pubDate: Date;
	source: { title: string; url: string };
}

const xmlParser = new XMLParser({
	ignoreAttributes: false,
	isArray: (name) => ["item", "entry", "link"].includes(name),
});

// element with attributes is parsed to object, without them to plain value
const text = (node: unknown): string =>
	String((node as { "#text"?: unknown })?.["#text"] ?? node ?? "").trim();

const escapeXml = (value: string) =>
	value.replace(
		/[<>&"]/g,
		(char) =>
			({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" })[
				char
			] as string,
	);

// loader of rss 2.0 and atom documents, url is address the feed was taken from
export function loadFeed(xml: string, url: string): FeedItem[] {
	const { rss, feed } = xmlParser.parse(xml);
	const channel = rss?.channel ?? feed;
	if (!channel) throw new Error("neither rss nor atom");

	const source = { title: text(channel.title) || new URL(url).host, url };
	const items = (rss ? channel.item : channel.entry) ?? [];
	return (
		items
			// biome-ignore lint/suspicious/noExplicitAny: shape depends on remote feed
			.map((item: any) => {
				const links = item.link ?? [];
				const link = rss
					? text(links[0])
					: (links.find(
							(entry: Record<string, string>) => entry["@_rel"] === "alternate",
						) ?? links[0])?.["@_href"];
				return {
					title: text(item.title) || source.title,
					link,
					pubDate: new Date(
						text(item.pubDate ?? item.updated ?? item.published),
					),
					source,
				};
			})
			.filter(
				(item: FeedItem) => item.link && !Number.isNaN(item.pubDate.getTime()),
			)
	);
}

export function dumpSitemapXml(urls: string[]): string {
	const entries = urls.map((url) => `<url><loc>${escapeXml(url)}</loc></url>`);
	return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.join("")}</urlset>`;
}

export function dumpOpml(title: string, feedUrls: string[]): string {
	const outlines = feedUrls.map(
		(url) =>
			`<outline type="rss" text="${escapeXml(new URL(url).host)}" xmlUrl="${escapeXml(url)}"/>`,
	);
	return `<?xml version="1.0" encoding="UTF-8"?><opml version="2.0"><head><title>${escapeXml(title)}</title></head><body>${outlines.join("")}</body></opml>`;
}
