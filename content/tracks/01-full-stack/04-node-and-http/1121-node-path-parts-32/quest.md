---
slug: "node-path-parts-32"
title: "Node Drill: Parsing file paths #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/tests/index.js\")` return?","options":["`.js`","`index`","`/tests`","`index.js`"],"answer":2,"explanation":"It returns `/tests`."},{"prompt":"What does `path.dirname(\"/users/api/lib/.env\")` return?","options":["`''`","`/users/api/lib`","`.env`"],"answer":1,"explanation":"It returns `/users/api/lib`."},{"prompt":"What does `path.basename(\"/dist/users/.env\")` return?","options":["`/dist/users`","`.env`","`''`"],"answer":1,"explanation":"It returns `.env`."},{"prompt":"What does `path.extname(\"/users/routes/logo.png\")` return?","options":["`logo.png`","`.png`","`/users/routes`","`logo`"],"answer":1,"explanation":"It returns `.png`."},{"prompt":"What does `path.extname(\"/config/tests/data.json\")` return?","options":["`.json`","`/config/tests`","`data`","`data.json`"],"answer":0,"explanation":"It returns `.json`."}]
---
# Node Drill: Parsing file paths #32

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
