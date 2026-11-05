---
slug: "node-path-parts-87"
title: "Node Drill: Parsing file paths #87"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/images/tests/app.ts\")` return?","options":["`.ts`","`app`","`/images/tests`","`app.ts`"],"answer":0,"explanation":"It returns `.ts`."},{"prompt":"What does `path.basename(\"/utils/logo.png\")` return?","options":["`logo.png`","`logo`","`.png`","`/utils`"],"answer":0,"explanation":"It returns `logo.png`."},{"prompt":"What does `path.basename(\"/public/images/app.ts\")` return?","options":["`app.ts`","`/public/images`","`.ts`","`app`"],"answer":0,"explanation":"It returns `app.ts`."},{"prompt":"What does `path.extname(\"/api/lib/archive.tar.gz\")` return?","options":["`/api/lib`","`archive.tar.gz`","`.gz`","`archive.tar`"],"answer":2,"explanation":"It returns `.gz`."},{"prompt":"What does `path.dirname(\"/dist/config/images/styles.css\")` return?","options":["`styles`","`/dist/config/images`","`styles.css`","`.css`"],"answer":1,"explanation":"It returns `/dist/config/images`."}]
---
# Node Drill: Parsing file paths #87

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
