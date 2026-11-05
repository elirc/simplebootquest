---
slug: "node-path-parts-77"
title: "Node Drill: Parsing file paths #77"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/utils/server.mjs\")` return?","options":["`server`","`.mjs`","`/utils`","`server.mjs`"],"answer":1,"explanation":"It returns `.mjs`."},{"prompt":"What does `path.extname(\"/public/config/data.json\")` return?","options":["`data`","`data.json`","`.json`","`/public/config`"],"answer":2,"explanation":"It returns `.json`."},{"prompt":"What does `path.extname(\"/users/utils/db/app.ts\")` return?","options":["`app.ts`","`app`","`/users/utils/db`","`.ts`"],"answer":3,"explanation":"It returns `.ts`."},{"prompt":"What does `path.basename(\"/lib/notes.md\")` return?","options":["`notes.md`","`notes`","`/lib`","`.md`"],"answer":0,"explanation":"It returns `notes.md`."},{"prompt":"What does `path.extname(\"/dist/config/logo.png\")` return?","options":["`.png`","`/dist/config`","`logo`","`logo.png`"],"answer":0,"explanation":"It returns `.png`."}]
---
# Node Drill: Parsing file paths #77

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
