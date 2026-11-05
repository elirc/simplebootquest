---
slug: "node-bytes-2"
title: "Node Drill: Bytes vs characters #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `Buffer.byteLength(\"résumé\")` return?","options":["9","8","12","6"],"answer":1,"explanation":"\"résumé\" is 8 bytes in UTF-8 (6 UTF-16 code units)."},{"prompt":"What does `Buffer.byteLength(\"日本\")` return?","options":["7","6","2","4"],"answer":1,"explanation":"\"日本\" is 6 bytes in UTF-8 (2 UTF-16 code units)."},{"prompt":"What does `Buffer.byteLength(\"Москва\")` return?","options":["13","11","6","12"],"answer":3,"explanation":"\"Москва\" is 12 bytes in UTF-8 (6 UTF-16 code units)."},{"prompt":"What does `Buffer.byteLength(\"naïve\")` return?","options":["10","6","7","5"],"answer":1,"explanation":"\"naïve\" is 6 bytes in UTF-8 (5 UTF-16 code units)."},{"prompt":"What does `Buffer.byteLength(\"Ελλάδα\")` return?","options":["12","11","13","6"],"answer":0,"explanation":"\"Ελλάδα\" is 12 bytes in UTF-8 (6 UTF-16 code units)."}]
---
# Node Drill: Bytes vs characters #2

`Content-Length` and many limits count **bytes**, not characters. In UTF-8, ASCII is 1 byte, accented Latin letters are 2, most other scripts are 3, and emoji are 4. `Buffer.byteLength(str)` tells you.
