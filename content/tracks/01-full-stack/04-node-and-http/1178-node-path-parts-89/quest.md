---
slug: "node-path-parts-89"
title: "Node Drill: Parsing file paths #89"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/users/images/app.ts\")` return?","options":["`app.ts`","`app`","`/users/images`","`.ts`"],"answer":2,"explanation":"It returns `/users/images`."},{"prompt":"What does `path.extname(\"/public/config/index.js\")` return?","options":["`/public/config`","`.js`","`index.js`","`index`"],"answer":1,"explanation":"It returns `.js`."},{"prompt":"What does `path.basename(\"/utils/public/dist/archive.tar.gz\")` return?","options":["`archive.tar`","`.gz`","`archive.tar.gz`","`/utils/public/dist`"],"answer":2,"explanation":"It returns `archive.tar.gz`."},{"prompt":"What does `path.extname(\"/routes/src/logo.png\")` return?","options":["`.png`","`logo.png`","`/routes/src`","`logo`"],"answer":0,"explanation":"It returns `.png`."},{"prompt":"What does `path.basename(\"/images/public/archive.tar.gz\")` return?","options":["`.gz`","`/images/public`","`archive.tar`","`archive.tar.gz`"],"answer":3,"explanation":"It returns `archive.tar.gz`."}]
---
# Node Drill: Parsing file paths #89

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
