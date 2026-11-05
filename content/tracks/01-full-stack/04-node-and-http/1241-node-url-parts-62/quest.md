---
slug: "node-url-parts-62"
title: "Node Drill: Parsing URLs #62"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/hotels/9?city=Toronto&page=4#top\");\n```\n\nWhat is `url.port`?","options":["`/v1/hotels/9`","`localhost:8080`","`?city=Toronto&page=4`","`8080`"],"answer":3,"explanation":"`url.port` is `8080`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/repos/25?language=Python&page=4#top\");\n```\n\nWhat is `url.search`?","options":["`/v1/repos/25`","`localhost`","`localhost:3000`","`?language=Python&page=4`"],"answer":3,"explanation":"`url.search` is `?language=Python&page=4`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/movies/82?genre=sci-fi&page=1#top\");\n```\n\nWhat is `url.pathname`?","options":["`?genre=sci-fi&page=1`","`''`","`/v2/movies/82`","`api.example.com`"],"answer":2,"explanation":"`url.pathname` is `/v2/movies/82`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/plants/67?light=bright&page=2#top\");\n```\n\nWhat is `url.pathname`?","options":["`shop.test`","`/v2/plants/67`","`''`","`?light=bright&page=2`"],"answer":1,"explanation":"`url.pathname` is `/v2/plants/67`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/products/72?category=home&page=4#top\");\n```\n\nWhat is `url.hash`?","options":["`shop.test`","`/v1/products/72`","`#top`","`?category=home&page=4`"],"answer":2,"explanation":"`url.hash` is `#top`."}]
---
# Node Drill: Parsing URLs #62

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
