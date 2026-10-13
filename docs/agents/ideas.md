# Ideas for what comes next

Concepts collected by Cleo on 2026-10-13, at the end of a session, so they are
not lost during the break. Nothing here is decided. Sett picks, changes or
drops any of it. Ordered inside each group from smallest to largest.

## Ready to build, no decision needed

- **Docs pages.** `docs/*.md` are meant to be displayed, without `devlog/`.
  A content collection and one route (`/docs/<name>/`) would do it. Empty
  files should be skipped the same way empty pages are skipped in the sitemap.
- **Lists from the CSV files in `docs/`.** `library-refs.csv` already has rows
  in the same `$TITLE | $DESCRIPTION | $URL` shape as `httpstatus.csv`, so the
  same parser can feed a references page.
- **Pick a sketch per status code.** `sketches.ts` holds four named sketches
  and the error page always runs `defaultSketch`. A column in
  `httpstatus.csv` could name the sketch for each code.
- **OPML titles.** `all-feeds.opml` labels each feed with its host name. The
  feeds carry real titles that could be used after they are fetched.
- **Home link in breadcrumb for `/goto/`.** Redirect pages are bare HTML with
  no way back if the redirect fails. A link home costs one line.

## Needs one answer from Sett first

- **Link groups.** Every link now lives in `urls.socmed.yml`, including
  GitHub, npm, PyPI and Docker. The error page menu and `llms.txt` are built
  per group, so moving code platforms into `urls.opsor.yml` would give both a
  real structure. Which link belongs where is Sett's call.
- **Easter egg per status code.** `SpecialBoardModal.vue` expects gists listed
  in the CSV. It needs a fourth column and a decision on what a gist may do
  inside the sandboxed frame.
- **Tooltips.** Browser `title` popups are slow and cannot be styled. Bulma
  has no tooltip of its own. Options: a few lines of CSS on `data-tooltip`,
  or keep the native ones.
- **Which pages belong in the sitemap.** setternet pages are listed because
  they are reachable. If they are a private workbench, they should carry
  `noindex` and leave the sitemap.
- **Readable 404 for `/goto/`.** A mistyped label lands on the general 404.
  It could list the labels that do exist.

## Needs something GitHub Pages cannot give

- **QUERY (Typesense).** Typesense needs a running server and an index that is
  rebuilt on deploy. A static alternative with no server is Pagefind, which
  builds its index at build time. Worth deciding before writing the client.
- **ACK_SYNC and `setternet/api.js`.** A contact interface for agents, OpenAPI
  and MCP all need a process that answers requests. A static site can publish
  an OpenAPI document that describes a service hosted elsewhere.
- **True status codes.** 400 and 403 pages answer with 200 here. Real codes
  need a host with an adapter (Cloudflare, Netlify, own server).
- **Fresh feed.** `rss.xml` is rebuilt only on push. A scheduled workflow in
  GitHub Actions could rebuild the site every few hours with no code change.

## Larger shapes

- **gitrecon as the source of updates.** `updates.ts` says it is temporary.
  The clean hand-over is a JSON file that gitrecon writes and this site reads,
  with the same `FeedItem` shape, so nothing else has to change.
- **One page map, many formats.** The note in `site.ts` asks for a routing map
  that can be dumped as JSON, OpenAPI, sitemap XML or Mermaid. Sitemap XML,
  `robots.txt` and `llms.txt` already read from `getSitePages()`. A Mermaid
  dump would give the README its graph back.
- **`mapped-reachings-nett.json`.** The file has seventeen empty lists and a
  timestamp. It looks like the skeleton of a personal knowledge graph. I do
  not know yet what should fill it, and would rather ask than guess.

## Housekeeping I noticed

- `facebook` in `urls.socmed.yml` points to the Instagram address.
- `/query/` and `/setternet/shell/` build as empty pages. They are now left
  out of the sitemap, `robots.txt` and `llms.txt` until they render something,
  but the dashboard still links to the shell.
- `/setternet/` shows the note as a code block, as written.
- `data/HOA.md` is empty and `data/draft.AGENT.md` is commented out; both are
  drafts that `AGENTS.md` and `docs/agents/` may now cover.
