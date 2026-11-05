---
slug: "node-path-parts-29"
title: "Node Drill: Parsing file paths #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/utils/images/archive.tar.gz\")` return?","options":["`.gz`","`archive.tar.gz`","`archive.tar`","`/utils/images`"],"answer":0,"explanation":"It returns `.gz`."},{"prompt":"What does `path.dirname(\"/routes/utils/archive.tar.gz\")` return?","options":["`.gz`","`/routes/utils`","`archive.tar.gz`","`archive.tar`"],"answer":1,"explanation":"It returns `/routes/utils`."},{"prompt":"What does `path.extname(\"/src/images/server.mjs\")` return?","options":["`server.mjs`","`.mjs`","`/src/images`","`server`"],"answer":1,"explanation":"It returns `.mjs`."},{"prompt":"What does `path.basename(\"/src/tests/db/archive.tar.gz\")` return?","options":["`.gz`","`archive.tar`","`archive.tar.gz`","`/src/tests/db`"],"answer":2,"explanation":"It returns `archive.tar.gz`."},{"prompt":"What does `path.extname(\"/src/db/config/server.mjs\")` return?","options":["`server.mjs`","`/src/db/config`","`.mjs`","`server`"],"answer":2,"explanation":"It returns `.mjs`."}]
---
# Node Drill: Parsing file paths #29

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
