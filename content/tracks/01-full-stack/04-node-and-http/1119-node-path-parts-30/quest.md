---
slug: "node-path-parts-30"
title: "Node Drill: Parsing file paths #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/dist/.env\")` return?","options":["`.env`","`/dist`","`''`"],"answer":2,"explanation":"It returns `''`."},{"prompt":"What does `path.dirname(\"/utils/routes/src/archive.tar.gz\")` return?","options":["`.gz`","`archive.tar`","`archive.tar.gz`","`/utils/routes/src`"],"answer":3,"explanation":"It returns `/utils/routes/src`."},{"prompt":"What does `path.dirname(\"/users/lib/tests/styles.css\")` return?","options":["`styles.css`","`.css`","`/users/lib/tests`","`styles`"],"answer":2,"explanation":"It returns `/users/lib/tests`."},{"prompt":"What does `path.extname(\"/dist/src/index.js\")` return?","options":["`/dist/src`","`.js`","`index.js`","`index`"],"answer":1,"explanation":"It returns `.js`."},{"prompt":"What does `path.dirname(\"/src/images/logo.png\")` return?","options":["`logo.png`","`.png`","`logo`","`/src/images`"],"answer":3,"explanation":"It returns `/src/images`."}]
---
# Node Drill: Parsing file paths #30

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
