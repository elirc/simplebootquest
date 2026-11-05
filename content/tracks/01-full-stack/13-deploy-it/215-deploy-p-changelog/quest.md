---
slug: "deploy-p-changelog"
title: "Practice: Generating a Changelog"
type: "code"
language: "js"
xp: 15
resources: [{"title": "Keep a Changelog", "url": "https://keepachangelog.com/"}]
---
# Practice: Generating a Changelog

Users and teammates want to know **what changed** in a release. If your commits follow Conventional Commits, the changelog writes itself.

## Your task
`parseCommit(message)` is provided (returns `{ type, scope, breaking, subject }` or `null`). Write `changelog(version, date, messages)` returning Markdown:

```md
## 1.5.0 (2026-03-01)

### ⚠ Breaking changes
- **api:** remove v1 endpoints

### Features
- **todos:** add due dates
- dark mode

### Fixes
- handle empty titles
```

- Sections in this order: `⚠ Breaking changes`, `Features` (`feat`), `Fixes` (`fix` and `perf`). Breaking commits go **only** in the breaking section.
- Within a section, keep commit order. Prefix with `**scope:** ` when there's a scope.
- Omit empty sections. If no section has anything, the body is `- No user-facing changes`.
- Blocks are separated by a blank line, and the output ends with a single `\n`.
