---
slug: "node-path-parts-49"
title: "Node Drill: Parsing file paths #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/public/src/utils/data.json\")` return?","options":["`data.json`","`.json`","`data`","`/public/src/utils`"],"answer":1,"explanation":"It returns `.json`."},{"prompt":"What does `path.extname(\"/db/schema.prisma\")` return?","options":["`/db`","`.prisma`","`schema.prisma`","`schema`"],"answer":1,"explanation":"It returns `.prisma`."},{"prompt":"What does `path.extname(\"/tests/public/dist/app.ts\")` return?","options":["`.ts`","`app.ts`","`/tests/public/dist`","`app`"],"answer":0,"explanation":"It returns `.ts`."},{"prompt":"What does `path.basename(\"/dist/logo.png\")` return?","options":["`/dist`","`.png`","`logo`","`logo.png`"],"answer":3,"explanation":"It returns `logo.png`."},{"prompt":"What does `path.extname(\"/utils/api/schema.prisma\")` return?","options":["`schema`","`/utils/api`","`schema.prisma`","`.prisma`"],"answer":3,"explanation":"It returns `.prisma`."}]
---
# Node Drill: Parsing file paths #49

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
