---
slug: "node-url-parts-41"
title: "Node Drill: Parsing URLs #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v1/plants/14?light=medium&page=3#top\");\n```\n\nWhat is `url.port`?","options":["`/v1/plants/14`","`3000`","`?light=medium&page=3`","`api.example.com:3000`"],"answer":1,"explanation":"`url.port` is `3000`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/employees/18?team=platform&page=1#top\");\n```\n\nWhat is `url.origin`?","options":["`?team=platform&page=1`","`api.example.com`","`/v2/employees/18`","`https://api.example.com`"],"answer":3,"explanation":"`url.origin` is `https://api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/events/44?format=in-person&page=5#top\");\n```\n\nWhat is `url.pathname`?","options":["`/v1/events/44`","`localhost:3000`","`localhost`","`?format=in-person&page=5`"],"answer":0,"explanation":"`url.pathname` is `/v1/events/44`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v2/cars/68?fuel=electric&page=4#top\");\n```\n\nWhat is `url.hostname`?","options":["`localhost`","`localhost:3000`","`/v2/cars/68`","`?fuel=electric&page=4`"],"answer":0,"explanation":"`url.hostname` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v2/flights/23?airline=skyteam&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`?airline=skyteam&page=1`","`/v2/flights/23`","`#top`","`localhost:8080`"],"answer":2,"explanation":"`url.hash` is `#top`."}]
---
# Node Drill: Parsing URLs #41

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
