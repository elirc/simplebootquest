---
slug: "node-path-parts-14"
title: "Node Drill: Parsing file paths #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/users/images/logo.png\")` return?","options":["`.png`","`logo`","`logo.png`","`/users/images`"],"answer":3,"explanation":"It returns `/users/images`."},{"prompt":"What does `path.extname(\"/lib/images/logo.png\")` return?","options":["`.png`","`logo`","`logo.png`","`/lib/images`"],"answer":0,"explanation":"It returns `.png`."},{"prompt":"What does `path.extname(\"/db/logo.png\")` return?","options":["`logo.png`","`logo`","`/db`","`.png`"],"answer":3,"explanation":"It returns `.png`."},{"prompt":"What does `path.extname(\"/api/db/public/data.json\")` return?","options":["`.json`","`data`","`data.json`","`/api/db/public`"],"answer":0,"explanation":"It returns `.json`."},{"prompt":"What does `path.dirname(\"/src/utils/tests/data.json\")` return?","options":["`/src/utils/tests`","`data.json`","`.json`","`data`"],"answer":0,"explanation":"It returns `/src/utils/tests`."}]
---
# Node Drill: Parsing file paths #14

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
