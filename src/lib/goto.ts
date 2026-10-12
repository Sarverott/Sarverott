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

export async function getGotoLinks(): Promise<GotoLink[]> {
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
