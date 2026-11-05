---
slug: "node-path-parts-57"
title: "Node Drill: Parsing file paths #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/db/index.js\")` return?","options":["`/db`","`.js`","`index.js`","`index`"],"answer":0,"explanation":"It returns `/db`."},{"prompt":"What does `path.extname(\"/users/dist/app.ts\")` return?","options":["`/users/dist`","`app`","`app.ts`","`.ts`"],"answer":3,"explanation":"It returns `.ts`."},{"prompt":"What does `path.dirname(\"/utils/tests/styles.css\")` return?","options":["`/utils/tests`","`styles`","`styles.css`","`.css`"],"answer":0,"explanation":"It returns `/utils/tests`."},{"prompt":"What does `path.basename(\"/routes/app.ts\")` return?","options":["`app`","`.ts`","`app.ts`","`/routes`"],"answer":2,"explanation":"It returns `app.ts`."},{"prompt":"What does `path.extname(\"/users/lib/config/logo.png\")` return?","options":["`/users/lib/config`","`logo`","`logo.png`","`.png`"],"answer":3,"explanation":"It returns `.png`."}]
---
# Node Drill: Parsing file paths #57

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
