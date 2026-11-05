---
slug: "node-path-parts-71"
title: "Node Drill: Parsing file paths #71"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/public/notes.md\")` return?","options":["`/public`","`.md`","`notes`","`notes.md`"],"answer":1,"explanation":"It returns `.md`."},{"prompt":"What does `path.dirname(\"/dist/db/api/logo.png\")` return?","options":["`logo.png`","`/dist/db/api`","`.png`","`logo`"],"answer":1,"explanation":"It returns `/dist/db/api`."},{"prompt":"What does `path.basename(\"/routes/images/app.ts\")` return?","options":["`.ts`","`app`","`/routes/images`","`app.ts`"],"answer":3,"explanation":"It returns `app.ts`."},{"prompt":"What does `path.basename(\"/images/src/config/server.mjs\")` return?","options":["`server`","`server.mjs`","`/images/src/config`","`.mjs`"],"answer":1,"explanation":"It returns `server.mjs`."},{"prompt":"What does `path.dirname(\"/dist/utils/config/styles.css\")` return?","options":["`styles.css`","`.css`","`/dist/utils/config`","`styles`"],"answer":2,"explanation":"It returns `/dist/utils/config`."}]
---
# Node Drill: Parsing file paths #71

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
