---
slug: "node-url-parts-80"
title: "Node Drill: Parsing URLs #80"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost/v2/recipes/76?cuisine=middle-eastern&page=1#top\");\n```\n\nWhat is `url.host`?","options":["`/v2/recipes/76`","`''`","`localhost`","`?cuisine=middle-eastern&page=1`"],"answer":2,"explanation":"`url.host` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/books/68?genre=sci-fi&page=3#top\");\n```\n\nWhat is `url.origin`?","options":["`https://api.example.com`","`/v2/books/68`","`?genre=sci-fi&page=3`","`api.example.com`"],"answer":0,"explanation":"`url.origin` is `https://api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/orders/63?status=pending&page=5#top\");\n```\n\nWhat is `url.origin`?","options":["`localhost:3000`","`/v1/orders/63`","`?status=pending&page=5`","`https://localhost:3000`"],"answer":3,"explanation":"`url.origin` is `https://localhost:3000`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/hotels/53?city=Toronto&page=3#top\");\n```\n\nWhat is `url.pathname`?","options":["`?city=Toronto&page=3`","`/v1/hotels/53`","`shop.test:3000`","`shop.test`"],"answer":1,"explanation":"`url.pathname` is `/v1/hotels/53`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/books/90?genre=tech&page=5#top\");\n```\n\nWhat is `url.hash`?","options":["`#top`","`localhost:8080`","`?genre=tech&page=5`","`/v1/books/90`"],"answer":0,"explanation":"`url.hash` is `#top`."}]
---
# Node Drill: Parsing URLs #80

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
