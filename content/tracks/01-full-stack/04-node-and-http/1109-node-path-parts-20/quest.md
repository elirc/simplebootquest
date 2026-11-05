---
slug: "node-path-parts-20"
title: "Node Drill: Parsing file paths #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/public/dist/data.json\")` return?","options":["`/public/dist`","`data`","`data.json`","`.json`"],"answer":3,"explanation":"It returns `.json`."},{"prompt":"What does `path.extname(\"/dist/api/config/app.ts\")` return?","options":["`app.ts`","`app`","`/dist/api/config`","`.ts`"],"answer":3,"explanation":"It returns `.ts`."},{"prompt":"What does `path.basename(\"/dist/tests/notes.md\")` return?","options":["`.md`","`/dist/tests`","`notes`","`notes.md`"],"answer":3,"explanation":"It returns `notes.md`."},{"prompt":"What does `path.extname(\"/users/tests/routes/archive.tar.gz\")` return?","options":["`archive.tar`","`.gz`","`archive.tar.gz`","`/users/tests/routes`"],"answer":1,"explanation":"It returns `.gz`."},{"prompt":"What does `path.extname(\"/lib/server.mjs\")` return?","options":["`server`","`.mjs`","`server.mjs`","`/lib`"],"answer":1,"explanation":"It returns `.mjs`."}]
---
# Node Drill: Parsing file paths #20

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
