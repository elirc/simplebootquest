---
slug: "node-url-parts-20"
title: "Node Drill: Parsing URLs #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/songs/81?mood=Nova&page=5#top\");\n```\n\nWhat is `url.hash`?","options":["`#top`","`?mood=Nova&page=5`","`/v1/songs/81`","`shop.test:3000`"],"answer":0,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/events/30?format=online&page=1#top\");\n```\n\nWhat is `url.hostname`?","options":["`shop.test`","`shop.test:3000`","`?format=online&page=1`","`/v2/events/30`"],"answer":0,"explanation":"`url.hostname` is `shop.test`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/recipes/90?cuisine=italian&page=2#top\");\n```\n\nWhat is `url.pathname`?","options":["`?cuisine=italian&page=2`","`shop.test`","`shop.test:3000`","`/v1/recipes/90`"],"answer":3,"explanation":"`url.pathname` is `/v1/recipes/90`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v2/books/7?genre=sci-fi&page=1#top\");\n```\n\nWhat is `url.hostname`?","options":["`?genre=sci-fi&page=1`","`localhost:8080`","`/v2/books/7`","`localhost`"],"answer":3,"explanation":"`url.hostname` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/repos/57?language=TypeScript&page=4#top\");\n```\n\nWhat is `url.host`?","options":["`localhost:3000`","`?language=TypeScript&page=4`","`/v1/repos/57`","`localhost`"],"answer":0,"explanation":"`url.host` is `localhost:3000`."}]
---
# Node Drill: Parsing URLs #20

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
