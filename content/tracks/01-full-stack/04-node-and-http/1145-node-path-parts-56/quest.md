---
slug: "node-path-parts-56"
title: "Node Drill: Parsing file paths #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/images/app.ts\")` return?","options":["`app`","`/images`","`.ts`","`app.ts`"],"answer":1,"explanation":"It returns `/images`."},{"prompt":"What does `path.extname(\"/tests/notes.md\")` return?","options":["`.md`","`notes.md`","`notes`","`/tests`"],"answer":0,"explanation":"It returns `.md`."},{"prompt":"What does `path.basename(\"/users/src/utils/data.json\")` return?","options":["`data`","`data.json`","`.json`","`/users/src/utils`"],"answer":1,"explanation":"It returns `data.json`."},{"prompt":"What does `path.extname(\"/images/styles.css\")` return?","options":["`styles.css`","`/images`","`styles`","`.css`"],"answer":3,"explanation":"It returns `.css`."},{"prompt":"What does `path.extname(\"/utils/index.js\")` return?","options":["`index`","`index.js`","`.js`","`/utils`"],"answer":2,"explanation":"It returns `.js`."}]
---
# Node Drill: Parsing file paths #56

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
