---
slug: "node-url-parts-79"
title: "Node Drill: Parsing URLs #79"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v1/courses/63?level=advanced&page=5#top\");\n```\n\nWhat is `url.hostname`?","options":["`api.example.com`","`api.example.com:8080`","`/v1/courses/63`","`?level=advanced&page=5`"],"answer":0,"explanation":"`url.hostname` is `api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v1/books/26?genre=tech&page=4#top\");\n```\n\nWhat is `url.host`?","options":["`/v1/books/26`","`api.example.com`","`?genre=tech&page=4`","`api.example.com:3000`"],"answer":3,"explanation":"`url.host` is `api.example.com:3000`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/songs/36?mood=calm&page=5#top\");\n```\n\nWhat is `url.hash`?","options":["`/v2/songs/36`","`?mood=calm&page=5`","`shop.test`","`#top`"],"answer":3,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/plants/79?light=medium&page=3#top\");\n```\n\nWhat is `url.port`?","options":["`api.example.com:3000`","`?light=medium&page=3`","`3000`","`/v2/plants/79`"],"answer":2,"explanation":"`url.port` is `3000`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v2/recipes/60?cuisine=easy&page=5#top\");\n```\n\nWhat is `url.port`?","options":["`localhost:3000`","`/v2/recipes/60`","`3000`","`?cuisine=easy&page=5`"],"answer":2,"explanation":"`url.port` is `3000`."}]
---
# Node Drill: Parsing URLs #79

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
