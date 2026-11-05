---
slug: "node-path-parts-64"
title: "Node Drill: Parsing file paths #64"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.basename(\"/dist/utils/public/server.mjs\")` return?","options":["`/dist/utils/public`","`server`","`.mjs`","`server.mjs`"],"answer":3,"explanation":"It returns `server.mjs`."},{"prompt":"What does `path.extname(\"/users/lib/index.js\")` return?","options":["`index`","`.js`","`/users/lib`","`index.js`"],"answer":1,"explanation":"It returns `.js`."},{"prompt":"What does `path.dirname(\"/images/users/public/logo.png\")` return?","options":["`logo`","`logo.png`","`/images/users/public`","`.png`"],"answer":2,"explanation":"It returns `/images/users/public`."},{"prompt":"What does `path.extname(\"/users/styles.css\")` return?","options":["`styles.css`","`/users`","`styles`","`.css`"],"answer":3,"explanation":"It returns `.css`."},{"prompt":"What does `path.basename(\"/utils/index.js\")` return?","options":["`/utils`","`index`","`.js`","`index.js`"],"answer":3,"explanation":"It returns `index.js`."}]
---
# Node Drill: Parsing file paths #64

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
