---
slug: "node-path-parts-41"
title: "Node Drill: Parsing file paths #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.basename(\"/api/users/images/styles.css\")` return?","options":["`styles`","`.css`","`styles.css`","`/api/users/images`"],"answer":2,"explanation":"It returns `styles.css`."},{"prompt":"What does `path.extname(\"/src/archive.tar.gz\")` return?","options":["`/src`","`.gz`","`archive.tar.gz`","`archive.tar`"],"answer":1,"explanation":"It returns `.gz`."},{"prompt":"What does `path.basename(\"/routes/images/dist/styles.css\")` return?","options":["`styles.css`","`.css`","`/routes/images/dist`","`styles`"],"answer":0,"explanation":"It returns `styles.css`."},{"prompt":"What does `path.dirname(\"/api/images/users/app.ts\")` return?","options":["`.ts`","`/api/images/users`","`app.ts`","`app`"],"answer":1,"explanation":"It returns `/api/images/users`."},{"prompt":"What does `path.basename(\"/public/routes/styles.css\")` return?","options":["`/public/routes`","`styles.css`","`.css`","`styles`"],"answer":1,"explanation":"It returns `styles.css`."}]
---
# Node Drill: Parsing file paths #41

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
