---
slug: "node-url-parts-86"
title: "Node Drill: Parsing URLs #86"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/events/73?format=in-person&page=5#top\");\n```\n\nWhat is `url.origin`?","options":["`/v1/events/73`","`localhost:8080`","`https://localhost:8080`","`?format=in-person&page=5`"],"answer":2,"explanation":"`url.origin` is `https://localhost:8080`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/flights/50?airline=oneworld&page=2#top\");\n```\n\nWhat is `url.hostname`?","options":["`localhost`","`?airline=oneworld&page=2`","`/v1/flights/50`","`localhost:3000`"],"answer":0,"explanation":"`url.hostname` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/workouts/90?kind=strength&page=3#top\");\n```\n\nWhat is `url.origin`?","options":["`?kind=strength&page=3`","`localhost:8080`","`/v1/workouts/90`","`https://localhost:8080`"],"answer":3,"explanation":"`url.origin` is `https://localhost:8080`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/movies/94?genre=drama&page=1#top\");\n```\n\nWhat is `url.hostname`?","options":["`localhost`","`?genre=drama&page=1`","`/v1/movies/94`","`localhost:3000`"],"answer":0,"explanation":"`url.hostname` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/courses/41?level=intermediate&page=3#top\");\n```\n\nWhat is `url.hostname`?","options":["`''`","`/v2/courses/41`","`?level=intermediate&page=3`","`shop.test`"],"answer":3,"explanation":"`url.hostname` is `shop.test`."}]
---
# Node Drill: Parsing URLs #86

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
