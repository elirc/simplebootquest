---
slug: "node-path-parts-16"
title: "Node Drill: Parsing file paths #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/routes/users/notes.md\")` return?","options":["`notes`","`notes.md`","`.md`","`/routes/users`"],"answer":3,"explanation":"It returns `/routes/users`."},{"prompt":"What does `path.extname(\"/utils/logo.png\")` return?","options":["`.png`","`logo`","`logo.png`","`/utils`"],"answer":0,"explanation":"It returns `.png`."},{"prompt":"What does `path.dirname(\"/routes/notes.md\")` return?","options":["`notes`","`notes.md`","`/routes`","`.md`"],"answer":2,"explanation":"It returns `/routes`."},{"prompt":"What does `path.basename(\"/users/lib/config/index.js\")` return?","options":["`index`","`.js`","`/users/lib/config`","`index.js`"],"answer":3,"explanation":"It returns `index.js`."},{"prompt":"What does `path.dirname(\"/lib/utils/data.json\")` return?","options":["`data.json`","`data`","`.json`","`/lib/utils`"],"answer":3,"explanation":"It returns `/lib/utils`."}]
---
# Node Drill: Parsing file paths #16

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
