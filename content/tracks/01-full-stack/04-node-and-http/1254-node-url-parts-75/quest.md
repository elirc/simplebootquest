---
slug: "node-url-parts-75"
title: "Node Drill: Parsing URLs #75"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/tasks/78?assignee=ada&page=3#top\");\n```\n\nWhat is `url.search`?","options":["`?assignee=ada&page=3`","`/v1/tasks/78`","`api.example.com`","`''`"],"answer":0,"explanation":"`url.search` is `?assignee=ada&page=3`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v2/events/40?format=online&page=4#top\");\n```\n\nWhat is `url.hostname`?","options":["`localhost`","`?format=online&page=4`","`localhost:8080`","`/v2/events/40`"],"answer":0,"explanation":"`url.hostname` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v2/songs/54?artist=dark&page=2#top\");\n```\n\nWhat is `url.pathname`?","options":["`?artist=dark&page=2`","`shop.test`","`/v2/songs/54`","`shop.test:8080`"],"answer":2,"explanation":"`url.pathname` is `/v2/songs/54`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/books/50?genre=sci-fi&page=4#top\");\n```\n\nWhat is `url.port`?","options":["`''`","`/v2/books/50`","`shop.test`","`?genre=sci-fi&page=4`"],"answer":0,"explanation":"`url.port` is `''`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/cars/95?fuel=petrol&page=1#top\");\n```\n\nWhat is `url.host`?","options":["`localhost:3000`","`/v1/cars/95`","`?fuel=petrol&page=1`","`localhost`"],"answer":0,"explanation":"`url.host` is `localhost:3000`."}]
---
# Node Drill: Parsing URLs #75

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
