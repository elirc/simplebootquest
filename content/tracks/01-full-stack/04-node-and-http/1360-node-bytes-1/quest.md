---
slug: "node-bytes-1"
title: "Node Drill: Bytes vs characters #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `Buffer.byteLength(\"ok 👍\")` return?","options":["8","4","5","7"],"answer":3,"explanation":"\"ok 👍\" is 7 bytes in UTF-8 (5 UTF-16 code units)."},{"prompt":"What does `Buffer.byteLength(\"Zoë\")` return?","options":["5","6","3","4"],"answer":3,"explanation":"\"Zoë\" is 4 bytes in UTF-8 (3 UTF-16 code units)."},{"prompt":"What does `Buffer.byteLength(\"São Paulo\")` return?","options":["11","9","18","10"],"answer":3,"explanation":"\"São Paulo\" is 10 bytes in UTF-8 (9 UTF-16 code units)."},{"prompt":"What does `Buffer.byteLength(\"hello\")` return?","options":["4","6","10","5"],"answer":3,"explanation":"\"hello\" is 5 bytes in UTF-8 (5 UTF-16 code units)."},{"prompt":"What does `Buffer.byteLength(\"🎉🎉\")` return?","options":["2","9","4","8"],"answer":3,"explanation":"\"🎉🎉\" is 8 bytes in UTF-8 (4 UTF-16 code units)."}]
---
# Node Drill: Bytes vs characters #1

`Content-Length` and many limits count **bytes**, not characters. In UTF-8, ASCII is 1 byte, accented Latin letters are 2, most other scripts are 3, and emoji are 4. `Buffer.byteLength(str)` tells you.
