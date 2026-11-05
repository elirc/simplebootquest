---
slug: "node-path-parts-62"
title: "Node Drill: Parsing file paths #62"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.basename(\"/tests/archive.tar.gz\")` return?","options":["`archive.tar.gz`","`/tests`","`.gz`","`archive.tar`"],"answer":0,"explanation":"It returns `archive.tar.gz`."},{"prompt":"What does `path.basename(\"/src/archive.tar.gz\")` return?","options":["`archive.tar`","`/src`","`.gz`","`archive.tar.gz`"],"answer":3,"explanation":"It returns `archive.tar.gz`."},{"prompt":"What does `path.basename(\"/users/tests/index.js\")` return?","options":["`.js`","`/users/tests`","`index`","`index.js`"],"answer":3,"explanation":"It returns `index.js`."},{"prompt":"What does `path.extname(\"/routes/notes.md\")` return?","options":["`/routes`","`notes`","`.md`","`notes.md`"],"answer":2,"explanation":"It returns `.md`."},{"prompt":"What does `path.dirname(\"/lib/config/utils/data.json\")` return?","options":["`/lib/config/utils`","`data`","`data.json`","`.json`"],"answer":0,"explanation":"It returns `/lib/config/utils`."}]
---
# Node Drill: Parsing file paths #62

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
