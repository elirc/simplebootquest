---
slug: "node-path-parts-31"
title: "Node Drill: Parsing file paths #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/src/utils/tests/.env\")` return?","options":["`.env`","`''`","`/src/utils/tests`"],"answer":1,"explanation":"It returns `''`."},{"prompt":"What does `path.extname(\"/api/routes/src/schema.prisma\")` return?","options":["`schema`","`.prisma`","`/api/routes/src`","`schema.prisma`"],"answer":1,"explanation":"It returns `.prisma`."},{"prompt":"What does `path.dirname(\"/users/api/src/data.json\")` return?","options":["`.json`","`data.json`","`/users/api/src`","`data`"],"answer":2,"explanation":"It returns `/users/api/src`."},{"prompt":"What does `path.basename(\"/lib/utils/src/.env\")` return?","options":["`.env`","`/lib/utils/src`","`''`"],"answer":0,"explanation":"It returns `.env`."},{"prompt":"What does `path.extname(\"/config/tests/server.mjs\")` return?","options":["`/config/tests`","`server.mjs`","`.mjs`","`server`"],"answer":2,"explanation":"It returns `.mjs`."}]
---
# Node Drill: Parsing file paths #31

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
