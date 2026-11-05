---
slug: "node-path-parts-50"
title: "Node Drill: Parsing file paths #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/db/lib/index.js\")` return?","options":["`index`","`index.js`","`/db/lib`","`.js`"],"answer":3,"explanation":"It returns `.js`."},{"prompt":"What does `path.basename(\"/db/utils/api/app.ts\")` return?","options":["`/db/utils/api`","`app.ts`","`.ts`","`app`"],"answer":1,"explanation":"It returns `app.ts`."},{"prompt":"What does `path.dirname(\"/db/utils/config/archive.tar.gz\")` return?","options":["`/db/utils/config`","`archive.tar`","`.gz`","`archive.tar.gz`"],"answer":0,"explanation":"It returns `/db/utils/config`."},{"prompt":"What does `path.dirname(\"/utils/api/db/styles.css\")` return?","options":["`/utils/api/db`","`.css`","`styles.css`","`styles`"],"answer":0,"explanation":"It returns `/utils/api/db`."},{"prompt":"What does `path.dirname(\"/users/logo.png\")` return?","options":["`logo`","`/users`","`logo.png`","`.png`"],"answer":1,"explanation":"It returns `/users`."}]
---
# Node Drill: Parsing file paths #50

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
