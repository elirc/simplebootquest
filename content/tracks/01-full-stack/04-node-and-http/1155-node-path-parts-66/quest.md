---
slug: "node-path-parts-66"
title: "Node Drill: Parsing file paths #66"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/public/utils/index.js\")` return?","options":["`index`","`.js`","`/public/utils`","`index.js`"],"answer":1,"explanation":"It returns `.js`."},{"prompt":"What does `path.basename(\"/api/dist/tests/notes.md\")` return?","options":["`notes.md`","`/api/dist/tests`","`notes`","`.md`"],"answer":0,"explanation":"It returns `notes.md`."},{"prompt":"What does `path.basename(\"/public/dist/notes.md\")` return?","options":["`notes.md`","`notes`","`.md`","`/public/dist`"],"answer":0,"explanation":"It returns `notes.md`."},{"prompt":"What does `path.extname(\"/db/.env\")` return?","options":["`.env`","`''`","`/db`"],"answer":1,"explanation":"It returns `''`."},{"prompt":"What does `path.extname(\"/images/app.ts\")` return?","options":["`app.ts`","`app`","`.ts`","`/images`"],"answer":2,"explanation":"It returns `.ts`."}]
---
# Node Drill: Parsing file paths #66

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
