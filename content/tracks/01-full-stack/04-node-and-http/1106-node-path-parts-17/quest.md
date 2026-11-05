---
slug: "node-path-parts-17"
title: "Node Drill: Parsing file paths #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/routes/config/api/styles.css\")` return?","options":["`styles.css`","`.css`","`styles`","`/routes/config/api`"],"answer":1,"explanation":"It returns `.css`."},{"prompt":"What does `path.basename(\"/config/data.json\")` return?","options":["`.json`","`data`","`/config`","`data.json`"],"answer":3,"explanation":"It returns `data.json`."},{"prompt":"What does `path.dirname(\"/src/lib/public/styles.css\")` return?","options":["`/src/lib/public`","`styles.css`","`.css`","`styles`"],"answer":0,"explanation":"It returns `/src/lib/public`."},{"prompt":"What does `path.basename(\"/public/images/notes.md\")` return?","options":["`.md`","`/public/images`","`notes.md`","`notes`"],"answer":2,"explanation":"It returns `notes.md`."},{"prompt":"What does `path.extname(\"/api/styles.css\")` return?","options":["`/api`","`styles.css`","`.css`","`styles`"],"answer":2,"explanation":"It returns `.css`."}]
---
# Node Drill: Parsing file paths #17

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
