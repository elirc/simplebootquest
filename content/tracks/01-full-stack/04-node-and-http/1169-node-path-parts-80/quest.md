---
slug: "node-path-parts-80"
title: "Node Drill: Parsing file paths #80"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/db/images/.env\")` return?","options":["`''`","`/db/images`","`.env`"],"answer":1,"explanation":"It returns `/db/images`."},{"prompt":"What does `path.extname(\"/users/db/api/archive.tar.gz\")` return?","options":["`archive.tar`","`archive.tar.gz`","`/users/db/api`","`.gz`"],"answer":3,"explanation":"It returns `.gz`."},{"prompt":"What does `path.extname(\"/tests/utils/server.mjs\")` return?","options":["`/tests/utils`","`.mjs`","`server.mjs`","`server`"],"answer":1,"explanation":"It returns `.mjs`."},{"prompt":"What does `path.basename(\"/tests/utils/server.mjs\")` return?","options":["`server.mjs`","`.mjs`","`server`","`/tests/utils`"],"answer":0,"explanation":"It returns `server.mjs`."},{"prompt":"What does `path.dirname(\"/dist/data.json\")` return?","options":["`data.json`","`data`","`.json`","`/dist`"],"answer":3,"explanation":"It returns `/dist`."}]
---
# Node Drill: Parsing file paths #80

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
