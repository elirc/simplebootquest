---
slug: "node-url-parts-36"
title: "Node Drill: Parsing URLs #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/songs/75?mood=The%20Pines&page=2#top\");\n```\n\nWhat is `url.origin`?","options":["`/v2/songs/75`","`?mood=The%20Pines&page=2`","`shop.test`","`https://shop.test`"],"answer":3,"explanation":"`url.origin` is `https://shop.test`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v2/books/83?genre=classic&page=3#top\");\n```\n\nWhat is `url.pathname`?","options":["`''`","`/v2/books/83`","`?genre=classic&page=3`","`localhost`"],"answer":1,"explanation":"`url.pathname` is `/v2/books/83`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/repos/16?language=TypeScript&page=2#top\");\n```\n\nWhat is `url.pathname`?","options":["`/v2/repos/16`","`?language=TypeScript&page=2`","`api.example.com`","`api.example.com:8080`"],"answer":0,"explanation":"`url.pathname` is `/v2/repos/16`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/tickets/20?channel=phone&page=4#top\");\n```\n\nWhat is `url.port`?","options":["`''`","`?channel=phone&page=4`","`api.example.com`","`/v1/tickets/20`"],"answer":0,"explanation":"`url.port` is `''`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/songs/22?artist=calm&page=2#top\");\n```\n\nWhat is `url.hostname`?","options":["`api.example.com`","`?artist=calm&page=2`","`api.example.com:3000`","`/v2/songs/22`"],"answer":0,"explanation":"`url.hostname` is `api.example.com`."}]
---
# Node Drill: Parsing URLs #36

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
