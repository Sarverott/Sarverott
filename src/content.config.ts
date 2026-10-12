import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';
import { parse as parseYaml } from 'yaml';

// one entry of data/urls.$GROUP.yml - the yaml key ($LABEL) becomes entry id
const linkSchema = z.object({
  url: z.url({ protocol: /^https?$/ }),
  title: z.string().optional(),
  description: z.string().optional(),
});

const linksCollection = (path: string) =>
  defineCollection({
    // yaml file with only comments parses to null - treat it as empty group
    loader: file(path, { parser: (text) => parseYaml(text) ?? {} }),
    schema: linkSchema,
  });

export const collections = {
  socmed: linksCollection("data/urls.socmed.yml"),
  opsor: linksCollection("data/urls.opsor.yml"),
  procom: linksCollection("data/urls.procom.yml"),
  refer: linksCollection("data/urls.reference.yml"),
};
