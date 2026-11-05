---
slug: "node-path-parts-82"
title: "Node Drill: Parsing file paths #82"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/db/images/public/styles.css\")` return?","options":["`.css`","`/db/images/public`","`styles`","`styles.css`"],"answer":0,"explanation":"It returns `.css`."},{"prompt":"What does `path.basename(\"/lib/public/db/server.mjs\")` return?","options":["`server`","`.mjs`","`/lib/public/db`","`server.mjs`"],"answer":3,"explanation":"It returns `server.mjs`."},{"prompt":"What does `path.basename(\"/src/.env\")` return?","options":["`/src`","`''`","`.env`"],"answer":2,"explanation":"It returns `.env`."},{"prompt":"What does `path.extname(\"/dist/config/users/archive.tar.gz\")` return?","options":["`.gz`","`archive.tar`","`/dist/config/users`","`archive.tar.gz`"],"answer":0,"explanation":"It returns `.gz`."},{"prompt":"What does `path.dirname(\"/users/lib/public/notes.md\")` return?","options":["`notes`","`/users/lib/public`","`notes.md`","`.md`"],"answer":1,"explanation":"It returns `/users/lib/public`."}]
---
# Node Drill: Parsing file paths #82

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
