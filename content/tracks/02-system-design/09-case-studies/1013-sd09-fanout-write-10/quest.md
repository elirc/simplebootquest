---
slug: "sd09-fanout-write-10"
title: "Design Drill: Feed fan-out cost #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **450 posts/s**, and each author has **800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["36,000","360,000","450","800"],"answer":1},{"prompt":"Users publish **80 posts/s**, and each author has **2800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["22,400","80","2800","224,000"],"answer":3},{"prompt":"Users publish **10 posts/s**, and each author has **2800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["280,000","28,000","10","2800"],"answer":1},{"prompt":"Users publish **380 posts/s**, and each author has **2100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["798,000","79,800","2100","380"],"answer":0},{"prompt":"Users publish **500 posts/s**, and each author has **3200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["500","3200","1.6 million","160,000"],"answer":2}]
---
# Design Drill: Feed fan-out cost #10

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
