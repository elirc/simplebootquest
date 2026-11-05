---
slug: "node-url-parts-4"
title: "Node Drill: Parsing URLs #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/repos/29?language=TypeScript&page=5#top\");\n```\n\nWhat is `url.hostname`?","options":["`?language=TypeScript&page=5`","`api.example.com`","`/v2/repos/29`","`''`"],"answer":1,"explanation":"`url.hostname` is `api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v2/flights/42?airline=star&page=4#top\");\n```\n\nWhat is `url.origin`?","options":["`https://localhost:3000`","`/v2/flights/42`","`?airline=star&page=4`","`localhost:3000`"],"answer":0,"explanation":"`url.origin` is `https://localhost:3000`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/events/8?format=hybrid&page=3#top\");\n```\n\nWhat is `url.host`?","options":["`shop.test`","`?format=hybrid&page=3`","`/v2/events/8`","`shop.test:3000`"],"answer":3,"explanation":"`url.host` is `shop.test:3000`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/events/89?format=hybrid&page=4#top\");\n```\n\nWhat is `url.pathname`?","options":["`''`","`/v2/events/89`","`api.example.com`","`?format=hybrid&page=4`"],"answer":1,"explanation":"`url.pathname` is `/v2/events/89`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/songs/2?artist=Kairo&page=1#top\");\n```\n\nWhat is `url.port`?","options":["`''`","`/v1/songs/2`","`shop.test`","`?artist=Kairo&page=1`"],"answer":0,"explanation":"`url.port` is `''`."}]
---
# Node Drill: Parsing URLs #4

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
