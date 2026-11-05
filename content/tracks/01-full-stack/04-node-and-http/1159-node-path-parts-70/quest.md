---
slug: "node-path-parts-70"
title: "Node Drill: Parsing file paths #70"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/dist/config/public/.env\")` return?","options":["`.env`","`/dist/config/public`","`''`"],"answer":1,"explanation":"It returns `/dist/config/public`."},{"prompt":"What does `path.dirname(\"/db/lib/users/data.json\")` return?","options":["`/db/lib/users`","`data.json`","`data`","`.json`"],"answer":0,"explanation":"It returns `/db/lib/users`."},{"prompt":"What does `path.basename(\"/api/data.json\")` return?","options":["`/api`","`.json`","`data.json`","`data`"],"answer":2,"explanation":"It returns `data.json`."},{"prompt":"What does `path.basename(\"/lib/public/schema.prisma\")` return?","options":["`schema`","`.prisma`","`schema.prisma`","`/lib/public`"],"answer":2,"explanation":"It returns `schema.prisma`."},{"prompt":"What does `path.dirname(\"/routes/index.js\")` return?","options":["`/routes`","`index.js`","`index`","`.js`"],"answer":0,"explanation":"It returns `/routes`."}]
---
# Node Drill: Parsing file paths #70

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
