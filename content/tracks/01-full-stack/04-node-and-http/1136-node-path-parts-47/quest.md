---
slug: "node-path-parts-47"
title: "Node Drill: Parsing file paths #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/images/data.json\")` return?","options":["`/images`","`data.json`","`data`","`.json`"],"answer":0,"explanation":"It returns `/images`."},{"prompt":"What does `path.dirname(\"/config/routes/dist/styles.css\")` return?","options":["`styles.css`","`.css`","`styles`","`/config/routes/dist`"],"answer":3,"explanation":"It returns `/config/routes/dist`."},{"prompt":"What does `path.dirname(\"/db/api/utils/.env\")` return?","options":["`/db/api/utils`","`.env`","`''`"],"answer":0,"explanation":"It returns `/db/api/utils`."},{"prompt":"What does `path.dirname(\"/public/.env\")` return?","options":["`.env`","`/public`","`''`"],"answer":1,"explanation":"It returns `/public`."},{"prompt":"What does `path.extname(\"/public/logo.png\")` return?","options":["`logo.png`","`.png`","`logo`","`/public`"],"answer":1,"explanation":"It returns `.png`."}]
---
# Node Drill: Parsing file paths #47

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
