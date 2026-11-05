---
slug: "sd06-error-budget-34"
title: "Design Drill: Error budgets #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **29 million** requests and **20,300** failures. How much error budget is left?","options":["17,400 failed requests (60% of the budget)","8700 failed requests (30% of the budget)","None: it's overspent by 9700","29,000 failed requests (100% of the budget)"],"answer":1},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **61 million** requests and **610,000** failures. How much error budget is left?","options":["610,000 failed requests (99% of the budget)","None: it's overspent by 305,000","305,000 failed requests (100% of the budget)","None: it's overspent by 306,000"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **1 million** requests and **7000** failures. How much error budget is left?","options":["3000 failed requests (30% of the budget)","None: it's overspent by 4000","6000 failed requests (60% of the budget)","10,000 failed requests (100% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **40 million** requests and **12,000** failures. How much error budget is left?","options":["56,000 failed requests (99% of the budget)","None: it's overspent by 29,000","28,000 failed requests (70% of the budget)","40,000 failed requests (100% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **31 million** requests and **9300** failures. How much error budget is left?","options":["43,400 failed requests (99% of the budget)","21,700 failed requests (70% of the budget)","31,000 failed requests (100% of the budget)","None: it's overspent by 22,700"],"answer":1}]
---
# Design Drill: Error budgets #34

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.
