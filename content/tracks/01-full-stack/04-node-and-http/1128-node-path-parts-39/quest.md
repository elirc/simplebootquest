---
slug: "node-path-parts-39"
title: "Node Drill: Parsing file paths #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/users/lib/data.json\")` return?","options":["`/users/lib`","`data.json`","`.json`","`data`"],"answer":2,"explanation":"It returns `.json`."},{"prompt":"What does `path.dirname(\"/dist/db/utils/.env\")` return?","options":["`/dist/db/utils`","`''`","`.env`"],"answer":0,"explanation":"It returns `/dist/db/utils`."},{"prompt":"What does `path.dirname(\"/utils/users/archive.tar.gz\")` return?","options":["`archive.tar`","`archive.tar.gz`","`/utils/users`","`.gz`"],"answer":2,"explanation":"It returns `/utils/users`."},{"prompt":"What does `path.dirname(\"/images/api/db/index.js\")` return?","options":["`.js`","`index.js`","`/images/api/db`","`index`"],"answer":2,"explanation":"It returns `/images/api/db`."},{"prompt":"What does `path.dirname(\"/api/users/styles.css\")` return?","options":["`styles`","`/api/users`","`styles.css`","`.css`"],"answer":1,"explanation":"It returns `/api/users`."}]
---
# Node Drill: Parsing file paths #39

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
