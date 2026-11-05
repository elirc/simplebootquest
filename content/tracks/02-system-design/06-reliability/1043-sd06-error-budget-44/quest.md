---
slug: "sd06-error-budget-44"
title: "Design Drill: Error budgets #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **4 million** requests and **8000** failures. How much error budget is left?","options":["None: it's overspent by 4000","4000 failed requests (100% of the budget)","8000 failed requests (99% of the budget)","None: it's overspent by 5000"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **62 million** requests and **186,000** failures. How much error budget is left?","options":["None: it's overspent by 435,000","434,000 failed requests (70% of the budget)","620,000 failed requests (100% of the budget)","868,000 failed requests (99% of the budget)"],"answer":1},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **68 million** requests and **47,600** failures. How much error budget is left?","options":["40,800 failed requests (60% of the budget)","68,000 failed requests (100% of the budget)","None: it's overspent by 21,400","20,400 failed requests (30% of the budget)"],"answer":3},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **53 million** requests and **159,000** failures. How much error budget is left?","options":["530,000 failed requests (100% of the budget)","371,000 failed requests (70% of the budget)","None: it's overspent by 372,000","742,000 failed requests (99% of the budget)"],"answer":1},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **26 million** requests and **18,200** failures. How much error budget is left?","options":["None: it's overspent by 8800","7800 failed requests (30% of the budget)","15,600 failed requests (60% of the budget)","26,000 failed requests (100% of the budget)"],"answer":1}]
---
# Design Drill: Error budgets #44

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.
