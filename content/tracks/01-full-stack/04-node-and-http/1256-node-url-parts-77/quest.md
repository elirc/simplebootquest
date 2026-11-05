---
slug: "node-url-parts-77"
title: "Node Drill: Parsing URLs #77"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/orders/33?country=pending&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`localhost:3000`","`/v1/orders/33`","`?country=pending&page=1`","`#top`"],"answer":3,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v1/tasks/3?assignee=todo&page=5#top\");\n```\n\nWhat is `url.hostname`?","options":["`?assignee=todo&page=5`","`api.example.com:3000`","`api.example.com`","`/v1/tasks/3`"],"answer":2,"explanation":"`url.hostname` is `api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v2/songs/40?artist=Nova&page=1#top\");\n```\n\nWhat is `url.port`?","options":["`3000`","`localhost:3000`","`?artist=Nova&page=1`","`/v2/songs/40`"],"answer":0,"explanation":"`url.port` is `3000`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/hotels/32?city=Toronto&page=3#top\");\n```\n\nWhat is `url.hostname`?","options":["`shop.test`","`''`","`/v1/hotels/32`","`?city=Toronto&page=3`"],"answer":0,"explanation":"`url.hostname` is `shop.test`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/plants/86?light=bright&page=5#top\");\n```\n\nWhat is `url.origin`?","options":["`https://api.example.com:3000`","`/v2/plants/86`","`api.example.com:3000`","`?light=bright&page=5`"],"answer":0,"explanation":"`url.origin` is `https://api.example.com:3000`."}]
---
# Node Drill: Parsing URLs #77

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
