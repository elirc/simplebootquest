---
slug: "sd09-fanout-write-56"
title: "Design Drill: Feed fan-out cost #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **150 posts/s**, and each author has **3500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["52,500","525,000","150","3500"],"answer":1},{"prompt":"Users publish **280 posts/s**, and each author has **2600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2600","280","728,000","72,800"],"answer":2},{"prompt":"Users publish **440 posts/s**, and each author has **2600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["114,400","2600","440","1.14 million"],"answer":3},{"prompt":"Users publish **480 posts/s**, and each author has **2600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["480","2600","1.25 million","124,800"],"answer":2},{"prompt":"Users publish **430 posts/s**, and each author has **500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["215,000","21,500","430","500"],"answer":0}]
---
# Design Drill: Feed fan-out cost #56

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
