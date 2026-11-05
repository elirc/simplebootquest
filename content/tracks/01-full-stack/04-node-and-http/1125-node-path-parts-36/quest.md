---
slug: "node-path-parts-36"
title: "Node Drill: Parsing file paths #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/api/src/images/app.ts\")` return?","options":["`app.ts`","`.ts`","`app`","`/api/src/images`"],"answer":1,"explanation":"It returns `.ts`."},{"prompt":"What does `path.extname(\"/users/config/.env\")` return?","options":["`/users/config`","`.env`","`''`"],"answer":2,"explanation":"It returns `''`."},{"prompt":"What does `path.dirname(\"/public/server.mjs\")` return?","options":["`server`","`/public`","`server.mjs`","`.mjs`"],"answer":1,"explanation":"It returns `/public`."},{"prompt":"What does `path.dirname(\"/lib/tests/users/.env\")` return?","options":["`.env`","`''`","`/lib/tests/users`"],"answer":2,"explanation":"It returns `/lib/tests/users`."},{"prompt":"What does `path.dirname(\"/api/lib/index.js\")` return?","options":["`index.js`","`/api/lib`","`index`","`.js`"],"answer":1,"explanation":"It returns `/api/lib`."}]
---
# Node Drill: Parsing file paths #36

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
