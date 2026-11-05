---
slug: "node-url-parts-17"
title: "Node Drill: Parsing URLs #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/recipes/73?cuisine=italian&page=5#top\");\n```\n\nWhat is `url.pathname`?","options":["`shop.test`","`shop.test:3000`","`/v1/recipes/73`","`?cuisine=italian&page=5`"],"answer":2,"explanation":"`url.pathname` is `/v1/recipes/73`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v2/plants/25?light=low&page=5#top\");\n```\n\nWhat is `url.origin`?","options":["`https://shop.test:8080`","`shop.test:8080`","`/v2/plants/25`","`?light=low&page=5`"],"answer":0,"explanation":"`url.origin` is `https://shop.test:8080`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/hotels/20?city=Toronto&page=3#top\");\n```\n\nWhat is `url.search`?","options":["`shop.test`","`/v2/hotels/20`","`shop.test:3000`","`?city=Toronto&page=3`"],"answer":3,"explanation":"`url.search` is `?city=Toronto&page=3`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/tickets/47?priority=chat&page=3#top\");\n```\n\nWhat is `url.host`?","options":["`localhost`","`/v1/tickets/47`","`localhost:8080`","`?priority=chat&page=3`"],"answer":2,"explanation":"`url.host` is `localhost:8080`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/flights/43?airline=star&page=4#top\");\n```\n\nWhat is `url.origin`?","options":["`?airline=star&page=4`","`/v2/flights/43`","`https://api.example.com:3000`","`api.example.com:3000`"],"answer":2,"explanation":"`url.origin` is `https://api.example.com:3000`."}]
---
# Node Drill: Parsing URLs #17

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
