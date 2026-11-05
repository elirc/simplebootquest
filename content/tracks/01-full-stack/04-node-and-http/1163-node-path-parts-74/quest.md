---
slug: "node-path-parts-74"
title: "Node Drill: Parsing file paths #74"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.basename(\"/images/notes.md\")` return?","options":["`/images`","`notes.md`","`notes`","`.md`"],"answer":1,"explanation":"It returns `notes.md`."},{"prompt":"What does `path.dirname(\"/routes/lib/server.mjs\")` return?","options":["`server.mjs`","`/routes/lib`","`.mjs`","`server`"],"answer":1,"explanation":"It returns `/routes/lib`."},{"prompt":"What does `path.basename(\"/users/data.json\")` return?","options":["`.json`","`data`","`/users`","`data.json`"],"answer":3,"explanation":"It returns `data.json`."},{"prompt":"What does `path.basename(\"/db/routes/data.json\")` return?","options":["`/db/routes`","`.json`","`data`","`data.json`"],"answer":3,"explanation":"It returns `data.json`."},{"prompt":"What does `path.basename(\"/images/db/dist/.env\")` return?","options":["`/images/db/dist`","`''`","`.env`"],"answer":2,"explanation":"It returns `.env`."}]
---
# Node Drill: Parsing file paths #74

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
