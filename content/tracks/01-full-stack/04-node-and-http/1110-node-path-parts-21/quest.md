---
slug: "node-path-parts-21"
title: "Node Drill: Parsing file paths #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/users/data.json\")` return?","options":["`data.json`","`.json`","`data`","`/users`"],"answer":3,"explanation":"It returns `/users`."},{"prompt":"What does `path.extname(\"/config/api/db/server.mjs\")` return?","options":["`server`","`/config/api/db`","`server.mjs`","`.mjs`"],"answer":3,"explanation":"It returns `.mjs`."},{"prompt":"What does `path.basename(\"/src/api/utils/schema.prisma\")` return?","options":["`.prisma`","`schema`","`schema.prisma`","`/src/api/utils`"],"answer":2,"explanation":"It returns `schema.prisma`."},{"prompt":"What does `path.extname(\"/utils/config/api/styles.css\")` return?","options":["`styles`","`/utils/config/api`","`.css`","`styles.css`"],"answer":2,"explanation":"It returns `.css`."},{"prompt":"What does `path.extname(\"/tests/server.mjs\")` return?","options":["`server`","`server.mjs`","`.mjs`","`/tests`"],"answer":2,"explanation":"It returns `.mjs`."}]
---
# Node Drill: Parsing file paths #21

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
