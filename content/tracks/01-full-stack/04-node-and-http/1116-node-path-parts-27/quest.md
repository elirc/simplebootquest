---
slug: "node-path-parts-27"
title: "Node Drill: Parsing file paths #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/public/schema.prisma\")` return?","options":["`.prisma`","`/public`","`schema.prisma`","`schema`"],"answer":0,"explanation":"It returns `.prisma`."},{"prompt":"What does `path.extname(\"/dist/public/lib/data.json\")` return?","options":["`.json`","`data.json`","`/dist/public/lib`","`data`"],"answer":0,"explanation":"It returns `.json`."},{"prompt":"What does `path.extname(\"/tests/routes/archive.tar.gz\")` return?","options":["`/tests/routes`","`archive.tar.gz`","`.gz`","`archive.tar`"],"answer":2,"explanation":"It returns `.gz`."},{"prompt":"What does `path.extname(\"/tests/utils/images/data.json\")` return?","options":["`.json`","`/tests/utils/images`","`data`","`data.json`"],"answer":0,"explanation":"It returns `.json`."},{"prompt":"What does `path.extname(\"/dist/data.json\")` return?","options":["`data.json`","`/dist`","`data`","`.json`"],"answer":3,"explanation":"It returns `.json`."}]
---
# Node Drill: Parsing file paths #27

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
