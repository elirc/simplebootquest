---
slug: "node-path-parts-53"
title: "Node Drill: Parsing file paths #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.basename(\"/lib/tests/src/app.ts\")` return?","options":["`/lib/tests/src`","`.ts`","`app`","`app.ts`"],"answer":3,"explanation":"It returns `app.ts`."},{"prompt":"What does `path.dirname(\"/config/dist/images/notes.md\")` return?","options":["`.md`","`/config/dist/images`","`notes.md`","`notes`"],"answer":1,"explanation":"It returns `/config/dist/images`."},{"prompt":"What does `path.extname(\"/utils/notes.md\")` return?","options":["`.md`","`notes`","`notes.md`","`/utils`"],"answer":0,"explanation":"It returns `.md`."},{"prompt":"What does `path.basename(\"/public/dist/index.js\")` return?","options":["`index.js`","`.js`","`index`","`/public/dist`"],"answer":0,"explanation":"It returns `index.js`."},{"prompt":"What does `path.extname(\"/routes/lib/data.json\")` return?","options":["`data`","`.json`","`/routes/lib`","`data.json`"],"answer":1,"explanation":"It returns `.json`."}]
---
# Node Drill: Parsing file paths #53

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
