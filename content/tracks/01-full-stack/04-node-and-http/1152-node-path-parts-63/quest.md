---
slug: "node-path-parts-63"
title: "Node Drill: Parsing file paths #63"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/src/notes.md\")` return?","options":["`.md`","`/src`","`notes.md`","`notes`"],"answer":0,"explanation":"It returns `.md`."},{"prompt":"What does `path.dirname(\"/api/styles.css\")` return?","options":["`.css`","`styles`","`/api`","`styles.css`"],"answer":2,"explanation":"It returns `/api`."},{"prompt":"What does `path.basename(\"/users/.env\")` return?","options":["`''`","`/users`","`.env`"],"answer":2,"explanation":"It returns `.env`."},{"prompt":"What does `path.extname(\"/public/src/users/data.json\")` return?","options":["`data.json`","`.json`","`/public/src/users`","`data`"],"answer":1,"explanation":"It returns `.json`."},{"prompt":"What does `path.basename(\"/public/config/src/logo.png\")` return?","options":["`.png`","`/public/config/src`","`logo.png`","`logo`"],"answer":2,"explanation":"It returns `logo.png`."}]
---
# Node Drill: Parsing file paths #63

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
