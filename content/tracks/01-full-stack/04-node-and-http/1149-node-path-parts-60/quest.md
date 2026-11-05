---
slug: "node-path-parts-60"
title: "Node Drill: Parsing file paths #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/public/src/app.ts\")` return?","options":["`.ts`","`/public/src`","`app.ts`","`app`"],"answer":0,"explanation":"It returns `.ts`."},{"prompt":"What does `path.extname(\"/utils/config/logo.png\")` return?","options":["`.png`","`logo.png`","`logo`","`/utils/config`"],"answer":0,"explanation":"It returns `.png`."},{"prompt":"What does `path.dirname(\"/utils/routes/archive.tar.gz\")` return?","options":["`archive.tar`","`.gz`","`/utils/routes`","`archive.tar.gz`"],"answer":2,"explanation":"It returns `/utils/routes`."},{"prompt":"What does `path.basename(\"/src/public/data.json\")` return?","options":["`data`","`data.json`","`.json`","`/src/public`"],"answer":1,"explanation":"It returns `data.json`."},{"prompt":"What does `path.basename(\"/src/tests/notes.md\")` return?","options":["`notes.md`","`notes`","`.md`","`/src/tests`"],"answer":0,"explanation":"It returns `notes.md`."}]
---
# Node Drill: Parsing file paths #60

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
