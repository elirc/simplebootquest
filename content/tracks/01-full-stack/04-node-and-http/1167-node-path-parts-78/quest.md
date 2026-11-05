---
slug: "node-path-parts-78"
title: "Node Drill: Parsing file paths #78"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.basename(\"/utils/public/data.json\")` return?","options":["`/utils/public`","`data`","`.json`","`data.json`"],"answer":3,"explanation":"It returns `data.json`."},{"prompt":"What does `path.dirname(\"/lib/schema.prisma\")` return?","options":["`schema.prisma`","`/lib`","`schema`","`.prisma`"],"answer":1,"explanation":"It returns `/lib`."},{"prompt":"What does `path.basename(\"/config/images/public/notes.md\")` return?","options":["`notes.md`","`.md`","`/config/images/public`","`notes`"],"answer":0,"explanation":"It returns `notes.md`."},{"prompt":"What does `path.extname(\"/src/tests/index.js\")` return?","options":["`.js`","`index`","`/src/tests`","`index.js`"],"answer":0,"explanation":"It returns `.js`."},{"prompt":"What does `path.extname(\"/tests/config/routes/styles.css\")` return?","options":["`/tests/config/routes`","`styles.css`","`styles`","`.css`"],"answer":3,"explanation":"It returns `.css`."}]
---
# Node Drill: Parsing file paths #78

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
