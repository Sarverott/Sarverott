// DISCLAIMER: all of this will be moved to gitrecon responsibilities, for now use below listed rss feeds
// DISCLAIMER: this rss will be working with preparsed json files to making it lighter while processing

/*
"input":[
            [
                "https://github.com/sarverott.atom", // imports feeders/githubAtom
                "",
                "Github_user"
            ],
            [
                "https://sarverott.tumblr.com/rss", // imports feeders/tumblrRss
                "application/rss+xml",
                "art gallery and archive"
            ],
            [
                "https://blog.sarverott.com/feeds/posts/default?alt=rss", // imports feeders/bloggerRss
                "application/rss+xml",
                "articles on blog"
            ],
            [
                "https://packagist.org/feeds/vendor.sarverott.rss", // imports feeders/packagistRss
                "application/rss+xml",
                "PHP_packages"
            ]
        ],
*/

/*

# sources input TODO:

- huggingface api
- ollama api
- npm api
- pypi api
- docker hub api
- x.com api
- instagram api
- facebook api
- gitlab... rss or api?
- bitbucket... rss or api?
- bsky.app api (?)
- soundcloud api (?)
- gitea... rss or api?
- opencollective... rss or api?
- youtube api
- mastodon... rss or api?
- mediawiki... rss or api?
- mozilla... firefox extensions status... i don't know
- google play... verified android apps... i don't know
- chrome store... verified extensions status... i don't know
*/

import config from "../../data/basic.config.json";
import { type FeedItem, loadFeed } from "./parse";

const UPDATES_LIMIT = 50;
const FETCH_TIMEOUT = 15_000;

// feed that does not answer is skipped with warning - it must not block build
async function fetchFeed(url: string): Promise<FeedItem[]> {
	try {
		const response = await fetch(url, {
			signal: AbortSignal.timeout(FETCH_TIMEOUT),
		});
		if (!response.ok) throw new Error(`http status ${response.status}`);
		return loadFeed(await response.text(), url);
	} catch (error) {
		console.warn(`[updates] skipping ${url}: ${error}`);
		return [];
	}
}

async function loadUpdates(): Promise<FeedItem[]> {
	const perFeed = await Promise.all(config.rss.inputs.map(fetchFeed));
	return perFeed
		.flat()
		.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime())
		.slice(0, UPDATES_LIMIT);
}

// rss.xml and sitemap page share one fetching per build
let updates: Promise<FeedItem[]> | undefined;

// newest first, state from the moment of build
export function getUpdates(): Promise<FeedItem[]> {
	updates ??= loadUpdates();
	return updates;
}
