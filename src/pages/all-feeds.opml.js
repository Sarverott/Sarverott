import config from "../../data/basic.config.json";
import { dumpOpml } from "../lib/parse";

export function GET() {
	return new Response(dumpOpml(config.rss.title, config.rss.inputs), {
		headers: { "Content-Type": "text/x-opml; charset=utf-8" },
	});
}
