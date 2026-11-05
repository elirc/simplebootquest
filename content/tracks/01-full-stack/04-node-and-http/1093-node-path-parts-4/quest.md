---
slug: "node-path-parts-4"
title: "Node Drill: Parsing file paths #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/lib/routes/.env\")` return?","options":["`/lib/routes`","`.env`","`''`"],"answer":2,"explanation":"It returns `''`."},{"prompt":"What does `path.basename(\"/lib/dist/styles.css\")` return?","options":["`styles`","`/lib/dist`","`styles.css`","`.css`"],"answer":2,"explanation":"It returns `styles.css`."},{"prompt":"What does `path.extname(\"/users/images/schema.prisma\")` return?","options":["`schema`","`schema.prisma`","`.prisma`","`/users/images`"],"answer":2,"explanation":"It returns `.prisma`."},{"prompt":"What does `path.dirname(\"/utils/tests/data.json\")` return?","options":["`data.json`","`data`","`/utils/tests`","`.json`"],"answer":2,"explanation":"It returns `/utils/tests`."},{"prompt":"What does `path.extname(\"/db/public/lib/server.mjs\")` return?","options":["`server`","`server.mjs`","`/db/public/lib`","`.mjs`"],"answer":3,"explanation":"It returns `.mjs`."}]
---
# Node Drill: Parsing file paths #4

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
