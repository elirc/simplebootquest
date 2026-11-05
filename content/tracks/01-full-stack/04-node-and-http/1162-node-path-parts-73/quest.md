---
slug: "node-path-parts-73"
title: "Node Drill: Parsing file paths #73"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/public/routes/images/styles.css\")` return?","options":["`.css`","`/public/routes/images`","`styles`","`styles.css`"],"answer":0,"explanation":"It returns `.css`."},{"prompt":"What does `path.dirname(\"/users/api/src/server.mjs\")` return?","options":["`server`","`/users/api/src`","`.mjs`","`server.mjs`"],"answer":1,"explanation":"It returns `/users/api/src`."},{"prompt":"What does `path.dirname(\"/dist/api/server.mjs\")` return?","options":["`server.mjs`","`/dist/api`","`.mjs`","`server`"],"answer":1,"explanation":"It returns `/dist/api`."},{"prompt":"What does `path.dirname(\"/images/lib/data.json\")` return?","options":["`.json`","`data`","`/images/lib`","`data.json`"],"answer":2,"explanation":"It returns `/images/lib`."},{"prompt":"What does `path.extname(\"/lib/images/index.js\")` return?","options":["`index.js`","`index`","`/lib/images`","`.js`"],"answer":3,"explanation":"It returns `.js`."}]
---
# Node Drill: Parsing file paths #73

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
