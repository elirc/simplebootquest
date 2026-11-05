---
slug: "dev-parse-git-log"
title: "Reading git log"
type: "code"
language: "js"
xp: 15
hints: ["`indexOf(\" \")` finds the first space; slice on either side of it.", "A regex like `/^([a-z]+)(\\\\([^)]*\\\\))?!?:/` captures the type of a Conventional Commit."]
---
# Reading git log

`git log --oneline` prints one line per commit: a short hash, then the message.

```
a1b2c3d Add search to the todos list
9f8e7d6 fix: return 404 for missing todos
4c5d6e7 feat(api): paginate GET /todos
```

Tools (and AI agents) parse this output all the time, for example to build changelogs.

## Your task
Write `parseLog(output)` returning `[{ hash, message }]`, one per non-empty line, in order. The hash is everything before the **first** space. Trim each line, and skip empty lines.

Then write `countByType(commits)`, which counts Conventional Commit types: a message like `fix: …` or `feat(api): …` has type `fix` or `feat`. Anything else counts as `other`.
