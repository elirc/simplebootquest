---
slug: "node-path-parts-45"
title: "Node Drill: Parsing file paths #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.basename(\"/api/public/logo.png\")` return?","options":["`logo.png`","`.png`","`logo`","`/api/public`"],"answer":0,"explanation":"It returns `logo.png`."},{"prompt":"What does `path.basename(\"/images/public/data.json\")` return?","options":["`.json`","`/images/public`","`data`","`data.json`"],"answer":3,"explanation":"It returns `data.json`."},{"prompt":"What does `path.dirname(\"/dist/tests/routes/server.mjs\")` return?","options":["`server.mjs`","`/dist/tests/routes`","`server`","`.mjs`"],"answer":1,"explanation":"It returns `/dist/tests/routes`."},{"prompt":"What does `path.basename(\"/utils/users/server.mjs\")` return?","options":["`server.mjs`","`server`","`.mjs`","`/utils/users`"],"answer":0,"explanation":"It returns `server.mjs`."},{"prompt":"What does `path.dirname(\"/dist/lib/data.json\")` return?","options":["`data`","`/dist/lib`","`data.json`","`.json`"],"answer":1,"explanation":"It returns `/dist/lib`."}]
---
# Node Drill: Parsing file paths #45

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
