---
slug: "node-path-parts-52"
title: "Node Drill: Parsing file paths #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.basename(\"/public/db/images/data.json\")` return?","options":["`data.json`","`data`","`/public/db/images`","`.json`"],"answer":0,"explanation":"It returns `data.json`."},{"prompt":"What does `path.dirname(\"/utils/users/db/server.mjs\")` return?","options":["`/utils/users/db`","`server.mjs`","`server`","`.mjs`"],"answer":0,"explanation":"It returns `/utils/users/db`."},{"prompt":"What does `path.dirname(\"/api/archive.tar.gz\")` return?","options":["`.gz`","`archive.tar`","`archive.tar.gz`","`/api`"],"answer":3,"explanation":"It returns `/api`."},{"prompt":"What does `path.extname(\"/db/lib/archive.tar.gz\")` return?","options":["`archive.tar.gz`","`.gz`","`/db/lib`","`archive.tar`"],"answer":1,"explanation":"It returns `.gz`."},{"prompt":"What does `path.extname(\"/config/utils/lib/app.ts\")` return?","options":["`app.ts`","`/config/utils/lib`","`.ts`","`app`"],"answer":2,"explanation":"It returns `.ts`."}]
---
# Node Drill: Parsing file paths #52

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
