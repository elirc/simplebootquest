---
slug: "node-url-parts-47"
title: "Node Drill: Parsing URLs #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/recipes/21?cuisine=easy&page=1#top\");\n```\n\nWhat is `url.host`?","options":["`/v2/recipes/21`","`?cuisine=easy&page=1`","`shop.test`","`''`"],"answer":2,"explanation":"`url.host` is `shop.test`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/hotels/86?city=Lisbon&page=3#top\");\n```\n\nWhat is `url.search`?","options":["`''`","`api.example.com`","`?city=Lisbon&page=3`","`/v1/hotels/86`"],"answer":2,"explanation":"`url.search` is `?city=Lisbon&page=3`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/flights/89?airline=star&page=3#top\");\n```\n\nWhat is `url.hostname`?","options":["`?airline=star&page=3`","`/v2/flights/89`","`api.example.com`","`''`"],"answer":2,"explanation":"`url.hostname` is `api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/transactions/6?category=salary&page=4#top\");\n```\n\nWhat is `url.search`?","options":["`?category=salary&page=4`","`''`","`shop.test`","`/v2/transactions/6`"],"answer":0,"explanation":"`url.search` is `?category=salary&page=4`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v1/students/19?course=data&page=4#top\");\n```\n\nWhat is `url.origin`?","options":["`https://api.example.com:3000`","`/v1/students/19`","`api.example.com:3000`","`?course=data&page=4`"],"answer":0,"explanation":"`url.origin` is `https://api.example.com:3000`."}]
---
# Node Drill: Parsing URLs #47

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
