---
slug: "node-url-parts-19"
title: "Node Drill: Parsing URLs #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost/v1/recipes/85?difficulty=asian&page=3#top\");\n```\n\nWhat is `url.pathname`?","options":["`?difficulty=asian&page=3`","`''`","`localhost`","`/v1/recipes/85`"],"answer":3,"explanation":"`url.pathname` is `/v1/recipes/85`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/books/17?genre=classic&page=1#top\");\n```\n\nWhat is `url.host`?","options":["`/v1/books/17`","`localhost:3000`","`?genre=classic&page=1`","`localhost`"],"answer":1,"explanation":"`url.host` is `localhost:3000`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/events/82?format=online&page=5#top\");\n```\n\nWhat is `url.search`?","options":["`/v1/events/82`","`?format=online&page=5`","`localhost:8080`","`localhost`"],"answer":1,"explanation":"`url.search` is `?format=online&page=5`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v2/tickets/3?channel=chat&page=4#top\");\n```\n\nWhat is `url.host`?","options":["`?channel=chat&page=4`","`''`","`localhost`","`/v2/tickets/3`"],"answer":2,"explanation":"`url.host` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v1/tasks/98?assignee=doing&page=3#top\");\n```\n\nWhat is `url.port`?","options":["`localhost`","`?assignee=doing&page=3`","`/v1/tasks/98`","`''`"],"answer":3,"explanation":"`url.port` is `''`."}]
---
# Node Drill: Parsing URLs #19

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
