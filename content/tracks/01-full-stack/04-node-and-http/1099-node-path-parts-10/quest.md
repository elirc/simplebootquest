---
slug: "node-path-parts-10"
title: "Node Drill: Parsing file paths #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/config/db/images/schema.prisma\")` return?","options":["`schema.prisma`","`.prisma`","`/config/db/images`","`schema`"],"answer":2,"explanation":"It returns `/config/db/images`."},{"prompt":"What does `path.dirname(\"/api/server.mjs\")` return?","options":["`/api`","`.mjs`","`server`","`server.mjs`"],"answer":0,"explanation":"It returns `/api`."},{"prompt":"What does `path.dirname(\"/public/logo.png\")` return?","options":["`/public`","`logo.png`","`.png`","`logo`"],"answer":0,"explanation":"It returns `/public`."},{"prompt":"What does `path.basename(\"/users/logo.png\")` return?","options":["`/users`","`.png`","`logo.png`","`logo`"],"answer":2,"explanation":"It returns `logo.png`."},{"prompt":"What does `path.basename(\"/public/schema.prisma\")` return?","options":["`schema.prisma`","`schema`","`.prisma`","`/public`"],"answer":0,"explanation":"It returns `schema.prisma`."}]
---
# Node Drill: Parsing file paths #10

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
