---
slug: "node-path-parts-68"
title: "Node Drill: Parsing file paths #68"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/routes/tests/server.mjs\")` return?","options":["`server`","`.mjs`","`/routes/tests`","`server.mjs`"],"answer":2,"explanation":"It returns `/routes/tests`."},{"prompt":"What does `path.basename(\"/routes/images/tests/.env\")` return?","options":["`.env`","`/routes/images/tests`","`''`"],"answer":0,"explanation":"It returns `.env`."},{"prompt":"What does `path.extname(\"/tests/config/dist/notes.md\")` return?","options":["`.md`","`notes.md`","`/tests/config/dist`","`notes`"],"answer":0,"explanation":"It returns `.md`."},{"prompt":"What does `path.dirname(\"/routes/users/images/.env\")` return?","options":["`/routes/users/images`","`.env`","`''`"],"answer":0,"explanation":"It returns `/routes/users/images`."},{"prompt":"What does `path.dirname(\"/routes/app.ts\")` return?","options":["`/routes`","`.ts`","`app.ts`","`app`"],"answer":0,"explanation":"It returns `/routes`."}]
---
# Node Drill: Parsing file paths #68

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
