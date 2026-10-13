// NOTE:
import config from "../../data/basic.config.json";
import { BASE } from "../lib/base";
import { EMAIL, gravatarAvatar, NAME } from "../lib/site";

export function GET() {
	const manifest = {
		name: NAME,
		short_name: "Sarverott",
		description: config.metadata.description,
		start_url: `${BASE}/`,
		display: "browser",
		icons: [192, 512].map((size) => ({
			src: `${gravatarAvatar(EMAIL)}.png?s=${size}`,
			sizes: `${size}x${size}`,
			type: "image/png",
		})),
		// anything set in config wins over defaults from above
		...config.webmanifest,
	};
	return new Response(JSON.stringify(manifest), {
		headers: { "Content-Type": "application/manifest+json; charset=utf-8" },
	});
}
