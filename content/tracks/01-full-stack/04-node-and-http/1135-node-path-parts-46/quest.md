---
slug: "node-path-parts-46"
title: "Node Drill: Parsing file paths #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/tests/routes/data.json\")` return?","options":["`.json`","`data`","`/tests/routes`","`data.json`"],"answer":2,"explanation":"It returns `/tests/routes`."},{"prompt":"What does `path.dirname(\"/tests/app.ts\")` return?","options":["`app`","`app.ts`","`.ts`","`/tests`"],"answer":3,"explanation":"It returns `/tests`."},{"prompt":"What does `path.basename(\"/src/api/config/data.json\")` return?","options":["`data.json`","`data`","`/src/api/config`","`.json`"],"answer":0,"explanation":"It returns `data.json`."},{"prompt":"What does `path.basename(\"/db/notes.md\")` return?","options":["`.md`","`notes.md`","`notes`","`/db`"],"answer":1,"explanation":"It returns `notes.md`."},{"prompt":"What does `path.dirname(\"/images/notes.md\")` return?","options":["`notes.md`","`.md`","`/images`","`notes`"],"answer":2,"explanation":"It returns `/images`."}]
---
# Node Drill: Parsing file paths #46

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
