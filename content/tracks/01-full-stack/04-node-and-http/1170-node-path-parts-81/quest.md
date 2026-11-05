---
slug: "node-path-parts-81"
title: "Node Drill: Parsing file paths #81"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/utils/notes.md\")` return?","options":["`notes.md`","`/utils`","`.md`","`notes`"],"answer":1,"explanation":"It returns `/utils`."},{"prompt":"What does `path.extname(\"/public/dist/server.mjs\")` return?","options":["`/public/dist`","`server`","`server.mjs`","`.mjs`"],"answer":3,"explanation":"It returns `.mjs`."},{"prompt":"What does `path.basename(\"/src/dist/index.js\")` return?","options":["`.js`","`/src/dist`","`index.js`","`index`"],"answer":2,"explanation":"It returns `index.js`."},{"prompt":"What does `path.basename(\"/images/routes/index.js\")` return?","options":["`index.js`","`/images/routes`","`index`","`.js`"],"answer":0,"explanation":"It returns `index.js`."},{"prompt":"What does `path.basename(\"/routes/lib/images/archive.tar.gz\")` return?","options":["`.gz`","`archive.tar.gz`","`archive.tar`","`/routes/lib/images`"],"answer":1,"explanation":"It returns `archive.tar.gz`."}]
---
# Node Drill: Parsing file paths #81

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
