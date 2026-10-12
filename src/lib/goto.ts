import { getCollection } from "astro:content";

// groups in lookup order - when label repeats, first group wins /goto/{label}
export const GROUPS = ["socmed", "opsor", "procom", "refer"] as const;
export type Group = (typeof GROUPS)[number];

export interface GotoLink {
	group: Group;
	label: string;
	url: string;
	title: string;
	description?: string;
}

async function loadGotoLinks(): Promise<GotoLink[]> {
	const perGroup = await Promise.all(
		GROUPS.map(async (group) =>
			(await getCollection(group)).map(({ id, data }) => ({
				group,
				label: id,
				url: data.url,
				title: data.title ?? id,
				description: data.description,
			})),
		),
	);
	return perGroup.flat();
}

// every page asks for links - load them once per build
let gotoLinks: Promise<GotoLink[]> | undefined;

export function getGotoLinks(): Promise<GotoLink[]> {
	gotoLinks ??= loadGotoLinks();
	return gotoLinks;
}
