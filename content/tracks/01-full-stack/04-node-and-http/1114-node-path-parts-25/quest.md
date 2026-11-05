---
slug: "node-path-parts-25"
title: "Node Drill: Parsing file paths #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/images/lib/app.ts\")` return?","options":["`.ts`","`/images/lib`","`app.ts`","`app`"],"answer":1,"explanation":"It returns `/images/lib`."},{"prompt":"What does `path.dirname(\"/routes/data.json\")` return?","options":["`data`","`.json`","`/routes`","`data.json`"],"answer":2,"explanation":"It returns `/routes`."},{"prompt":"What does `path.dirname(\"/users/images/.env\")` return?","options":["`''`","`/users/images`","`.env`"],"answer":1,"explanation":"It returns `/users/images`."},{"prompt":"What does `path.dirname(\"/dist/archive.tar.gz\")` return?","options":["`.gz`","`archive.tar`","`archive.tar.gz`","`/dist`"],"answer":3,"explanation":"It returns `/dist`."},{"prompt":"What does `path.extname(\"/users/images/tests/notes.md\")` return?","options":["`.md`","`notes.md`","`/users/images/tests`","`notes`"],"answer":0,"explanation":"It returns `.md`."}]
---
# Node Drill: Parsing file paths #25

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
