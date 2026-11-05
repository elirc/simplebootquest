---
slug: "node-path-parts-34"
title: "Node Drill: Parsing file paths #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/utils/config/server.mjs\")` return?","options":["`.mjs`","`/utils/config`","`server`","`server.mjs`"],"answer":1,"explanation":"It returns `/utils/config`."},{"prompt":"What does `path.extname(\"/dist/users/utils/app.ts\")` return?","options":["`.ts`","`app`","`app.ts`","`/dist/users/utils`"],"answer":0,"explanation":"It returns `.ts`."},{"prompt":"What does `path.basename(\"/routes/src/public/notes.md\")` return?","options":["`notes`","`/routes/src/public`","`notes.md`","`.md`"],"answer":2,"explanation":"It returns `notes.md`."},{"prompt":"What does `path.dirname(\"/lib/styles.css\")` return?","options":["`styles`","`styles.css`","`/lib`","`.css`"],"answer":2,"explanation":"It returns `/lib`."},{"prompt":"What does `path.extname(\"/tests/config/routes/data.json\")` return?","options":["`.json`","`/tests/config/routes`","`data`","`data.json`"],"answer":0,"explanation":"It returns `.json`."}]
---
# Node Drill: Parsing file paths #34

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
