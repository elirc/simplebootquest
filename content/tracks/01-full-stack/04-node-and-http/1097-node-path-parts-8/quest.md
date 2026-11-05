---
slug: "node-path-parts-8"
title: "Node Drill: Parsing file paths #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/src/utils/app.ts\")` return?","options":["`.ts`","`app.ts`","`app`","`/src/utils`"],"answer":3,"explanation":"It returns `/src/utils`."},{"prompt":"What does `path.basename(\"/routes/public/schema.prisma\")` return?","options":["`.prisma`","`schema.prisma`","`schema`","`/routes/public`"],"answer":1,"explanation":"It returns `schema.prisma`."},{"prompt":"What does `path.extname(\"/routes/src/data.json\")` return?","options":["`.json`","`/routes/src`","`data`","`data.json`"],"answer":0,"explanation":"It returns `.json`."},{"prompt":"What does `path.extname(\"/config/lib/.env\")` return?","options":["`''`","`/config/lib`","`.env`"],"answer":0,"explanation":"It returns `''`."},{"prompt":"What does `path.basename(\"/api/index.js\")` return?","options":["`index`","`index.js`","`/api`","`.js`"],"answer":1,"explanation":"It returns `index.js`."}]
---
# Node Drill: Parsing file paths #8

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
