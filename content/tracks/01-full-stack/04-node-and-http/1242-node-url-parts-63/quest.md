---
slug: "node-url-parts-63"
title: "Node Drill: Parsing URLs #63"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/recipes/77?difficulty=asian&page=1#top\");\n```\n\nWhat is `url.pathname`?","options":["`?difficulty=asian&page=1`","`/v2/recipes/77`","`api.example.com`","`''`"],"answer":1,"explanation":"`url.pathname` is `/v2/recipes/77`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/books/15?genre=classic&page=3#top\");\n```\n\nWhat is `url.host`?","options":["`/v1/books/15`","`''`","`api.example.com`","`?genre=classic&page=3`"],"answer":2,"explanation":"`url.host` is `api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v2/hotels/62?city=Lisbon&page=1#top\");\n```\n\nWhat is `url.hostname`?","options":["`localhost`","`''`","`?city=Lisbon&page=1`","`/v2/hotels/62`"],"answer":0,"explanation":"`url.hostname` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/repos/86?language=Python&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`#top`","`shop.test`","`?language=Python&page=1`","`/v1/repos/86`"],"answer":0,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/products/48?category=home&page=3#top\");\n```\n\nWhat is `url.search`?","options":["`?category=home&page=3`","`shop.test:3000`","`/v2/products/48`","`shop.test`"],"answer":0,"explanation":"`url.search` is `?category=home&page=3`."}]
---
# Node Drill: Parsing URLs #63

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
