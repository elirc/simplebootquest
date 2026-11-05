---
slug: "node-path-parts-24"
title: "Node Drill: Parsing file paths #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/utils/tests/src/.env\")` return?","options":["`.env`","`/utils/tests/src`","`''`"],"answer":1,"explanation":"It returns `/utils/tests/src`."},{"prompt":"What does `path.extname(\"/routes/utils/public/server.mjs\")` return?","options":["`server`","`.mjs`","`server.mjs`","`/routes/utils/public`"],"answer":1,"explanation":"It returns `.mjs`."},{"prompt":"What does `path.dirname(\"/utils/db/styles.css\")` return?","options":["`styles`","`.css`","`styles.css`","`/utils/db`"],"answer":3,"explanation":"It returns `/utils/db`."},{"prompt":"What does `path.dirname(\"/db/dist/app.ts\")` return?","options":["`.ts`","`app`","`/db/dist`","`app.ts`"],"answer":2,"explanation":"It returns `/db/dist`."},{"prompt":"What does `path.extname(\"/config/index.js\")` return?","options":["`/config`","`index`","`index.js`","`.js`"],"answer":3,"explanation":"It returns `.js`."}]
---
# Node Drill: Parsing file paths #24

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
