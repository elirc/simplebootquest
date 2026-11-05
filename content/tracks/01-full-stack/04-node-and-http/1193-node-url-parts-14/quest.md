---
slug: "node-url-parts-14"
title: "Node Drill: Parsing URLs #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v2/transactions/64?category=fun&page=3#top\");\n```\n\nWhat is `url.host`?","options":["`shop.test`","`/v2/transactions/64`","`shop.test:8080`","`?category=fun&page=3`"],"answer":2,"explanation":"`url.host` is `shop.test:8080`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v1/songs/23?mood=calm&page=2#top\");\n```\n\nWhat is `url.host`?","options":["`?mood=calm&page=2`","`/v1/songs/23`","`api.example.com`","`api.example.com:3000`"],"answer":3,"explanation":"`url.host` is `api.example.com:3000`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/movies/58?genre=thriller&page=2#top\");\n```\n\nWhat is `url.hostname`?","options":["`?genre=thriller&page=2`","`/v2/movies/58`","`api.example.com:8080`","`api.example.com`"],"answer":3,"explanation":"`url.hostname` is `api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/plants/42?light=medium&page=3#top\");\n```\n\nWhat is `url.origin`?","options":["`api.example.com`","`https://api.example.com`","`/v1/plants/42`","`?light=medium&page=3`"],"answer":1,"explanation":"`url.origin` is `https://api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v2/recipes/64?difficulty=easy&page=2#top\");\n```\n\nWhat is `url.hostname`?","options":["`localhost:8080`","`localhost`","`/v2/recipes/64`","`?difficulty=easy&page=2`"],"answer":1,"explanation":"`url.hostname` is `localhost`."}]
---
# Node Drill: Parsing URLs #14

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
