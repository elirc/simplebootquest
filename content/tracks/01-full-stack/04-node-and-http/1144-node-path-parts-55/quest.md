---
slug: "node-path-parts-55"
title: "Node Drill: Parsing file paths #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/public/api/archive.tar.gz\")` return?","options":["`archive.tar`","`/public/api`","`archive.tar.gz`","`.gz`"],"answer":1,"explanation":"It returns `/public/api`."},{"prompt":"What does `path.dirname(\"/api/users/utils/index.js\")` return?","options":["`/api/users/utils`","`index`","`.js`","`index.js`"],"answer":0,"explanation":"It returns `/api/users/utils`."},{"prompt":"What does `path.basename(\"/images/routes/src/schema.prisma\")` return?","options":["`.prisma`","`schema`","`/images/routes/src`","`schema.prisma`"],"answer":3,"explanation":"It returns `schema.prisma`."},{"prompt":"What does `path.dirname(\"/utils/archive.tar.gz\")` return?","options":["`/utils`","`archive.tar`","`archive.tar.gz`","`.gz`"],"answer":0,"explanation":"It returns `/utils`."},{"prompt":"What does `path.extname(\"/config/logo.png\")` return?","options":["`/config`","`.png`","`logo.png`","`logo`"],"answer":1,"explanation":"It returns `.png`."}]
---
# Node Drill: Parsing file paths #55

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
