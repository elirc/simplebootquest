---
slug: "node-path-parts-23"
title: "Node Drill: Parsing file paths #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/utils/images/dist/app.ts\")` return?","options":["`app`","`app.ts`","`.ts`","`/utils/images/dist`"],"answer":2,"explanation":"It returns `.ts`."},{"prompt":"What does `path.extname(\"/src/server.mjs\")` return?","options":["`/src`","`server`","`server.mjs`","`.mjs`"],"answer":3,"explanation":"It returns `.mjs`."},{"prompt":"What does `path.basename(\"/images/api/notes.md\")` return?","options":["`notes.md`","`.md`","`notes`","`/images/api`"],"answer":0,"explanation":"It returns `notes.md`."},{"prompt":"What does `path.extname(\"/src/images/public/notes.md\")` return?","options":["`.md`","`notes.md`","`notes`","`/src/images/public`"],"answer":0,"explanation":"It returns `.md`."},{"prompt":"What does `path.basename(\"/src/notes.md\")` return?","options":["`notes`","`/src`","`.md`","`notes.md`"],"answer":3,"explanation":"It returns `notes.md`."}]
---
# Node Drill: Parsing file paths #23

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
