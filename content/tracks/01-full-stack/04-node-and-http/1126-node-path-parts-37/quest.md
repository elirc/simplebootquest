---
slug: "node-path-parts-37"
title: "Node Drill: Parsing file paths #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/api/tests/lib/app.ts\")` return?","options":["`app`","`/api/tests/lib`","`app.ts`","`.ts`"],"answer":3,"explanation":"It returns `.ts`."},{"prompt":"What does `path.extname(\"/dist/images/lib/styles.css\")` return?","options":["`/dist/images/lib`","`styles.css`","`.css`","`styles`"],"answer":2,"explanation":"It returns `.css`."},{"prompt":"What does `path.dirname(\"/db/api/dist/styles.css\")` return?","options":["`styles`","`.css`","`styles.css`","`/db/api/dist`"],"answer":3,"explanation":"It returns `/db/api/dist`."},{"prompt":"What does `path.dirname(\"/tests/src/app.ts\")` return?","options":["`/tests/src`","`.ts`","`app`","`app.ts`"],"answer":0,"explanation":"It returns `/tests/src`."},{"prompt":"What does `path.extname(\"/api/lib/config/index.js\")` return?","options":["`index.js`","`.js`","`index`","`/api/lib/config`"],"answer":1,"explanation":"It returns `.js`."}]
---
# Node Drill: Parsing file paths #37

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
