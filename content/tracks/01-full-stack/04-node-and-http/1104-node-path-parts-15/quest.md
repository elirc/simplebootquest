---
slug: "node-path-parts-15"
title: "Node Drill: Parsing file paths #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/src/lib/data.json\")` return?","options":["`.json`","`data.json`","`/src/lib`","`data`"],"answer":2,"explanation":"It returns `/src/lib`."},{"prompt":"What does `path.extname(\"/src/utils/routes/logo.png\")` return?","options":["`logo`","`/src/utils/routes`","`.png`","`logo.png`"],"answer":2,"explanation":"It returns `.png`."},{"prompt":"What does `path.basename(\"/images/src/dist/archive.tar.gz\")` return?","options":["`archive.tar`","`/images/src/dist`","`archive.tar.gz`","`.gz`"],"answer":2,"explanation":"It returns `archive.tar.gz`."},{"prompt":"What does `path.basename(\"/routes/data.json\")` return?","options":["`.json`","`data`","`/routes`","`data.json`"],"answer":3,"explanation":"It returns `data.json`."},{"prompt":"What does `path.basename(\"/public/tests/styles.css\")` return?","options":["`styles`","`.css`","`styles.css`","`/public/tests`"],"answer":2,"explanation":"It returns `styles.css`."}]
---
# Node Drill: Parsing file paths #15

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
