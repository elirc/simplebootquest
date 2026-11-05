---
slug: "node-url-parts-10"
title: "Node Drill: Parsing URLs #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/hotels/9?city=Kyoto&page=3#top\");\n```\n\nWhat is `url.port`?","options":["`api.example.com`","`?city=Kyoto&page=3`","`/v2/hotels/9`","`''`"],"answer":3,"explanation":"`url.port` is `''`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/songs/1?artist=happy&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`#top`","`?artist=happy&page=1`","`shop.test`","`/v2/songs/1`"],"answer":0,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/orders/35?country=UK&page=2#top\");\n```\n\nWhat is `url.search`?","options":["`?country=UK&page=2`","`shop.test:3000`","`shop.test`","`/v2/orders/35`"],"answer":0,"explanation":"`url.search` is `?country=UK&page=2`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/students/36?course=design&page=4#top\");\n```\n\nWhat is `url.search`?","options":["`/v1/students/36`","`localhost:8080`","`?course=design&page=4`","`localhost`"],"answer":2,"explanation":"`url.search` is `?course=design&page=4`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/flights/82?airline=oneworld&page=4#top\");\n```\n\nWhat is `url.pathname`?","options":["`shop.test`","`''`","`?airline=oneworld&page=4`","`/v1/flights/82`"],"answer":3,"explanation":"`url.pathname` is `/v1/flights/82`."}]
---
# Node Drill: Parsing URLs #10

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
