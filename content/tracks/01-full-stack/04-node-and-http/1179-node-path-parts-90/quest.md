---
slug: "node-path-parts-90"
title: "Node Drill: Parsing file paths #90"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/public/index.js\")` return?","options":["`index.js`","`.js`","`index`","`/public`"],"answer":1,"explanation":"It returns `.js`."},{"prompt":"What does `path.dirname(\"/public/lib/config/index.js\")` return?","options":["`index`","`.js`","`index.js`","`/public/lib/config`"],"answer":3,"explanation":"It returns `/public/lib/config`."},{"prompt":"What does `path.dirname(\"/tests/api/data.json\")` return?","options":["`data`","`.json`","`/tests/api`","`data.json`"],"answer":2,"explanation":"It returns `/tests/api`."},{"prompt":"What does `path.dirname(\"/routes/dist/src/logo.png\")` return?","options":["`.png`","`/routes/dist/src`","`logo.png`","`logo`"],"answer":1,"explanation":"It returns `/routes/dist/src`."},{"prompt":"What does `path.extname(\"/images/src/api/styles.css\")` return?","options":["`styles.css`","`.css`","`styles`","`/images/src/api`"],"answer":1,"explanation":"It returns `.css`."}]
---
# Node Drill: Parsing file paths #90

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
