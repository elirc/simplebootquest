---
slug: "node-path-parts-9"
title: "Node Drill: Parsing file paths #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.basename(\"/routes/dist/public/.env\")` return?","options":["`.env`","`''`","`/routes/dist/public`"],"answer":0,"explanation":"It returns `.env`."},{"prompt":"What does `path.extname(\"/routes/tests/.env\")` return?","options":["`.env`","`/routes/tests`","`''`"],"answer":2,"explanation":"It returns `''`."},{"prompt":"What does `path.dirname(\"/db/utils/index.js\")` return?","options":["`.js`","`/db/utils`","`index.js`","`index`"],"answer":1,"explanation":"It returns `/db/utils`."},{"prompt":"What does `path.extname(\"/src/config/schema.prisma\")` return?","options":["`schema`","`schema.prisma`","`.prisma`","`/src/config`"],"answer":2,"explanation":"It returns `.prisma`."},{"prompt":"What does `path.dirname(\"/config/notes.md\")` return?","options":["`/config`","`.md`","`notes`","`notes.md`"],"answer":0,"explanation":"It returns `/config`."}]
---
# Node Drill: Parsing file paths #9

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
