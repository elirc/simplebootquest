---
slug: "node-path-parts-19"
title: "Node Drill: Parsing file paths #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.basename(\"/tests/lib/logo.png\")` return?","options":["`.png`","`logo.png`","`/tests/lib`","`logo`"],"answer":1,"explanation":"It returns `logo.png`."},{"prompt":"What does `path.basename(\"/lib/schema.prisma\")` return?","options":["`/lib`","`schema`","`schema.prisma`","`.prisma`"],"answer":2,"explanation":"It returns `schema.prisma`."},{"prompt":"What does `path.extname(\"/images/index.js\")` return?","options":["`index`","`.js`","`index.js`","`/images`"],"answer":1,"explanation":"It returns `.js`."},{"prompt":"What does `path.dirname(\"/users/tests/archive.tar.gz\")` return?","options":["`.gz`","`archive.tar`","`archive.tar.gz`","`/users/tests`"],"answer":3,"explanation":"It returns `/users/tests`."},{"prompt":"What does `path.basename(\"/db/api/src/styles.css\")` return?","options":["`styles.css`","`/db/api/src`","`.css`","`styles`"],"answer":0,"explanation":"It returns `styles.css`."}]
---
# Node Drill: Parsing file paths #19

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
