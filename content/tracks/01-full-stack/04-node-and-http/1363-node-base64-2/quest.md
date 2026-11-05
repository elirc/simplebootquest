---
slug: "node-base64-2"
title: "Node Drill: Base64 #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `Buffer.from(\"token\").toString('base64')` return?","options":["`746f6b656e`","`dG9rZW4`","`dG9rZW4=`","`dG9rZW4g`"],"answer":2,"explanation":"It's `dG9rZW4=`."},{"prompt":"What does `Buffer.from(\"abc\").toString('base64')` return?","options":["`QUJD`","`YWJjIA==`","`616263`","`YWJj`"],"answer":3,"explanation":"It's `YWJj`."},{"prompt":"What does `Buffer.from(\"admin\").toString('base64')` return?","options":["`YWRtaW4`","`YWRtaW4g`","`YWRtaW4=`","`61646d696e`"],"answer":2,"explanation":"It's `YWRtaW4=`."},{"prompt":"What does `Buffer.from(\"a\").toString('base64')` return?","options":["`YSA=`","`YQ`","`YQ==`","`61`"],"answer":2,"explanation":"It's `YQ==`."},{"prompt":"What does `Buffer.from(\"yes\").toString('base64')` return?","options":["`796573`","`WUVT`","`eWVzIA==`","`eWVz`"],"answer":3,"explanation":"It's `eWVz`."}]
---
# Node Drill: Base64 #2

Base64 turns bytes into text using 64 characters, so binary data can travel through text-only channels (JSON, headers, JWTs). It is **encoding, not encryption**: anyone can decode it. Every 3 bytes become 4 characters, padded with `=`.
