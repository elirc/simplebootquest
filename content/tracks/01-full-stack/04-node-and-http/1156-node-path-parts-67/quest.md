---
slug: "node-path-parts-67"
title: "Node Drill: Parsing file paths #67"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/images/config/index.js\")` return?","options":["`.js`","`index`","`/images/config`","`index.js`"],"answer":2,"explanation":"It returns `/images/config`."},{"prompt":"What does `path.dirname(\"/images/src/api/schema.prisma\")` return?","options":["`schema.prisma`","`schema`","`/images/src/api`","`.prisma`"],"answer":2,"explanation":"It returns `/images/src/api`."},{"prompt":"What does `path.basename(\"/utils/users/db/app.ts\")` return?","options":["`.ts`","`app`","`app.ts`","`/utils/users/db`"],"answer":2,"explanation":"It returns `app.ts`."},{"prompt":"What does `path.extname(\"/routes/archive.tar.gz\")` return?","options":["`archive.tar.gz`","`/routes`","`.gz`","`archive.tar`"],"answer":2,"explanation":"It returns `.gz`."},{"prompt":"What does `path.extname(\"/api/dist/utils/styles.css\")` return?","options":["`/api/dist/utils`","`styles`","`styles.css`","`.css`"],"answer":3,"explanation":"It returns `.css`."}]
---
# Node Drill: Parsing file paths #67

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
