---
slug: "node-url-parts-3"
title: "Node Drill: Parsing URLs #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v2/flights/17?airline=star&page=2#top\");\n```\n\nWhat is `url.hash`?","options":["`#top`","`shop.test:8080`","`?airline=star&page=2`","`/v2/flights/17`"],"answer":0,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/repos/64?language=Go&page=5#top\");\n```\n\nWhat is `url.port`?","options":["`?language=Go&page=5`","`''`","`/v2/repos/64`","`api.example.com`"],"answer":1,"explanation":"`url.port` is `''`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/hotels/26?city=Lisbon&page=5#top\");\n```\n\nWhat is `url.port`?","options":["`3000`","`/v1/hotels/26`","`?city=Lisbon&page=5`","`shop.test:3000`"],"answer":0,"explanation":"`url.port` is `3000`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/courses/95?level=intermediate&page=2#top\");\n```\n\nWhat is `url.port`?","options":["`localhost:8080`","`8080`","`/v1/courses/95`","`?level=intermediate&page=2`"],"answer":1,"explanation":"`url.port` is `8080`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/songs/29?artist=calm&page=3#top\");\n```\n\nWhat is `url.port`?","options":["`?artist=calm&page=3`","`/v2/songs/29`","`''`","`api.example.com`"],"answer":2,"explanation":"`url.port` is `''`."}]
---
# Node Drill: Parsing URLs #3

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
