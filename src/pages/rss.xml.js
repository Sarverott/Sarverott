// docs: https://docs.astro.build/en/recipes/rss/
import rss from "@astrojs/rss";
import config from "../../data/basic.config.json";
import { getUpdates } from "../lib/updatesParser";

export async function GET(context) {
	return rss({
		title: config.rss.title,
		description: config.rss.title,
		site: context.site,
		items: await getUpdates(),
		customData: `<language>en-us</language>`,
	});
}
