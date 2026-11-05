---
slug: "node-path-parts-40"
title: "Node Drill: Parsing file paths #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/users/.env\")` return?","options":["`.env`","`''`","`/users`"],"answer":1,"explanation":"It returns `''`."},{"prompt":"What does `path.dirname(\"/users/server.mjs\")` return?","options":["`server.mjs`","`.mjs`","`/users`","`server`"],"answer":2,"explanation":"It returns `/users`."},{"prompt":"What does `path.dirname(\"/images/config/api/.env\")` return?","options":["`''`","`/images/config/api`","`.env`"],"answer":1,"explanation":"It returns `/images/config/api`."},{"prompt":"What does `path.extname(\"/db/data.json\")` return?","options":["`.json`","`data`","`/db`","`data.json`"],"answer":0,"explanation":"It returns `.json`."},{"prompt":"What does `path.extname(\"/users/server.mjs\")` return?","options":["`server.mjs`","`server`","`/users`","`.mjs`"],"answer":3,"explanation":"It returns `.mjs`."}]
---
# Node Drill: Parsing file paths #40

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
