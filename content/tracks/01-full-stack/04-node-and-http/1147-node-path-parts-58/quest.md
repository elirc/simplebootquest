---
slug: "node-path-parts-58"
title: "Node Drill: Parsing file paths #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.basename(\"/db/api/src/schema.prisma\")` return?","options":["`schema`","`/db/api/src`","`schema.prisma`","`.prisma`"],"answer":2,"explanation":"It returns `schema.prisma`."},{"prompt":"What does `path.basename(\"/db/archive.tar.gz\")` return?","options":["`archive.tar.gz`","`/db`","`.gz`","`archive.tar`"],"answer":0,"explanation":"It returns `archive.tar.gz`."},{"prompt":"What does `path.extname(\"/tests/src/dist/app.ts\")` return?","options":["`.ts`","`app.ts`","`app`","`/tests/src/dist`"],"answer":0,"explanation":"It returns `.ts`."},{"prompt":"What does `path.extname(\"/users/config/app.ts\")` return?","options":["`/users/config`","`app.ts`","`app`","`.ts`"],"answer":3,"explanation":"It returns `.ts`."},{"prompt":"What does `path.extname(\"/dist/db/index.js\")` return?","options":["`index.js`","`/dist/db`","`.js`","`index`"],"answer":2,"explanation":"It returns `.js`."}]
---
# Node Drill: Parsing file paths #58

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
