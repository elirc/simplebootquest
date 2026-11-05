---
slug: "node-path-parts-76"
title: "Node Drill: Parsing file paths #76"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/users/src/.env\")` return?","options":["`.env`","`/users/src`","`''`"],"answer":2,"explanation":"It returns `''`."},{"prompt":"What does `path.dirname(\"/db/public/data.json\")` return?","options":["`data.json`","`/db/public`","`.json`","`data`"],"answer":1,"explanation":"It returns `/db/public`."},{"prompt":"What does `path.dirname(\"/users/dist/archive.tar.gz\")` return?","options":["`.gz`","`archive.tar`","`/users/dist`","`archive.tar.gz`"],"answer":2,"explanation":"It returns `/users/dist`."},{"prompt":"What does `path.basename(\"/dist/data.json\")` return?","options":["`data.json`","`.json`","`data`","`/dist`"],"answer":0,"explanation":"It returns `data.json`."},{"prompt":"What does `path.extname(\"/utils/routes/index.js\")` return?","options":["`/utils/routes`","`index`","`.js`","`index.js`"],"answer":2,"explanation":"It returns `.js`."}]
---
# Node Drill: Parsing file paths #76

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
