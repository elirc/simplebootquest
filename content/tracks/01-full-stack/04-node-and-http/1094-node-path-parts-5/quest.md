---
slug: "node-path-parts-5"
title: "Node Drill: Parsing file paths #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/routes/schema.prisma\")` return?","options":["`/routes`","`schema.prisma`","`.prisma`","`schema`"],"answer":0,"explanation":"It returns `/routes`."},{"prompt":"What does `path.extname(\"/dist/api/app.ts\")` return?","options":["`.ts`","`/dist/api`","`app`","`app.ts`"],"answer":0,"explanation":"It returns `.ts`."},{"prompt":"What does `path.dirname(\"/lib/db/notes.md\")` return?","options":["`notes.md`","`/lib/db`","`notes`","`.md`"],"answer":1,"explanation":"It returns `/lib/db`."},{"prompt":"What does `path.basename(\"/utils/config/archive.tar.gz\")` return?","options":["`archive.tar`","`.gz`","`/utils/config`","`archive.tar.gz`"],"answer":3,"explanation":"It returns `archive.tar.gz`."},{"prompt":"What does `path.basename(\"/users/tests/public/data.json\")` return?","options":["`data.json`","`data`","`/users/tests/public`","`.json`"],"answer":0,"explanation":"It returns `data.json`."}]
---
# Node Drill: Parsing file paths #5

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
