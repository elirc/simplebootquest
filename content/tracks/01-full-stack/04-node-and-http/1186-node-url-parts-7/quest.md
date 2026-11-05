---
slug: "node-url-parts-7"
title: "Node Drill: Parsing URLs #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/tickets/33?priority=phone&page=5#top\");\n```\n\nWhat is `url.port`?","options":["`api.example.com`","`?priority=phone&page=5`","`''`","`/v1/tickets/33`"],"answer":2,"explanation":"`url.port` is `''`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v1/flights/68?airline=oneworld&page=3#top\");\n```\n\nWhat is `url.pathname`?","options":["`/v1/flights/68`","`?airline=oneworld&page=3`","`api.example.com`","`api.example.com:3000`"],"answer":0,"explanation":"`url.pathname` is `/v1/flights/68`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/repos/59?language=TypeScript&page=2#top\");\n```\n\nWhat is `url.hash`?","options":["`api.example.com:3000`","`/v2/repos/59`","`?language=TypeScript&page=2`","`#top`"],"answer":3,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/repos/57?language=TypeScript&page=4#top\");\n```\n\nWhat is `url.hash`?","options":["`api.example.com:3000`","`?language=TypeScript&page=4`","`/v2/repos/57`","`#top`"],"answer":3,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v1/products/78?category=tech&page=5#top\");\n```\n\nWhat is `url.origin`?","options":["`https://shop.test:8080`","`?category=tech&page=5`","`/v1/products/78`","`shop.test:8080`"],"answer":0,"explanation":"`url.origin` is `https://shop.test:8080`."}]
---
# Node Drill: Parsing URLs #7

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
