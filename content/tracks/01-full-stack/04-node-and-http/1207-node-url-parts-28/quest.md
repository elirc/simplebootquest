---
slug: "node-url-parts-28"
title: "Node Drill: Parsing URLs #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/employees/27?team=mid&page=3#top\");\n```\n\nWhat is `url.host`?","options":["`/v2/employees/27`","`?team=mid&page=3`","`shop.test`","`''`"],"answer":2,"explanation":"`url.host` is `shop.test`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/books/99?genre=classic&page=3#top\");\n```\n\nWhat is `url.port`?","options":["`''`","`?genre=classic&page=3`","`shop.test`","`/v2/books/99`"],"answer":0,"explanation":"`url.port` is `''`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/songs/77?mood=Nova&page=5#top\");\n```\n\nWhat is `url.pathname`?","options":["`/v2/songs/77`","`?mood=Nova&page=5`","`api.example.com:8080`","`api.example.com`"],"answer":0,"explanation":"`url.pathname` is `/v2/songs/77`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/repos/33?language=Go&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`localhost:3000`","`#top`","`/v1/repos/33`","`?language=Go&page=1`"],"answer":1,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v2/workouts/85?kind=cardio&page=2#top\");\n```\n\nWhat is `url.port`?","options":["`3000`","`/v2/workouts/85`","`?kind=cardio&page=2`","`localhost:3000`"],"answer":0,"explanation":"`url.port` is `3000`."}]
---
# Node Drill: Parsing URLs #28

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
