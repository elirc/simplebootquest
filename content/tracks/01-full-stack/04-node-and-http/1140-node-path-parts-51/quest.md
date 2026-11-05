---
slug: "node-path-parts-51"
title: "Node Drill: Parsing file paths #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/tests/styles.css\")` return?","options":["`styles`","`styles.css`","`/tests`","`.css`"],"answer":2,"explanation":"It returns `/tests`."},{"prompt":"What does `path.dirname(\"/public/lib/src/app.ts\")` return?","options":["`app`","`.ts`","`/public/lib/src`","`app.ts`"],"answer":2,"explanation":"It returns `/public/lib/src`."},{"prompt":"What does `path.basename(\"/src/routes/tests/app.ts\")` return?","options":["`app`","`app.ts`","`/src/routes/tests`","`.ts`"],"answer":1,"explanation":"It returns `app.ts`."},{"prompt":"What does `path.extname(\"/users/api/data.json\")` return?","options":["`/users/api`","`.json`","`data.json`","`data`"],"answer":1,"explanation":"It returns `.json`."},{"prompt":"What does `path.extname(\"/config/routes/styles.css\")` return?","options":["`styles`","`/config/routes`","`.css`","`styles.css`"],"answer":2,"explanation":"It returns `.css`."}]
---
# Node Drill: Parsing file paths #51

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
