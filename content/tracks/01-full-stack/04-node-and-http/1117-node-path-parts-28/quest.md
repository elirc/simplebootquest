---
slug: "node-path-parts-28"
title: "Node Drill: Parsing file paths #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.basename(\"/routes/users/.env\")` return?","options":["`/routes/users`","`.env`","`''`"],"answer":1,"explanation":"It returns `.env`."},{"prompt":"What does `path.dirname(\"/images/.env\")` return?","options":["`''`","`/images`","`.env`"],"answer":1,"explanation":"It returns `/images`."},{"prompt":"What does `path.basename(\"/config/images/logo.png\")` return?","options":["`.png`","`logo.png`","`logo`","`/config/images`"],"answer":1,"explanation":"It returns `logo.png`."},{"prompt":"What does `path.dirname(\"/api/public/server.mjs\")` return?","options":["`.mjs`","`server.mjs`","`/api/public`","`server`"],"answer":2,"explanation":"It returns `/api/public`."},{"prompt":"What does `path.extname(\"/images/db/.env\")` return?","options":["`.env`","`''`","`/images/db`"],"answer":1,"explanation":"It returns `''`."}]
---
# Node Drill: Parsing file paths #28

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
