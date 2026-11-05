---
slug: "node-path-parts-35"
title: "Node Drill: Parsing file paths #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/utils/config/public/archive.tar.gz\")` return?","options":["`/utils/config/public`","`archive.tar.gz`","`archive.tar`","`.gz`"],"answer":3,"explanation":"It returns `.gz`."},{"prompt":"What does `path.extname(\"/tests/db/app.ts\")` return?","options":["`app`","`app.ts`","`/tests/db`","`.ts`"],"answer":3,"explanation":"It returns `.ts`."},{"prompt":"What does `path.dirname(\"/api/config/schema.prisma\")` return?","options":["`schema.prisma`","`/api/config`","`schema`","`.prisma`"],"answer":1,"explanation":"It returns `/api/config`."},{"prompt":"What does `path.extname(\"/api/src/.env\")` return?","options":["`.env`","`''`","`/api/src`"],"answer":1,"explanation":"It returns `''`."},{"prompt":"What does `path.basename(\"/routes/archive.tar.gz\")` return?","options":["`/routes`","`archive.tar`","`archive.tar.gz`","`.gz`"],"answer":2,"explanation":"It returns `archive.tar.gz`."}]
---
# Node Drill: Parsing file paths #35

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
