// docs: https://docs.astro.build/en/recipes/rss/
import rss from "@astrojs/rss";
import config from "../../data/basic.config.json";

export function GET(context) {
	return rss({
		title: config.rss.title,
		description: config.rss.title,
		site: context.site,
		// TODO: fill from config.rss.inputFeeds once any feed is listed there
		items: [],
		customData: `<language>en-us</language>`,
	});
}
