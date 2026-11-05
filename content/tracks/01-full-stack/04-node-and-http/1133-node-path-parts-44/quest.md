---
slug: "node-path-parts-44"
title: "Node Drill: Parsing file paths #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/tests/dist/api/archive.tar.gz\")` return?","options":["`archive.tar`","`/tests/dist/api`","`.gz`","`archive.tar.gz`"],"answer":2,"explanation":"It returns `.gz`."},{"prompt":"What does `path.dirname(\"/images/public/dist/styles.css\")` return?","options":["`styles.css`","`/images/public/dist`","`styles`","`.css`"],"answer":1,"explanation":"It returns `/images/public/dist`."},{"prompt":"What does `path.extname(\"/public/images/src/archive.tar.gz\")` return?","options":["`/public/images/src`","`archive.tar`","`.gz`","`archive.tar.gz`"],"answer":2,"explanation":"It returns `.gz`."},{"prompt":"What does `path.extname(\"/users/api/logo.png\")` return?","options":["`.png`","`/users/api`","`logo`","`logo.png`"],"answer":0,"explanation":"It returns `.png`."},{"prompt":"What does `path.basename(\"/api/images/data.json\")` return?","options":["`data.json`","`data`","`/api/images`","`.json`"],"answer":0,"explanation":"It returns `data.json`."}]
---
# Node Drill: Parsing file paths #44

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
