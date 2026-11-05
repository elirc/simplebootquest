---
slug: "node-path-parts-3"
title: "Node Drill: Parsing file paths #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/dist/utils/index.js\")` return?","options":["`index.js`","`index`","`.js`","`/dist/utils`"],"answer":2,"explanation":"It returns `.js`."},{"prompt":"What does `path.extname(\"/db/dist/src/server.mjs\")` return?","options":["`server`","`.mjs`","`/db/dist/src`","`server.mjs`"],"answer":1,"explanation":"It returns `.mjs`."},{"prompt":"What does `path.dirname(\"/utils/.env\")` return?","options":["`.env`","`/utils`","`''`"],"answer":1,"explanation":"It returns `/utils`."},{"prompt":"What does `path.basename(\"/routes/src/lib/app.ts\")` return?","options":["`app.ts`","`app`","`.ts`","`/routes/src/lib`"],"answer":0,"explanation":"It returns `app.ts`."},{"prompt":"What does `path.basename(\"/config/lib/index.js\")` return?","options":["`.js`","`index`","`index.js`","`/config/lib`"],"answer":2,"explanation":"It returns `index.js`."}]
---
# Node Drill: Parsing file paths #3

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
