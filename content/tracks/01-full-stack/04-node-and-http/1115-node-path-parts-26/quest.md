---
slug: "node-path-parts-26"
title: "Node Drill: Parsing file paths #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.basename(\"/lib/utils/archive.tar.gz\")` return?","options":["`/lib/utils`","`archive.tar`","`archive.tar.gz`","`.gz`"],"answer":2,"explanation":"It returns `archive.tar.gz`."},{"prompt":"What does `path.dirname(\"/src/logo.png\")` return?","options":["`/src`","`logo.png`","`logo`","`.png`"],"answer":0,"explanation":"It returns `/src`."},{"prompt":"What does `path.extname(\"/images/dist/users/archive.tar.gz\")` return?","options":["`.gz`","`archive.tar`","`archive.tar.gz`","`/images/dist/users`"],"answer":0,"explanation":"It returns `.gz`."},{"prompt":"What does `path.dirname(\"/routes/utils/data.json\")` return?","options":["`.json`","`data.json`","`/routes/utils`","`data`"],"answer":2,"explanation":"It returns `/routes/utils`."},{"prompt":"What does `path.extname(\"/routes/images/db/logo.png\")` return?","options":["`.png`","`/routes/images/db`","`logo.png`","`logo`"],"answer":0,"explanation":"It returns `.png`."}]
---
# Node Drill: Parsing file paths #26

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
