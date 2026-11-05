---
slug: "node-path-parts-48"
title: "Node Drill: Parsing file paths #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/src/public/utils/server.mjs\")` return?","options":["`/src/public/utils`","`server.mjs`","`.mjs`","`server`"],"answer":0,"explanation":"It returns `/src/public/utils`."},{"prompt":"What does `path.basename(\"/users/notes.md\")` return?","options":["`/users`","`notes.md`","`notes`","`.md`"],"answer":1,"explanation":"It returns `notes.md`."},{"prompt":"What does `path.extname(\"/public/users/.env\")` return?","options":["`.env`","`/public/users`","`''`"],"answer":2,"explanation":"It returns `''`."},{"prompt":"What does `path.basename(\"/public/config/utils/notes.md\")` return?","options":["`notes.md`","`notes`","`/public/config/utils`","`.md`"],"answer":0,"explanation":"It returns `notes.md`."},{"prompt":"What does `path.dirname(\"/api/images/schema.prisma\")` return?","options":["`schema`","`schema.prisma`","`/api/images`","`.prisma`"],"answer":2,"explanation":"It returns `/api/images`."}]
---
# Node Drill: Parsing file paths #48

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
