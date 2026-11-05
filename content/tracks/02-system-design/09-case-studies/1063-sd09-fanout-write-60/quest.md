---
slug: "sd09-fanout-write-60"
title: "Design Drill: Feed fan-out cost #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **160 posts/s**, and each author has **1300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["20,800","160","208,000","1300"],"answer":2},{"prompt":"Users publish **270 posts/s**, and each author has **1100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["297,000","29,700","1100","270"],"answer":0},{"prompt":"Users publish **430 posts/s**, and each author has **1300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["55,900","430","1300","559,000"],"answer":3},{"prompt":"Users publish **30 posts/s**, and each author has **2600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["7800","30","2600","78,000"],"answer":3},{"prompt":"Users publish **400 posts/s**, and each author has **2700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["400","2700","108,000","1.08 million"],"answer":3}]
---
# Design Drill: Feed fan-out cost #60

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
