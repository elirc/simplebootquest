---
slug: "node-path-parts-43"
title: "Node Drill: Parsing file paths #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/lib/data.json\")` return?","options":["`data.json`","`.json`","`/lib`","`data`"],"answer":1,"explanation":"It returns `.json`."},{"prompt":"What does `path.extname(\"/routes/styles.css\")` return?","options":["`styles`","`/routes`","`styles.css`","`.css`"],"answer":3,"explanation":"It returns `.css`."},{"prompt":"What does `path.basename(\"/api/logo.png\")` return?","options":["`.png`","`/api`","`logo.png`","`logo`"],"answer":2,"explanation":"It returns `logo.png`."},{"prompt":"What does `path.basename(\"/db/api/src/server.mjs\")` return?","options":["`.mjs`","`/db/api/src`","`server.mjs`","`server`"],"answer":2,"explanation":"It returns `server.mjs`."},{"prompt":"What does `path.extname(\"/users/src/app.ts\")` return?","options":["`/users/src`","`app`","`app.ts`","`.ts`"],"answer":3,"explanation":"It returns `.ts`."}]
---
# Node Drill: Parsing file paths #43

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
