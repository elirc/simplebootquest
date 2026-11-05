---
slug: "node-path-parts-12"
title: "Node Drill: Parsing file paths #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/tests/.env\")` return?","options":["`/tests`","`''`","`.env`"],"answer":0,"explanation":"It returns `/tests`."},{"prompt":"What does `path.dirname(\"/db/utils/tests/logo.png\")` return?","options":["`logo`","`/db/utils/tests`","`logo.png`","`.png`"],"answer":1,"explanation":"It returns `/db/utils/tests`."},{"prompt":"What does `path.extname(\"/public/styles.css\")` return?","options":["`.css`","`/public`","`styles`","`styles.css`"],"answer":0,"explanation":"It returns `.css`."},{"prompt":"What does `path.basename(\"/dist/tests/styles.css\")` return?","options":["`styles`","`.css`","`/dist/tests`","`styles.css`"],"answer":3,"explanation":"It returns `styles.css`."},{"prompt":"What does `path.extname(\"/utils/.env\")` return?","options":["`.env`","`/utils`","`''`"],"answer":2,"explanation":"It returns `''`."}]
---
# Node Drill: Parsing file paths #12

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
