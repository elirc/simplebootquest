---
slug: "sd06-error-budget-30"
title: "Design Drill: Error budgets #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **63 million** requests and **189,000** failures. How much error budget is left?","options":["630,000 failed requests (100% of the budget)","882,000 failed requests (99% of the budget)","None: it's overspent by 442,000","441,000 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **38 million** requests and **26,600** failures. How much error budget is left?","options":["22,800 failed requests (60% of the budget)","11,400 failed requests (30% of the budget)","None: it's overspent by 12,400","38,000 failed requests (100% of the budget)"],"answer":1},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **58 million** requests and **348,000** failures. How much error budget is left?","options":["None: it's overspent by 59,000","116,000 failed requests (40% of the budget)","290,000 failed requests (100% of the budget)","None: it's overspent by 58,000"],"answer":3},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **41 million** requests and **143,500** failures. How much error budget is left?","options":["61,500 failed requests (30% of the budget)","None: it's overspent by 62,500","123,000 failed requests (60% of the budget)","205,000 failed requests (100% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **80 million** requests and **280,000** failures. How much error budget is left?","options":["400,000 failed requests (100% of the budget)","120,000 failed requests (30% of the budget)","240,000 failed requests (60% of the budget)","None: it's overspent by 121,000"],"answer":1}]
---
# Design Drill: Error budgets #30

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.
