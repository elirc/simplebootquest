---
slug: "sd06-error-budget-2"
title: "Design Drill: Error budgets #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **64 million** requests and **44,800** failures. How much error budget is left?","options":["19,200 failed requests (30% of the budget)","64,000 failed requests (100% of the budget)","None: it's overspent by 20,200","38,400 failed requests (60% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **7 million** requests and **10,500** failures. How much error budget is left?","options":["35,000 failed requests (100% of the budget)","49,000 failed requests (99% of the budget)","None: it's overspent by 25,500","24,500 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **36 million** requests and **10,800** failures. How much error budget is left?","options":["50,400 failed requests (99% of the budget)","25,200 failed requests (70% of the budget)","36,000 failed requests (100% of the budget)","None: it's overspent by 26,200"],"answer":1},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **85 million** requests and **297,500** failures. How much error budget is left?","options":["127,500 failed requests (30% of the budget)","425,000 failed requests (100% of the budget)","255,000 failed requests (60% of the budget)","None: it's overspent by 128,500"],"answer":0},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **56 million** requests and **336,000** failures. How much error budget is left?","options":["None: it's overspent by 57,000","112,000 failed requests (40% of the budget)","280,000 failed requests (100% of the budget)","None: it's overspent by 56,000"],"answer":3}]
---
# Design Drill: Error budgets #2

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.
