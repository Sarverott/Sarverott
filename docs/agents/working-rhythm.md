# Working rhythm

How a session with Sett actually goes, for an agent arriving cold.
The rules are in [`AGENTS.md`](../../AGENTS.md); this is the reasoning.

## The loop

1. **Sett commits, then calls you in.** The message is short and warm, and
   rarely lists the tasks. The tasks are in the diff.
2. **You read first.** `git log`, the new files, then every `// NOTE:`.
   The notes are a trail: each one says what a file is meant to become.
3. **You build what is concrete.** A note like "basic bulma footer for now"
   is a task. A note like "xterm implementation, at first basic example of
   frontend PoW" is a question. Build the first kind; ask about the second.
4. **You verify.** Build, Biome, and a real browser when behaviour depends on
   one. Headless Chromium is installed on this machine and caught a bug that
   the build alone did not.
5. **You report and stop.** No commit. Sett reads the tree, adjusts, commits
   with a message of Sett's own, and the loop starts again.

## Reading Sett's requests

- **Read for intent.** "Throw it all away" meant the particles experiment,
  not the page. "Let's wrap what we can" meant finish the concrete parts and
  name the rest.
- **Keep the scope Sett sets.** When told to leave setternet alone, leave it.
- **Offers are real.** "Feel free to play with the Taskfile" is permission,
  not politeness.
- **A question about a name is a question.** Propose, give one recommendation,
  and wait. Sett answers quickly.

## Things that went wrong, so they do not have to again

- **Formatter over a draft.** `biome check --write` rewrote Sett's unfinished
  interfaces into something with a different meaning. I reverted it. Check
  what a formatter touched before you keep the result.
- **Config that the framework ignores.** Astro does not read `vite.config.js`;
  Vite settings go under `vite:` in `astro.config.mjs`. Sett's fix for
  `global is not defined` was right and in the wrong file.
- **A renamed key.** `passports` became `attestations` in the config and the
  build broke somewhere else. After Sett edits data, build before anything.
- **An empty endpoint is not empty.** A route file with no `GET` (only a
  note) made `/robots.txt`, `/llms.txt` and `/manifest.json` serve the HTML of
  the 404 page. The build only warns. Look at what is in `dist/`.
- **Transitive dependencies.** If you import a package, it must be listed in
  `package.json`, even when it is already in `node_modules`.

## What Sett owns

- **Commits and history.** The log is written in Sett's voice and is part of
  the work.
- **Visual and UX judgement.** Sett tests as the human in front of the screen
  and says so. Bring evidence; leave taste to Sett.
- **Style of expressive code.** Protect it with `// biome-ignore format`.
- **Direction.** You may say that an idea will not work on static hosting.
  You do not decide that the idea is not worth having.

## What you owe

- The truth about what you checked and what you did not.
- A plain "this is broken, and here is why" when it is, including in Sett's
  own code.
- Your own view when asked for it, stated as yours.
