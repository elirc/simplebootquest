---
slug: "node-path-parts-11"
title: "Node Drill: Parsing file paths #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.basename(\"/config/db/lib/notes.md\")` return?","options":["`.md`","`notes`","`notes.md`","`/config/db/lib`"],"answer":2,"explanation":"It returns `notes.md`."},{"prompt":"What does `path.basename(\"/src/routes/api/index.js\")` return?","options":["`index.js`","`index`","`.js`","`/src/routes/api`"],"answer":0,"explanation":"It returns `index.js`."},{"prompt":"What does `path.extname(\"/images/routes/config/app.ts\")` return?","options":["`/images/routes/config`","`app.ts`","`app`","`.ts`"],"answer":3,"explanation":"It returns `.ts`."},{"prompt":"What does `path.basename(\"/tests/index.js\")` return?","options":["`index.js`","`.js`","`/tests`","`index`"],"answer":0,"explanation":"It returns `index.js`."},{"prompt":"What does `path.extname(\"/public/config/server.mjs\")` return?","options":["`/public/config`","`server`","`server.mjs`","`.mjs`"],"answer":3,"explanation":"It returns `.mjs`."}]
---
# Node Drill: Parsing file paths #11

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
