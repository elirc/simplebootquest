---
slug: "node-url-parts-73"
title: "Node Drill: Parsing URLs #73"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v2/hotels/13?city=Lisbon&page=3#top\");\n```\n\nWhat is `url.host`?","options":["`localhost:3000`","`localhost`","`?city=Lisbon&page=3`","`/v2/hotels/13`"],"answer":0,"explanation":"`url.host` is `localhost:3000`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v2/transactions/65?category=salary&page=3#top\");\n```\n\nWhat is `url.hostname`?","options":["`localhost`","`?category=salary&page=3`","`localhost:3000`","`/v2/transactions/65`"],"answer":0,"explanation":"`url.hostname` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v1/hotels/7?city=Lisbon&page=4#top\");\n```\n\nWhat is `url.search`?","options":["`api.example.com`","`?city=Lisbon&page=4`","`api.example.com:3000`","`/v1/hotels/7`"],"answer":1,"explanation":"`url.search` is `?city=Lisbon&page=4`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/cities/53?continent=Americas&page=2#top\");\n```\n\nWhat is `url.origin`?","options":["`https://shop.test:3000`","`?continent=Americas&page=2`","`shop.test:3000`","`/v1/cities/53`"],"answer":0,"explanation":"`url.origin` is `https://shop.test:3000`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/hotels/51?city=Toronto&page=1#top\");\n```\n\nWhat is `url.port`?","options":["`?city=Toronto&page=1`","`localhost:8080`","`8080`","`/v1/hotels/51`"],"answer":2,"explanation":"`url.port` is `8080`."}]
---
# Node Drill: Parsing URLs #73

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
