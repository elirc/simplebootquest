---
slug: "node-path-parts-33"
title: "Node Drill: Parsing file paths #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/api/config/dist/styles.css\")` return?","options":["`styles.css`","`styles`","`/api/config/dist`","`.css`"],"answer":2,"explanation":"It returns `/api/config/dist`."},{"prompt":"What does `path.basename(\"/config/public/logo.png\")` return?","options":["`.png`","`logo.png`","`logo`","`/config/public`"],"answer":1,"explanation":"It returns `logo.png`."},{"prompt":"What does `path.basename(\"/db/data.json\")` return?","options":["`data.json`","`data`","`.json`","`/db`"],"answer":0,"explanation":"It returns `data.json`."},{"prompt":"What does `path.basename(\"/images/config/schema.prisma\")` return?","options":["`/images/config`","`schema`","`schema.prisma`","`.prisma`"],"answer":2,"explanation":"It returns `schema.prisma`."},{"prompt":"What does `path.extname(\"/lib/public/schema.prisma\")` return?","options":["`.prisma`","`/lib/public`","`schema`","`schema.prisma`"],"answer":0,"explanation":"It returns `.prisma`."}]
---
# Node Drill: Parsing file paths #33

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
