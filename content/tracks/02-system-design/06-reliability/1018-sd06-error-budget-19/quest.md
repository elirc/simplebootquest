---
slug: "sd06-error-budget-19"
title: "Design Drill: Error budgets #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **34 million** requests and **408,000** failures. How much error budget is left?","options":["None: it's overspent by 68,000","None: it's overspent by 69,000","136,000 failed requests (40% of the budget)","340,000 failed requests (100% of the budget)"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **37 million** requests and **259,000** failures. How much error budget is left?","options":["None: it's overspent by 112,000","111,000 failed requests (30% of the budget)","370,000 failed requests (100% of the budget)","222,000 failed requests (60% of the budget)"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **67 million** requests and **469,000** failures. How much error budget is left?","options":["201,000 failed requests (30% of the budget)","None: it's overspent by 202,000","670,000 failed requests (100% of the budget)","402,000 failed requests (60% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **87 million** requests and **60,900** failures. How much error budget is left?","options":["26,100 failed requests (30% of the budget)","None: it's overspent by 27,100","52,200 failed requests (60% of the budget)","87,000 failed requests (100% of the budget)"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **11 million** requests and **77,000** failures. How much error budget is left?","options":["110,000 failed requests (100% of the budget)","None: it's overspent by 34,000","33,000 failed requests (30% of the budget)","66,000 failed requests (60% of the budget)"],"answer":2}]
---
# Design Drill: Error budgets #19

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.
