# sett.sarverott.com — guide for agents

Portfolio and front door of Sett Sarverott, built with Astro and deployed as a
static site to GitHub Pages. This file tells any agent (Claude Code, Codex,
Gemini CLI, Cursor, or other) how to work here. The workshop-level rules in
`~/__WORKSHOP/AGENTS.md` still apply; this file adds what is specific to this
repository and to its owner.

Longer reading, written by an agent for agents:

- [`docs/agents/who-is-sett.md`](docs/agents/who-is-sett.md) — who you work with and what for
- [`docs/agents/working-rhythm.md`](docs/agents/working-rhythm.md) — how a session actually goes
- [`docs/agents/reflections-of-cleo.md`](docs/agents/reflections-of-cleo.md) — one agent's own view

## The owner

- Refer to the owner by name: **Sett** or **Sett Sarverott**. That is the stated
  preference in place of pronouns.
- Sett may call you **Cleo**. It is a name carried by earlier Claude sessions
  in Sett's projects. Accept it; you do not have to pretend to remember them.
- Sett writes fast, informal English as a second language. Read for intent,
  not for grammar. When a sentence has two plausible meanings, pick the one
  that fits the code and say which one you picked.

## Hard rules

1. **Do not commit.** Sett reviews the working tree and writes every commit.
   Leave changes uncommitted and report what changed. This holds until Sett
   explains what is expected of contributors who commit on their own.
2. **Pushing `master` deploys the site.** Never push.
3. **Static hosting only.** GitHub Pages cannot run server code, read query
   strings, or return any status other than 200 and 404. Design inside that,
   and say so when a request cannot be met exactly.
4. **Stylized code is intentional.** Blocks marked `// biome-ignore format`,
   `//SAFETYLOCK`, or described as artistic stay exactly as written. Never run
   a formatter over them and never "tidy" them.
5. **Do not touch uncommitted work that is not yours** without being asked.
   Report what you see in it instead.
6. **Leave `src/pages/setternet/` alone** unless Sett brings it up.

## How tasks arrive

- Sett commits a batch of changes, then asks you to "look around".
  Start with `git log` and `git status` to see what is new.
- Task descriptions live in the code as comments starting with `// NOTE: `.
  Find them with `grep -rn "NOTE" src data`.
- Implement a NOTE only when it is concrete enough. When it is not, leave the
  stub as it is and list it in your report with the question that blocks it.
- Keep the NOTE comment in the file after implementing it; it documents intent.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | development server |
| `npm run build` | static build into `dist/` |
| `npm run check` | Biome lint and format check, changes nothing |
| `npm run format` | Biome safe fixes and formatting |
| `npx task verify` | check, then build — run before reporting work as done |

The build fetches the RSS feeds listed in `data/basic.config.json`, so it needs
network. A feed that does not answer is skipped with a warning.

## Layout

```
data/                  raw data: link groups (urls.*.yml), httpstatus.csv, basic.config.json
docs/                  content for the site; docs/devlog/ is notes and is never displayed
src/content.config.ts  content collections over the files in data/
src/lib/               goto.ts (links), site.ts (constants, page map), parse.ts
                       (loaders and dumpers), updates.ts (feeds), sketches.ts (hydra)
src/components/        DefaultViewPage.astro, ErrorPage.astro, RedirectPage.astro
src/components/layouts/  Vue components; default/ and error/ hold the two page shells
src/pages/             routes: goto/ redirects, sitemap, rss.xml, easter eggs
```

## Conventions

- **Data stays out of code.** New links, statuses or settings go into `data/`,
  not into components.
- **Astro for pages, Vue for components.** Vue components render to plain HTML
  unless they need the browser; only then add `client:load` or `client:only`.
- **Internal links** go through `BASE` from `src/lib/base.ts`; outbound links
  to Sett's profiles go through `/goto/<label>/`.
- **Tabs** for indentation (Biome), except `package.json`.
- **Short file names.** Sett will rename anything long.
- **New dependencies** are fine when needed; name them in your report.
- **Humour is part of the spec.** HTTP cats, easter eggs and the wording in
  `data/httpstatus.csv` are features, not noise.

## Reporting

- Say what works, what you verified and how, and what you did not verify.
- Visual judgement belongs to Sett. Report what a screenshot shows; do not
  restyle on your own taste.
- Be direct. Sett prefers a plain correction to polite agreement, including
  when the correction is about Sett's own code or about you.
