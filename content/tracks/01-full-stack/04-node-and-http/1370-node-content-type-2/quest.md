---
slug: "node-content-type-2"
title: "Node Drill: Content types #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"Which `Content-Type` fits **logo.png**?","options":["`text/html`","`image/png`","`text/javascript`","`text/css`"],"answer":1,"explanation":"Use `image/png`."},{"prompt":"Which `Content-Type` fits **icon.svg**?","options":["`text/html`","`text/css`","`text/javascript`","`image/svg+xml`"],"answer":3,"explanation":"Use `image/svg+xml`."},{"prompt":"Which `Content-Type` fits **app.js**?","options":["`application/json`","`text/css`","`text/html`","`text/javascript`"],"answer":3,"explanation":"Use `text/javascript`."},{"prompt":"Which `Content-Type` fits **font.woff2**?","options":["`text/javascript`","`text/css`","`font/woff2`","`text/html`"],"answer":2,"explanation":"Use `font/woff2`."},{"prompt":"Which `Content-Type` fits **report.pdf**?","options":["`text/html`","`text/javascript`","`application/pdf`","`text/css`"],"answer":2,"explanation":"Use `application/pdf`."}]
---
# Node Drill: Content types #2

`Content-Type` tells the receiver how to parse the body. Servers should set it on every response, and `express.json()` only parses requests that send `application/json`.
