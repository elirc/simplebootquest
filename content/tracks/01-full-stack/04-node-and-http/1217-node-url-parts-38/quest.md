---
slug: "node-url-parts-38"
title: "Node Drill: Parsing URLs #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/songs/3?artist=Nova&page=3#top\");\n```\n\nWhat is `url.pathname`?","options":["`localhost:3000`","`localhost`","`?artist=Nova&page=3`","`/v1/songs/3`"],"answer":3,"explanation":"`url.pathname` is `/v1/songs/3`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/songs/24?mood=dark&page=4#top\");\n```\n\nWhat is `url.search`?","options":["`api.example.com`","`?mood=dark&page=4`","`/v1/songs/24`","`''`"],"answer":1,"explanation":"`url.search` is `?mood=dark&page=4`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v2/hotels/21?city=Lisbon&page=2#top\");\n```\n\nWhat is `url.origin`?","options":["`localhost:3000`","`/v2/hotels/21`","`https://localhost:3000`","`?city=Lisbon&page=2`"],"answer":2,"explanation":"`url.origin` is `https://localhost:3000`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v1/events/29?format=in-person&page=4#top\");\n```\n\nWhat is `url.port`?","options":["`/v1/events/29`","`8080`","`?format=in-person&page=4`","`shop.test:8080`"],"answer":1,"explanation":"`url.port` is `8080`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/products/47?category=office&page=1#top\");\n```\n\nWhat is `url.port`?","options":["`?category=office&page=1`","`localhost:3000`","`3000`","`/v1/products/47`"],"answer":2,"explanation":"`url.port` is `3000`."}]
---
# Node Drill: Parsing URLs #38

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
