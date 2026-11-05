---
slug: "sd09-fanout-write-4"
title: "Design Drill: Feed fan-out cost #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **90 posts/s**, and each author has **1400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["126,000","1400","12,600","90"],"answer":0},{"prompt":"Users publish **410 posts/s**, and each author has **3800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1.56 million","3800","155,800","410"],"answer":0},{"prompt":"Users publish **160 posts/s**, and each author has **3600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["57,600","3600","576,000","160"],"answer":2},{"prompt":"Users publish **180 posts/s**, and each author has **400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["180","400","72,000","7200"],"answer":2},{"prompt":"Users publish **460 posts/s**, and each author has **2600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1.2 million","460","2600","119,600"],"answer":0}]
---
# Design Drill: Feed fan-out cost #4

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
