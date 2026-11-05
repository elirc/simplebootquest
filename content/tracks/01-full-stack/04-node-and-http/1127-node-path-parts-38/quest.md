---
slug: "node-path-parts-38"
title: "Node Drill: Parsing file paths #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/config/public/db/notes.md\")` return?","options":["`notes`","`notes.md`","`.md`","`/config/public/db`"],"answer":2,"explanation":"It returns `.md`."},{"prompt":"What does `path.basename(\"/routes/src/public/data.json\")` return?","options":["`data.json`","`.json`","`/routes/src/public`","`data`"],"answer":0,"explanation":"It returns `data.json`."},{"prompt":"What does `path.basename(\"/api/app.ts\")` return?","options":["`app.ts`","`app`","`.ts`","`/api`"],"answer":0,"explanation":"It returns `app.ts`."},{"prompt":"What does `path.dirname(\"/images/db/app.ts\")` return?","options":["`app`","`app.ts`","`/images/db`","`.ts`"],"answer":2,"explanation":"It returns `/images/db`."},{"prompt":"What does `path.basename(\"/utils/src/notes.md\")` return?","options":["`.md`","`notes`","`notes.md`","`/utils/src`"],"answer":2,"explanation":"It returns `notes.md`."}]
---
# Node Drill: Parsing file paths #38

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
