---
slug: "sd09-fanout-write-33"
title: "Design Drill: Feed fan-out cost #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **30 posts/s**, and each author has **3100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3100","9300","93,000","30"],"answer":2},{"prompt":"Users publish **370 posts/s**, and each author has **2200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["81,400","370","814,000","2200"],"answer":2},{"prompt":"Users publish **370 posts/s**, and each author has **1300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["370","48,100","481,000","1300"],"answer":2},{"prompt":"Users publish **100 posts/s**, and each author has **1600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1600","16,000","160,000","100"],"answer":2},{"prompt":"Users publish **110 posts/s**, and each author has **800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["110","88,000","8800","800"],"answer":1}]
---
# Design Drill: Feed fan-out cost #33

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
