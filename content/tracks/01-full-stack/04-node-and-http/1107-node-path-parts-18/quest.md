---
slug: "node-path-parts-18"
title: "Node Drill: Parsing file paths #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/api/db/logo.png\")` return?","options":["`logo`","`logo.png`","`.png`","`/api/db`"],"answer":2,"explanation":"It returns `.png`."},{"prompt":"What does `path.basename(\"/lib/config/schema.prisma\")` return?","options":["`.prisma`","`schema.prisma`","`/lib/config`","`schema`"],"answer":1,"explanation":"It returns `schema.prisma`."},{"prompt":"What does `path.dirname(\"/config/data.json\")` return?","options":["`data`","`data.json`","`.json`","`/config`"],"answer":3,"explanation":"It returns `/config`."},{"prompt":"What does `path.dirname(\"/utils/data.json\")` return?","options":["`/utils`","`data.json`","`.json`","`data`"],"answer":0,"explanation":"It returns `/utils`."},{"prompt":"What does `path.extname(\"/users/utils/tests/schema.prisma\")` return?","options":["`schema`","`.prisma`","`/users/utils/tests`","`schema.prisma`"],"answer":1,"explanation":"It returns `.prisma`."}]
---
# Node Drill: Parsing file paths #18

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
