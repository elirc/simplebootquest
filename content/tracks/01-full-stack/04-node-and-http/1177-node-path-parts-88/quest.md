---
slug: "node-path-parts-88"
title: "Node Drill: Parsing file paths #88"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.basename(\"/public/config/app.ts\")` return?","options":["`app`","`app.ts`","`/public/config`","`.ts`"],"answer":1,"explanation":"It returns `app.ts`."},{"prompt":"What does `path.dirname(\"/src/users/archive.tar.gz\")` return?","options":["`archive.tar.gz`","`/src/users`","`.gz`","`archive.tar`"],"answer":1,"explanation":"It returns `/src/users`."},{"prompt":"What does `path.extname(\"/utils/lib/src/schema.prisma\")` return?","options":["`schema`","`schema.prisma`","`.prisma`","`/utils/lib/src`"],"answer":2,"explanation":"It returns `.prisma`."},{"prompt":"What does `path.dirname(\"/dist/styles.css\")` return?","options":["`/dist`","`.css`","`styles`","`styles.css`"],"answer":0,"explanation":"It returns `/dist`."},{"prompt":"What does `path.dirname(\"/users/public/app.ts\")` return?","options":["`.ts`","`app`","`/users/public`","`app.ts`"],"answer":2,"explanation":"It returns `/users/public`."}]
---
# Node Drill: Parsing file paths #88

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
