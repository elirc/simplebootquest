---
slug: "node-url-parts-33"
title: "Node Drill: Parsing URLs #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost/v2/flights/75?airline=star&page=4#top\");\n```\n\nWhat is `url.hash`?","options":["`#top`","`localhost`","`?airline=star&page=4`","`/v2/flights/75`"],"answer":0,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v1/tickets/92?channel=normal&page=5#top\");\n```\n\nWhat is `url.pathname`?","options":["`localhost`","`''`","`/v1/tickets/92`","`?channel=normal&page=5`"],"answer":2,"explanation":"`url.pathname` is `/v1/tickets/92`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/recipes/29?difficulty=easy&page=4#top\");\n```\n\nWhat is `url.host`?","options":["`api.example.com`","`api.example.com:3000`","`/v2/recipes/29`","`?difficulty=easy&page=4`"],"answer":1,"explanation":"`url.host` is `api.example.com:3000`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/repos/42?language=Python&page=1#top\");\n```\n\nWhat is `url.search`?","options":["`?language=Python&page=1`","`''`","`shop.test`","`/v1/repos/42`"],"answer":0,"explanation":"`url.search` is `?language=Python&page=1`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/students/62?course=design&page=1#top\");\n```\n\nWhat is `url.hostname`?","options":["`shop.test:3000`","`shop.test`","`/v1/students/62`","`?course=design&page=1`"],"answer":1,"explanation":"`url.hostname` is `shop.test`."}]
---
# Node Drill: Parsing URLs #33

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
