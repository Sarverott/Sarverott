// NOTE: prepare here listing of all pages that we can reach now excluding these cases of erroring ones (including error status code 200 special easter eggs)
import { dumpSitemapXml } from "../lib/parse";
import { getSitePages } from "../lib/site";

export function GET(context) {
	const urls = getSitePages().map(
		({ path }) => new URL(path.slice(1), context.site).href,
	);
	return new Response(dumpSitemapXml(urls), {
		headers: { "Content-Type": "application/xml; charset=utf-8" },
	});
}
