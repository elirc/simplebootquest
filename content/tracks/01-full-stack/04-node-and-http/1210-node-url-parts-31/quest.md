---
slug: "node-url-parts-31"
title: "Node Drill: Parsing URLs #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v1/movies/75?genre=sci-fi&page=3#top\");\n```\n\nWhat is `url.origin`?","options":["`?genre=sci-fi&page=3`","`https://api.example.com:8080`","`/v1/movies/75`","`api.example.com:8080`"],"answer":1,"explanation":"`url.origin` is `https://api.example.com:8080`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v2/transactions/80?category=fun&page=1#top\");\n```\n\nWhat is `url.host`?","options":["`''`","`/v2/transactions/80`","`?category=fun&page=1`","`localhost`"],"answer":3,"explanation":"`url.host` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/cities/21?continent=Americas&page=1#top\");\n```\n\nWhat is `url.search`?","options":["`/v1/cities/21`","`api.example.com`","`?continent=Americas&page=1`","`''`"],"answer":2,"explanation":"`url.search` is `?continent=Americas&page=1`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v1/cars/13?fuel=diesel&page=4#top\");\n```\n\nWhat is `url.host`?","options":["`api.example.com:3000`","`/v1/cars/13`","`?fuel=diesel&page=4`","`api.example.com`"],"answer":0,"explanation":"`url.host` is `api.example.com:3000`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v2/tickets/42?priority=urgent&page=3#top\");\n```\n\nWhat is `url.pathname`?","options":["`localhost`","`?priority=urgent&page=3`","`localhost:8080`","`/v2/tickets/42`"],"answer":3,"explanation":"`url.pathname` is `/v2/tickets/42`."}]
---
# Node Drill: Parsing URLs #31

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
