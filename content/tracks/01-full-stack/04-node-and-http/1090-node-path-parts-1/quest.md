---
slug: "node-path-parts-1"
title: "Node Drill: Parsing file paths #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.basename(\"/utils/tests/index.js\")` return?","options":["`.js`","`index`","`index.js`","`/utils/tests`"],"answer":2,"explanation":"It returns `index.js`."},{"prompt":"What does `path.basename(\"/dist/schema.prisma\")` return?","options":["`/dist`","`schema.prisma`","`.prisma`","`schema`"],"answer":1,"explanation":"It returns `schema.prisma`."},{"prompt":"What does `path.extname(\"/dist/config/archive.tar.gz\")` return?","options":["`.gz`","`/dist/config`","`archive.tar.gz`","`archive.tar`"],"answer":0,"explanation":"It returns `.gz`."},{"prompt":"What does `path.dirname(\"/lib/archive.tar.gz\")` return?","options":["`/lib`","`.gz`","`archive.tar`","`archive.tar.gz`"],"answer":0,"explanation":"It returns `/lib`."},{"prompt":"What does `path.basename(\"/public/notes.md\")` return?","options":["`.md`","`notes.md`","`notes`","`/public`"],"answer":1,"explanation":"It returns `notes.md`."}]
---
# Node Drill: Parsing file paths #1

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
