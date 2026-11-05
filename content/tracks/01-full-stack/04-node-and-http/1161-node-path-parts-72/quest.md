---
slug: "node-path-parts-72"
title: "Node Drill: Parsing file paths #72"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/dist/users/images/logo.png\")` return?","options":["`/dist/users/images`","`logo`","`logo.png`","`.png`"],"answer":0,"explanation":"It returns `/dist/users/images`."},{"prompt":"What does `path.dirname(\"/dist/db/tests/server.mjs\")` return?","options":["`/dist/db/tests`","`.mjs`","`server.mjs`","`server`"],"answer":0,"explanation":"It returns `/dist/db/tests`."},{"prompt":"What does `path.basename(\"/db/api/users/styles.css\")` return?","options":["`.css`","`/db/api/users`","`styles.css`","`styles`"],"answer":2,"explanation":"It returns `styles.css`."},{"prompt":"What does `path.dirname(\"/public/images/index.js\")` return?","options":["`index`","`index.js`","`/public/images`","`.js`"],"answer":2,"explanation":"It returns `/public/images`."},{"prompt":"What does `path.dirname(\"/tests/config/public/index.js\")` return?","options":["`index`","`/tests/config/public`","`.js`","`index.js`"],"answer":1,"explanation":"It returns `/tests/config/public`."}]
---
# Node Drill: Parsing file paths #72

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
