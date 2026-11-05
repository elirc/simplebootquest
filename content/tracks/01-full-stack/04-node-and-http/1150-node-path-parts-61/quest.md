---
slug: "node-path-parts-61"
title: "Node Drill: Parsing file paths #61"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/images/lib/utils/app.ts\")` return?","options":["`/images/lib/utils`","`app`","`app.ts`","`.ts`"],"answer":0,"explanation":"It returns `/images/lib/utils`."},{"prompt":"What does `path.basename(\"/tests/data.json\")` return?","options":["`data`","`/tests`","`data.json`","`.json`"],"answer":2,"explanation":"It returns `data.json`."},{"prompt":"What does `path.basename(\"/utils/lib/config/archive.tar.gz\")` return?","options":["`.gz`","`archive.tar`","`archive.tar.gz`","`/utils/lib/config`"],"answer":2,"explanation":"It returns `archive.tar.gz`."},{"prompt":"What does `path.basename(\"/routes/index.js\")` return?","options":["`index`","`.js`","`index.js`","`/routes`"],"answer":2,"explanation":"It returns `index.js`."},{"prompt":"What does `path.dirname(\"/utils/server.mjs\")` return?","options":["`server`","`server.mjs`","`.mjs`","`/utils`"],"answer":3,"explanation":"It returns `/utils`."}]
---
# Node Drill: Parsing file paths #61

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
