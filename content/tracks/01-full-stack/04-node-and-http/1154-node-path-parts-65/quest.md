---
slug: "node-path-parts-65"
title: "Node Drill: Parsing file paths #65"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/lib/api/index.js\")` return?","options":["`index.js`","`/lib/api`","`index`","`.js`"],"answer":1,"explanation":"It returns `/lib/api`."},{"prompt":"What does `path.extname(\"/users/app.ts\")` return?","options":["`app.ts`","`app`","`/users`","`.ts`"],"answer":3,"explanation":"It returns `.ts`."},{"prompt":"What does `path.basename(\"/tests/src/lib/server.mjs\")` return?","options":["`.mjs`","`/tests/src/lib`","`server.mjs`","`server`"],"answer":2,"explanation":"It returns `server.mjs`."},{"prompt":"What does `path.basename(\"/db/api/index.js\")` return?","options":["`index.js`","`/db/api`","`.js`","`index`"],"answer":0,"explanation":"It returns `index.js`."},{"prompt":"What does `path.extname(\"/db/index.js\")` return?","options":["`/db`","`.js`","`index`","`index.js`"],"answer":1,"explanation":"It returns `.js`."}]
---
# Node Drill: Parsing file paths #65

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
