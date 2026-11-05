---
slug: "node-path-parts-54"
title: "Node Drill: Parsing file paths #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/src/config/api/styles.css\")` return?","options":["`.css`","`styles`","`styles.css`","`/src/config/api`"],"answer":0,"explanation":"It returns `.css`."},{"prompt":"What does `path.basename(\"/config/styles.css\")` return?","options":["`/config`","`.css`","`styles`","`styles.css`"],"answer":3,"explanation":"It returns `styles.css`."},{"prompt":"What does `path.basename(\"/utils/users/notes.md\")` return?","options":["`.md`","`notes`","`notes.md`","`/utils/users`"],"answer":2,"explanation":"It returns `notes.md`."},{"prompt":"What does `path.basename(\"/lib/public/server.mjs\")` return?","options":["`server`","`.mjs`","`/lib/public`","`server.mjs`"],"answer":3,"explanation":"It returns `server.mjs`."},{"prompt":"What does `path.dirname(\"/public/src/api/.env\")` return?","options":["`''`","`.env`","`/public/src/api`"],"answer":2,"explanation":"It returns `/public/src/api`."}]
---
# Node Drill: Parsing file paths #54

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
