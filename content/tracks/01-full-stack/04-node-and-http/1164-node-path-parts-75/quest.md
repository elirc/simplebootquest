---
slug: "node-path-parts-75"
title: "Node Drill: Parsing file paths #75"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/api/db/data.json\")` return?","options":["`data.json`","`.json`","`/api/db`","`data`"],"answer":1,"explanation":"It returns `.json`."},{"prompt":"What does `path.basename(\"/src/config/utils/app.ts\")` return?","options":["`.ts`","`/src/config/utils`","`app.ts`","`app`"],"answer":2,"explanation":"It returns `app.ts`."},{"prompt":"What does `path.basename(\"/tests/.env\")` return?","options":["`.env`","`/tests`","`''`"],"answer":0,"explanation":"It returns `.env`."},{"prompt":"What does `path.dirname(\"/lib/tests/users/logo.png\")` return?","options":["`.png`","`/lib/tests/users`","`logo`","`logo.png`"],"answer":1,"explanation":"It returns `/lib/tests/users`."},{"prompt":"What does `path.dirname(\"/db/images/utils/index.js\")` return?","options":["`index`","`index.js`","`.js`","`/db/images/utils`"],"answer":3,"explanation":"It returns `/db/images/utils`."}]
---
# Node Drill: Parsing file paths #75

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
