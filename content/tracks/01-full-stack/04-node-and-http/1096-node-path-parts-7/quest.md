---
slug: "node-path-parts-7"
title: "Node Drill: Parsing file paths #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.basename(\"/dist/config/.env\")` return?","options":["`.env`","`''`","`/dist/config`"],"answer":0,"explanation":"It returns `.env`."},{"prompt":"What does `path.basename(\"/config/utils/users/index.js\")` return?","options":["`index`","`/config/utils/users`","`index.js`","`.js`"],"answer":2,"explanation":"It returns `index.js`."},{"prompt":"What does `path.extname(\"/dist/logo.png\")` return?","options":["`.png`","`logo.png`","`/dist`","`logo`"],"answer":0,"explanation":"It returns `.png`."},{"prompt":"What does `path.extname(\"/users/archive.tar.gz\")` return?","options":["`/users`","`archive.tar.gz`","`archive.tar`","`.gz`"],"answer":3,"explanation":"It returns `.gz`."},{"prompt":"What does `path.basename(\"/tests/server.mjs\")` return?","options":["`/tests`","`.mjs`","`server`","`server.mjs`"],"answer":3,"explanation":"It returns `server.mjs`."}]
---
# Node Drill: Parsing file paths #7

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
