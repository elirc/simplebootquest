---
slug: "node-content-type-1"
title: "Node Drill: Content types #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"Which `Content-Type` fits **an HTML form post**?","options":["`text/javascript`","`text/css`","`application/x-www-form-urlencoded`","`text/html`"],"answer":2,"explanation":"Use `application/x-www-form-urlencoded`."},{"prompt":"Which `Content-Type` fits **photo.jpg**?","options":["`image/jpeg`","`text/html`","`text/css`","`text/javascript`"],"answer":0,"explanation":"Use `image/jpeg`."},{"prompt":"Which `Content-Type` fits **styles.css**?","options":["`text/css`","`text/javascript`","`text/html`","`application/json`"],"answer":0,"explanation":"Use `text/css`."},{"prompt":"Which `Content-Type` fits **data.json**?","options":["`application/json`","`text/javascript`","`text/css`","`text/html`"],"answer":0,"explanation":"Use `application/json`."},{"prompt":"Which `Content-Type` fits **a file upload form**?","options":["`text/html`","`multipart/form-data`","`text/javascript`","`text/css`"],"answer":1,"explanation":"Use `multipart/form-data`."}]
---
# Node Drill: Content types #1

`Content-Type` tells the receiver how to parse the body. Servers should set it on every response, and `express.json()` only parses requests that send `application/json`.
