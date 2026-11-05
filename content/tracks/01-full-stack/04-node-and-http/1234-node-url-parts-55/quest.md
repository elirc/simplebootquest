---
slug: "node-url-parts-55"
title: "Node Drill: Parsing URLs #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v2/hotels/21?city=Kyoto&page=5#top\");\n```\n\nWhat is `url.port`?","options":["`localhost:3000`","`?city=Kyoto&page=5`","`/v2/hotels/21`","`3000`"],"answer":3,"explanation":"`url.port` is `3000`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v1/courses/20?level=beginner&page=5#top\");\n```\n\nWhat is `url.port`?","options":["`?level=beginner&page=5`","`api.example.com:8080`","`/v1/courses/20`","`8080`"],"answer":3,"explanation":"`url.port` is `8080`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/songs/75?mood=happy&page=2#top\");\n```\n\nWhat is `url.pathname`?","options":["`api.example.com:3000`","`/v2/songs/75`","`?mood=happy&page=2`","`api.example.com`"],"answer":1,"explanation":"`url.pathname` is `/v2/songs/75`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/hotels/90?city=Kyoto&page=5#top\");\n```\n\nWhat is `url.port`?","options":["`shop.test`","`?city=Kyoto&page=5`","`''`","`/v1/hotels/90`"],"answer":2,"explanation":"`url.port` is `''`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/hotels/70?city=Lisbon&page=2#top\");\n```\n\nWhat is `url.pathname`?","options":["`/v1/hotels/70`","`''`","`shop.test`","`?city=Lisbon&page=2`"],"answer":0,"explanation":"`url.pathname` is `/v1/hotels/70`."}]
---
# Node Drill: Parsing URLs #55

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
