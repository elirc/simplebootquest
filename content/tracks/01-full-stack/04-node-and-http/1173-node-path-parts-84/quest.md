---
slug: "node-path-parts-84"
title: "Node Drill: Parsing file paths #84"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.basename(\"/src/utils/notes.md\")` return?","options":["`/src/utils`","`notes.md`","`notes`","`.md`"],"answer":1,"explanation":"It returns `notes.md`."},{"prompt":"What does `path.dirname(\"/src/styles.css\")` return?","options":["`styles.css`","`/src`","`.css`","`styles`"],"answer":1,"explanation":"It returns `/src`."},{"prompt":"What does `path.dirname(\"/src/images/routes/server.mjs\")` return?","options":["`server.mjs`","`/src/images/routes`","`.mjs`","`server`"],"answer":1,"explanation":"It returns `/src/images/routes`."},{"prompt":"What does `path.extname(\"/utils/lib/index.js\")` return?","options":["`.js`","`index`","`index.js`","`/utils/lib`"],"answer":0,"explanation":"It returns `.js`."},{"prompt":"What does `path.basename(\"/routes/server.mjs\")` return?","options":["`.mjs`","`/routes`","`server`","`server.mjs`"],"answer":3,"explanation":"It returns `server.mjs`."}]
---
# Node Drill: Parsing file paths #84

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
