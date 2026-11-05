---
slug: "sd06-error-budget-52"
title: "Design Drill: Error budgets #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **16 million** requests and **56,000** failures. How much error budget is left?","options":["24,000 failed requests (30% of the budget)","80,000 failed requests (100% of the budget)","48,000 failed requests (60% of the budget)","None: it's overspent by 25,000"],"answer":0},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **72 million** requests and **252,000** failures. How much error budget is left?","options":["360,000 failed requests (100% of the budget)","108,000 failed requests (30% of the budget)","None: it's overspent by 109,000","216,000 failed requests (60% of the budget)"],"answer":1},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **32 million** requests and **112,000** failures. How much error budget is left?","options":["None: it's overspent by 49,000","160,000 failed requests (100% of the budget)","96,000 failed requests (60% of the budget)","48,000 failed requests (30% of the budget)"],"answer":3},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **34 million** requests and **680,000** failures. How much error budget is left?","options":["None: it's overspent by 341,000","680,000 failed requests (99% of the budget)","340,000 failed requests (100% of the budget)","None: it's overspent by 340,000"],"answer":3},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **34 million** requests and **102,000** failures. How much error budget is left?","options":["476,000 failed requests (99% of the budget)","None: it's overspent by 239,000","340,000 failed requests (100% of the budget)","238,000 failed requests (70% of the budget)"],"answer":3}]
---
# Design Drill: Error budgets #52

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.
