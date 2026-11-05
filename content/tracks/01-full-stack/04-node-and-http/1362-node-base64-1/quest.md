---
slug: "node-base64-1"
title: "Node Drill: Base64 #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `Buffer.from(\"user:pass\").toString('base64')` return?","options":["`dXNlcjpwYXNzIA==`","`VVNFUjpQQVNT`","`dXNlcjpwYXNz`","`757365723a70617373`"],"answer":2,"explanation":"It's `dXNlcjpwYXNz`."},{"prompt":"What does `Buffer.from(\"ok!\").toString('base64')` return?","options":["`b2shIA==`","`6f6b21`","`b2sh`","`T0sh`"],"answer":2,"explanation":"It's `b2sh`."},{"prompt":"What does `Buffer.from(\"Node\").toString('base64')` return?","options":["`4e6f6465`","`Tm9kZQ`","`Tm9kZSA=`","`Tm9kZQ==`"],"answer":3,"explanation":"It's `Tm9kZQ==`."},{"prompt":"What does `Buffer.from(\"hi\").toString('base64')` return?","options":["`aGkg`","`aGk`","`6869`","`aGk=`"],"answer":3,"explanation":"It's `aGk=`."},{"prompt":"What does `Buffer.from(\"json\").toString('base64')` return?","options":["`6a736f6e`","`anNvbg`","`anNvbg==`","`anNvbiA=`"],"answer":2,"explanation":"It's `anNvbg==`."}]
---
# Node Drill: Base64 #1

Base64 turns bytes into text using 64 characters, so binary data can travel through text-only channels (JSON, headers, JWTs). It is **encoding, not encryption**: anyone can decode it. Every 3 bytes become 4 characters, padded with `=`.
