---
slug: "node-url-parts-39"
title: "Node Drill: Parsing URLs #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/employees/27?team=mid&page=1#top\");\n```\n\nWhat is `url.host`?","options":["`/v1/employees/27`","`localhost`","`?team=mid&page=1`","`localhost:3000`"],"answer":3,"explanation":"`url.host` is `localhost:3000`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v2/tickets/71?channel=phone&page=3#top\");\n```\n\nWhat is `url.search`?","options":["`/v2/tickets/71`","`localhost`","`localhost:8080`","`?channel=phone&page=3`"],"answer":3,"explanation":"`url.search` is `?channel=phone&page=3`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/events/58?format=hybrid&page=3#top\");\n```\n\nWhat is `url.pathname`?","options":["`api.example.com`","`''`","`/v1/events/58`","`?format=hybrid&page=3`"],"answer":2,"explanation":"`url.pathname` is `/v1/events/58`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/repos/8?language=TypeScript&page=3#top\");\n```\n\nWhat is `url.pathname`?","options":["`/v2/repos/8`","`''`","`shop.test`","`?language=TypeScript&page=3`"],"answer":0,"explanation":"`url.pathname` is `/v2/repos/8`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/songs/41?artist=dark&page=2#top\");\n```\n\nWhat is `url.hostname`?","options":["`/v2/songs/41`","`?artist=dark&page=2`","`api.example.com:3000`","`api.example.com`"],"answer":3,"explanation":"`url.hostname` is `api.example.com`."}]
---
# Node Drill: Parsing URLs #39

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
