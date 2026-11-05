---
slug: "node-path-parts-85"
title: "Node Drill: Parsing file paths #85"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/config/src/dist/app.ts\")` return?","options":["`/config/src/dist`","`app`","`.ts`","`app.ts`"],"answer":0,"explanation":"It returns `/config/src/dist`."},{"prompt":"What does `path.basename(\"/users/api/schema.prisma\")` return?","options":["`schema`","`schema.prisma`","`.prisma`","`/users/api`"],"answer":1,"explanation":"It returns `schema.prisma`."},{"prompt":"What does `path.basename(\"/dist/images/app.ts\")` return?","options":["`app`","`/dist/images`","`.ts`","`app.ts`"],"answer":3,"explanation":"It returns `app.ts`."},{"prompt":"What does `path.extname(\"/images/lib/.env\")` return?","options":["`''`","`.env`","`/images/lib`"],"answer":0,"explanation":"It returns `''`."},{"prompt":"What does `path.extname(\"/lib/db/.env\")` return?","options":["`''`","`/lib/db`","`.env`"],"answer":0,"explanation":"It returns `''`."}]
---
# Node Drill: Parsing file paths #85

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
