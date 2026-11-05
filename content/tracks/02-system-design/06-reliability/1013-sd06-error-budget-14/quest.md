---
slug: "sd06-error-budget-14"
title: "Design Drill: Error budgets #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **92 million** requests and **1.84 million** failures. How much error budget is left?","options":["1.84 million failed requests (99% of the budget)","None: it's overspent by 920,000","None: it's overspent by 921,000","920,000 failed requests (100% of the budget)"],"answer":1},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **53 million** requests and **79,500** failures. How much error budget is left?","options":["371,000 failed requests (99% of the budget)","265,000 failed requests (100% of the budget)","185,500 failed requests (70% of the budget)","None: it's overspent by 186,500"],"answer":2},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **97 million** requests and **679,000** failures. How much error budget is left?","options":["291,000 failed requests (30% of the budget)","None: it's overspent by 292,000","970,000 failed requests (100% of the budget)","582,000 failed requests (60% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **1 million** requests and **300** failures. How much error budget is left?","options":["700 failed requests (70% of the budget)","None: it's overspent by 1700","1000 failed requests (100% of the budget)","1400 failed requests (99% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **89 million** requests and **133,500** failures. How much error budget is left?","options":["None: it's overspent by 312,500","623,000 failed requests (99% of the budget)","311,500 failed requests (70% of the budget)","445,000 failed requests (100% of the budget)"],"answer":2}]
---
# Design Drill: Error budgets #14

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.
