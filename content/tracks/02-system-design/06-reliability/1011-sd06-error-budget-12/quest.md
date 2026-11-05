---
slug: "sd06-error-budget-12"
title: "Design Drill: Error budgets #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **29 million** requests and **580,000** failures. How much error budget is left?","options":["290,000 failed requests (100% of the budget)","None: it's overspent by 291,000","None: it's overspent by 290,000","580,000 failed requests (99% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **26 million** requests and **52,000** failures. How much error budget is left?","options":["None: it's overspent by 26,000","52,000 failed requests (99% of the budget)","None: it's overspent by 27,000","26,000 failed requests (100% of the budget)"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **19 million** requests and **57,000** failures. How much error budget is left?","options":["190,000 failed requests (100% of the budget)","266,000 failed requests (99% of the budget)","None: it's overspent by 134,000","133,000 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **3 million** requests and **900** failures. How much error budget is left?","options":["2100 failed requests (70% of the budget)","None: it's overspent by 3100","3000 failed requests (100% of the budget)","4200 failed requests (99% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **12 million** requests and **72,000** failures. How much error budget is left?","options":["24,000 failed requests (40% of the budget)","60,000 failed requests (100% of the budget)","None: it's overspent by 12,000","None: it's overspent by 13,000"],"answer":2}]
---
# Design Drill: Error budgets #12

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.
