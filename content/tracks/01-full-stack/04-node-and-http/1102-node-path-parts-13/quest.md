---
slug: "node-path-parts-13"
title: "Node Drill: Parsing file paths #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/utils/dist/tests/server.mjs\")` return?","options":["`server.mjs`","`.mjs`","`server`","`/utils/dist/tests`"],"answer":3,"explanation":"It returns `/utils/dist/tests`."},{"prompt":"What does `path.extname(\"/tests/styles.css\")` return?","options":["`.css`","`styles`","`styles.css`","`/tests`"],"answer":0,"explanation":"It returns `.css`."},{"prompt":"What does `path.dirname(\"/api/notes.md\")` return?","options":["`notes.md`","`notes`","`.md`","`/api`"],"answer":3,"explanation":"It returns `/api`."},{"prompt":"What does `path.dirname(\"/src/routes/tests/schema.prisma\")` return?","options":["`schema`","`schema.prisma`","`.prisma`","`/src/routes/tests`"],"answer":3,"explanation":"It returns `/src/routes/tests`."},{"prompt":"What does `path.extname(\"/api/images/data.json\")` return?","options":["`data`","`.json`","`/api/images`","`data.json`"],"answer":1,"explanation":"It returns `.json`."}]
---
# Node Drill: Parsing file paths #13

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
