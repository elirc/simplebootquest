---
slug: "node-path-parts-83"
title: "Node Drill: Parsing file paths #83"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.basename(\"/tests/db/notes.md\")` return?","options":["`/tests/db`","`notes`","`notes.md`","`.md`"],"answer":2,"explanation":"It returns `notes.md`."},{"prompt":"What does `path.extname(\"/images/config/archive.tar.gz\")` return?","options":["`archive.tar.gz`","`/images/config`","`.gz`","`archive.tar`"],"answer":2,"explanation":"It returns `.gz`."},{"prompt":"What does `path.extname(\"/public/users/src/archive.tar.gz\")` return?","options":["`/public/users/src`","`archive.tar.gz`","`.gz`","`archive.tar`"],"answer":2,"explanation":"It returns `.gz`."},{"prompt":"What does `path.extname(\"/src/routes/styles.css\")` return?","options":["`styles.css`","`/src/routes`","`.css`","`styles`"],"answer":2,"explanation":"It returns `.css`."},{"prompt":"What does `path.extname(\"/config/archive.tar.gz\")` return?","options":["`archive.tar`","`/config`","`.gz`","`archive.tar.gz`"],"answer":2,"explanation":"It returns `.gz`."}]
---
# Node Drill: Parsing file paths #83

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
