---
slug: "node-path-parts-59"
title: "Node Drill: Parsing file paths #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/images/data.json\")` return?","options":["`.json`","`data.json`","`/images`","`data`"],"answer":0,"explanation":"It returns `.json`."},{"prompt":"What does `path.basename(\"/routes/api/config/index.js\")` return?","options":["`index.js`","`index`","`/routes/api/config`","`.js`"],"answer":0,"explanation":"It returns `index.js`."},{"prompt":"What does `path.basename(\"/images/api/app.ts\")` return?","options":["`app`","`/images/api`","`.ts`","`app.ts`"],"answer":3,"explanation":"It returns `app.ts`."},{"prompt":"What does `path.dirname(\"/lib/utils/server.mjs\")` return?","options":["`/lib/utils`","`server`","`server.mjs`","`.mjs`"],"answer":0,"explanation":"It returns `/lib/utils`."},{"prompt":"What does `path.extname(\"/utils/styles.css\")` return?","options":["`/utils`","`styles.css`","`.css`","`styles`"],"answer":2,"explanation":"It returns `.css`."}]
---
# Node Drill: Parsing file paths #59

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
