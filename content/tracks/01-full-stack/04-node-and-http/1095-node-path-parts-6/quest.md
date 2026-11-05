---
slug: "node-path-parts-6"
title: "Node Drill: Parsing file paths #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.basename(\"/utils/lib/notes.md\")` return?","options":["`notes.md`","`notes`","`/utils/lib`","`.md`"],"answer":0,"explanation":"It returns `notes.md`."},{"prompt":"What does `path.basename(\"/routes/dist/db/schema.prisma\")` return?","options":["`schema.prisma`","`/routes/dist/db`","`schema`","`.prisma`"],"answer":0,"explanation":"It returns `schema.prisma`."},{"prompt":"What does `path.basename(\"/dist/images/lib/.env\")` return?","options":["`.env`","`/dist/images/lib`","`''`"],"answer":0,"explanation":"It returns `.env`."},{"prompt":"What does `path.dirname(\"/users/styles.css\")` return?","options":["`styles`","`.css`","`styles.css`","`/users`"],"answer":3,"explanation":"It returns `/users`."},{"prompt":"What does `path.extname(\"/config/api/images/data.json\")` return?","options":["`/config/api/images`","`data.json`","`data`","`.json`"],"answer":3,"explanation":"It returns `.json`."}]
---
# Node Drill: Parsing file paths #6

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
